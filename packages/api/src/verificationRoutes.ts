import { createHash, randomBytes } from 'node:crypto';
import type { Express, NextFunction, Request, Response } from 'express';
import { prisma } from '@vca/db';
import { createPublicRateLimit } from './publicRateLimit.js';
import { isValidVcaSerial } from './serialPolicy.js';
import { mapCertificateVerificationStatus, shouldAuditVerification } from './verificationStatus.js';

const SESSION_COOKIE = 'vca_session';
type AuthenticatedRequest = Request & { userId?: string; userRole?: string };

function hashToken(token: string): string { return createHash('sha256').update(token).digest('hex'); }
function parseCookies(header?: string): Record<string, string> {
  if (!header) return {};
  return Object.fromEntries(header.split(';').map(part => {
    const index = part.indexOf('=');
    if (index < 0) return [part.trim(), ''];
    const raw = part.slice(index + 1).trim();
    // Cookie values may contain bare %; never let decode throw into auth middleware.
    let value = raw;
    try { value = decodeURIComponent(raw); } catch { value = raw; }
    return [part.slice(0, index).trim(), value];
  }));
}
async function requireStaff(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
  try {
    const bearer = req.header('authorization')?.replace(/^Bearer\s+/i, '');
    const cookies = parseCookies(req.header('cookie'));
    const token = bearer || cookies[SESSION_COOKIE];
    if (!token) { res.status(401).json({ success: false, error: 'AUTH_REQUIRED' }); return; }
    const session = await prisma.session.findUnique({ where: { tokenHash: hashToken(token) }, include: { user: true } });
    if (!session || session.expiresAt <= new Date() || session.user.status !== 'ACTIVE') { res.status(401).json({ success: false, error: 'INVALID_SESSION' }); return; }
    if (session.user.role !== 'GRADER' && session.user.role !== 'ADMIN') { res.status(403).json({ success: false, error: 'STAFF_PERMISSION_REQUIRED' }); return; }
    req.userId = session.userId; req.userRole = session.user.role; next();
  } catch (error) { next(error); }
}
async function audit(actorId: string | null, action: string, entityType: string, entityId: string, metadata?: unknown): Promise<void> {
  await prisma.auditLog.create({ data: { actorId, action, entityType, entityId, metadata: metadata as object | undefined } });
}

const certificatePublicInclude = {
  gradingReport: { include: { submission: { include: { card: { include: { set: true } } } } } },
  slab: true,
  nfcRecord: true,
} as const;

function publicCertificate(certificate: any) {
  const card = certificate.gradingReport?.submission?.card;
  return {
    certificateNo: certificate.certificateNo,
    serialNo: certificate.serialNo,
    status: certificate.status,
    finalGrade: certificate.finalGrade,
    certifiedAt: certificate.certifiedAt,
    card: card ? { name: card.name, collectorNo: card.collectorNo, variant: card.variant, language: card.language, set: card.set ? { name: card.set.name, brand: card.set.brand, year: card.set.year } : null } : null,
    slab: certificate.slab ? { status: certificate.slab.status, model: certificate.slab.model, nfcEnabled: Boolean(certificate.nfcRecord) } : null,
    nfc: certificate.nfcRecord ? { securityLevel: certificate.nfcRecord.securityLevel, tamperStatus: certificate.nfcRecord.tamperStatus, lastVerifiedAt: certificate.nfcRecord.lastVerifiedAt } : null,
  };
}


/**
 * Express already URI-decodes route params. Do not call decodeURIComponent again
 * (double-decode throws URIError → 500 on inputs like bare `%`).
 */
function readSerialParam(raw: unknown): string {
  return String(raw ?? '').trim();
}

// Public verify endpoints: ~30 req/min/IP. Serial keyspace is guessable; bound probes + audit writes.
const publicVerifyRateLimit = createPublicRateLimit({ windowMs: 60_000, max: 30, errorCode: 'VERIFY_RATE_LIMITED' });

export function registerVerificationRoutes(app: Express): void {
  app.post('/api/certificates/:serial/qr', requireStaff, async (req: AuthenticatedRequest, res, next) => {
    try {
      const certificate = await prisma.certificate.findUnique({ where: { serialNo: req.params.serial } });
      if (!certificate) { res.status(404).json({ success: false, error: 'CERTIFICATE_NOT_FOUND' }); return; }
      if (certificate.status === 'REVOKED') { res.status(409).json({ success: false, error: 'CERTIFICATE_REVOKED' }); return; }
      const existing = await prisma.qRRecord.findUnique({ where: { certificateId: certificate.id } });
      const record = existing ?? await prisma.qRRecord.create({ data: { certificateId: certificate.id, publicToken: randomBytes(32).toString('base64url') } });
      await audit(req.userId!, existing ? 'QR_RECORD_RETRIEVED' : 'QR_RECORD_CREATED', 'QRRecord', record.id, { certificateId: certificate.id });
      // PUBLIC_VERIFY_URL should be the public UI origin (Slabook), e.g. http://localhost:5173
      const baseUrl = process.env.PUBLIC_VERIFY_URL || `${req.protocol}://${req.get('host')}`;
      res.status(existing ? 200 : 201).json({ success: true, qr: { token: record.publicToken, verificationUrl: `${baseUrl.replace(/\/$/, '')}/verify/qr/${record.publicToken}` } });
    } catch (error) { next(error); }
  });

  app.get('/api/verify/qr/:token', publicVerifyRateLimit, async (req, res, next) => {
    try {
      const record = await prisma.qRRecord.findUnique({
        where: { publicToken: req.params.token },
        include: { certificate: { include: certificatePublicInclude } },
      });
      if (!record || !record.active) { res.status(404).json({ success: false, verificationStatus: 'NOT_FOUND' }); return; }
      await prisma.qRRecord.update({ where: { id: record.id }, data: { scanCount: { increment: 1 }, lastVerifiedAt: new Date() } });
      const certificate = record.certificate;
      const verificationStatus = mapCertificateVerificationStatus(certificate.status);
      if (shouldAuditVerification(verificationStatus)) {
        await audit(null, 'QR_VERIFICATION', 'Certificate', record.certificateId, { qrRecordId: record.id, verificationStatus });
      }
      res.json({ success: true, verificationStatus, certificate: publicCertificate(certificate), verifiedAt: new Date().toISOString() });
    } catch (error) { next(error); }
  });

  /** Same public shape as QR verify — preferred by Slabook `/verify/:serial`. */
  app.get('/api/verify/serial/:serial', publicVerifyRateLimit, async (req, res, next) => {
    try {
      const serial = readSerialParam(req.params.serial);
      if (!serial) { res.status(400).json({ success: false, verificationStatus: 'NOT_FOUND', error: 'SERIAL_REQUIRED' }); return; }
      // Reject non-canonical formats before DB — shrinks enumerable probe surface.
      if (!isValidVcaSerial(serial)) {
        res.status(400).json({ success: false, verificationStatus: 'NOT_FOUND', error: 'SERIAL_INVALID' });
        return;
      }
      const certificate = await prisma.certificate.findUnique({
        where: { serialNo: serial },
        include: certificatePublicInclude,
      });
      if (!certificate) { res.status(404).json({ success: false, verificationStatus: 'NOT_FOUND' }); return; }
      const verificationStatus = mapCertificateVerificationStatus(certificate.status);
      // Gate audit: skip pending/unknown (STATUS_UNAVAILABLE) so probes don't flood audit_log.
      if (shouldAuditVerification(verificationStatus)) {
        await audit(null, 'SERIAL_VERIFICATION', 'Certificate', certificate.id, { serialNo: serial, verificationStatus });
      }
      res.json({ success: true, verificationStatus, certificate: publicCertificate(certificate), verifiedAt: new Date().toISOString() });
    } catch (error) { next(error); }
  });

  app.post('/api/nfc/bind', requireStaff, async (req: AuthenticatedRequest, res, next) => {
    try {
      const serialNo = String(req.body?.serialNo || '').trim();
      const identifier = String(req.body?.identifier || '').trim();
      const securityLevel = req.body?.securityLevel === 'CRYPTOGRAPHIC' ? 'CRYPTOGRAPHIC' : 'IDENTIFIER_ONLY';
      const tamperStatus = ['UNKNOWN', 'CLEAR', 'SUSPECTED', 'TAMPERED'].includes(req.body?.tamperStatus) ? req.body.tamperStatus : 'UNKNOWN';
      if (!serialNo || !identifier) { res.status(400).json({ success: false, error: 'SERIAL_AND_IDENTIFIER_REQUIRED' }); return; }
      const certificate = await prisma.certificate.findUnique({ where: { serialNo }, include: { slab: true } });
      if (!certificate) { res.status(404).json({ success: false, error: 'CERTIFICATE_NOT_FOUND' }); return; }
      if (certificate.status === 'REVOKED') { res.status(409).json({ success: false, error: 'CERTIFICATE_REVOKED' }); return; }
      if (!certificate.slab) { res.status(409).json({ success: false, error: 'SLAB_REQUIRED_BEFORE_NFC_BINDING' }); return; }
      const existingIdentifier = await prisma.nFCRecord.findUnique({ where: { identifier } });
      if (existingIdentifier && existingIdentifier.certificateId !== certificate.id) { res.status(409).json({ success: false, error: 'NFC_IDENTIFIER_ALREADY_BOUND' }); return; }
      const record = await prisma.nFCRecord.upsert({ where: { certificateId: certificate.id }, create: { certificateId: certificate.id, slabId: certificate.slab.id, identifier, securityLevel, tamperStatus }, update: { slabId: certificate.slab.id, identifier, securityLevel, tamperStatus } });
      await audit(req.userId!, 'NFC_BOUND', 'NFCRecord', record.id, { certificateId: certificate.id, securityLevel, tamperStatus });
      res.status(201).json({ success: true, nfc: { id: record.id, identifier: record.identifier, securityLevel: record.securityLevel, tamperStatus: record.tamperStatus, certificateSerial: certificate.serialNo } });
    } catch (error) { next(error); }
  });

  app.get('/api/nfc/verify/:identifier', publicVerifyRateLimit, async (req, res, next) => {
    try {
      const record = await prisma.nFCRecord.findUnique({
        where: { identifier: req.params.identifier },
        include: { certificate: { include: { gradingReport: { include: { submission: { include: { card: { include: { set: true } } } } } }, slab: true } } },
      });
      if (!record) { res.status(404).json({ success: false, verificationStatus: 'NFC_IDENTIFIER_NOT_REGISTERED' }); return; }
      const verifiedAt = new Date();
      await prisma.nFCRecord.update({ where: { id: record.id }, data: { lastVerifiedAt: verifiedAt } });
      const certStatus = record.certificate.status;
      const verificationStatus = certStatus === 'REVOKED' ? 'REVOKED' : certStatus === 'SUSPENDED' ? 'SUSPENDED' : record.securityLevel === 'CRYPTOGRAPHIC' ? 'REGISTERED_CRYPTOGRAPHIC' : 'IDENTIFIER_MATCH_ONLY';
      // NFC outcomes above are all meaningful; still audit (rate-limited at edge).
      await audit(null, 'NFC_VERIFICATION', 'NFCRecord', record.id, { securityLevel: record.securityLevel, verificationStatus });
      res.json({ success: true, verificationStatus, certificate: publicCertificate(record.certificate), nfc: { securityLevel: record.securityLevel, tamperStatus: record.tamperStatus, lastVerifiedAt: verifiedAt.toISOString() } });
    } catch (error) { next(error); }
  });

  app.post('/api/nfc/:identifier/tamper-status', requireStaff, async (req: AuthenticatedRequest, res, next) => {
    try {
      const tamperStatus = req.body?.tamperStatus;
      if (!['UNKNOWN', 'CLEAR', 'SUSPECTED', 'TAMPERED'].includes(tamperStatus)) { res.status(400).json({ success: false, error: 'INVALID_TAMPER_STATUS' }); return; }
      const record = await prisma.nFCRecord.update({ where: { identifier: req.params.identifier }, data: { tamperStatus } });
      await audit(req.userId!, 'NFC_TAMPER_STATUS_UPDATED', 'NFCRecord', record.id, { tamperStatus });
      res.json({ success: true, nfc: { identifier: record.identifier, tamperStatus: record.tamperStatus, updatedAt: record.updatedAt } });
    } catch (error) { next(error); }
  });
}
