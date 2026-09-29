import { createHash, randomBytes } from 'node:crypto';
import type { Express, NextFunction, Request, Response } from 'express';
import { prisma } from '@vca/db';
import { issueDigitalSerial } from './serialPolicy.js';

const SESSION_COOKIE = 'vca_session';

type AuthenticatedRequest = Request & { userId?: string; role?: 'CUSTOMER' | 'GRADER' | 'ADMIN' };

function hashToken(token: string): string {
  return createHash('sha256').update(token).digest('hex');
}

function parseCookies(header?: string): Record<string, string> {
  if (!header) return {};
  return Object.fromEntries(header.split(';').map(part => {
    const index = part.indexOf('=');
    if (index < 0) return [part.trim(), ''];
    return [part.slice(0, index).trim(), decodeURIComponent(part.slice(index + 1).trim())];
  }));
}

async function requireStaff(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
  try {
    const bearer = req.header('authorization')?.replace(/^Bearer\s+/i, '');
    const cookies = parseCookies(req.header('cookie'));
    const token = bearer || cookies[SESSION_COOKIE];
    if (!token) {
      res.status(401).json({ success: false, error: 'AUTH_REQUIRED' });
      return;
    }

    const session = await prisma.session.findUnique({ where: { tokenHash: hashToken(token) }, include: { user: true } });
    if (!session || session.expiresAt <= new Date() || session.user.status !== 'ACTIVE') {
      res.status(401).json({ success: false, error: 'INVALID_SESSION' });
      return;
    }
    if (session.user.role !== 'GRADER' && session.user.role !== 'ADMIN') {
      res.status(403).json({ success: false, error: 'GRADER_PERMISSION_REQUIRED' });
      return;
    }
    req.userId = session.userId;
    req.role = session.user.role;
    next();
  } catch (error) {
    next(error);
  }
}

async function audit(actorId: string, action: string, entityType: string, entityId: string, metadata?: unknown): Promise<void> {
  await prisma.auditLog.create({ data: { actorId, action, entityType, entityId, metadata: metadata as object | undefined } });
}

function verificationHash(serial: string, grade: number): string {
  return createHash('sha256').update(`${serial}:${grade}:${randomBytes(16).toString('hex')}`).digest('hex');
}

export function registerGradingRoutes(app: Express): void {
  app.post('/api/grading/:submissionId/start', requireStaff, async (req: AuthenticatedRequest, res, next) => {
    try {
      const submission = await prisma.submission.findUnique({ where: { id: req.params.submissionId } });
      if (!submission) return res.status(404).json({ success: false, error: 'SUBMISSION_NOT_FOUND' });
      if (['CERTIFIED', 'CANCELLED'].includes(submission.status)) {
        return res.status(409).json({ success: false, error: 'SUBMISSION_NOT_GRADABLE' });
      }

      const report = await prisma.gradingReport.create({
        data: { submissionId: submission.id, methodologyVersion: String(req.body?.methodologyVersion || 'VCA-1.0') },
      });
      await prisma.submission.update({ where: { id: submission.id }, data: { status: 'GRADING' } });
      await audit(req.userId!, 'GRADING_STARTED', 'Submission', submission.id, { gradingReportId: report.id, methodologyVersion: report.methodologyVersion });
      res.status(201).json({ success: true, gradingReport: report });
    } catch (error) { next(error); }
  });

  app.post('/api/grading/:submissionId/review', requireStaff, async (req: AuthenticatedRequest, res, next) => {
    try {
      const report = await prisma.gradingReport.findFirst({ where: { submissionId: req.params.submissionId }, orderBy: { createdAt: 'desc' } });
      if (!report) return res.status(404).json({ success: false, error: 'GRADING_REPORT_NOT_FOUND' });
      if (report.finalizedAt) return res.status(409).json({ success: false, error: 'GRADING_ALREADY_FINALIZED' });

      const numeric = (value: unknown): number | undefined => value === undefined || value === null || value === '' ? undefined : Number(value);
      const fields = {
        centering: numeric(req.body?.centering),
        corners: numeric(req.body?.corners),
        edges: numeric(req.body?.edges),
        surface: numeric(req.body?.surface),
        printQuality: numeric(req.body?.printQuality),
        whitening: numeric(req.body?.whitening),
        proposedGrade: numeric(req.body?.proposedGrade),
        humanGrade: numeric(req.body?.humanGrade),
        defects: req.body?.defects === undefined ? undefined : req.body.defects,
      };

      const updated = await prisma.gradingReport.update({ where: { id: report.id }, data: fields });
      await prisma.submission.update({ where: { id: req.params.submissionId }, data: { status: 'AWAITING_APPROVAL' } });
      await audit(req.userId!, 'GRADING_REVIEW_UPDATED', 'GradingReport', report.id, { submissionId: req.params.submissionId });
      res.json({ success: true, gradingReport: updated });
    } catch (error) { next(error); }
  });

  app.post('/api/grading/:submissionId/finalize', requireStaff, async (req: AuthenticatedRequest, res, next) => {
    try {
      const report = await prisma.gradingReport.findFirst({
        where: { submissionId: req.params.submissionId },
        orderBy: { createdAt: 'desc' },
        include: { certificate: true },
      });
      if (!report) return res.status(404).json({ success: false, error: 'GRADING_REPORT_NOT_FOUND' });
      if (report.finalizedAt || report.certificate) return res.status(409).json({ success: false, error: 'GRADING_ALREADY_FINALIZED' });

      const grade = Number(req.body?.finalGrade ?? report.humanGrade ?? report.proposedGrade);
      if (!Number.isFinite(grade) || grade < 1 || grade > 10) {
        return res.status(400).json({ success: false, error: 'INVALID_FINAL_GRADE', message: 'Final grade must be between 1 and 10.' });
      }

      // Client-supplied serials are never accepted — issuance is server-only (digital policy).
      const result = await prisma.$transaction(async tx => {
        const finalizedAt = new Date();
        const updatedReport = await tx.gradingReport.update({ where: { id: report.id }, data: { humanGrade: grade, finalizedAt } });

        let serial = issueDigitalSerial();
        let certificateNo = serial;
        for (let attempt = 0; attempt < 8; attempt++) {
          const existing = await tx.certificate.findFirst({ where: { OR: [{ serialNo: serial }, { certificateNo }] } });
          if (!existing) break;
          serial = issueDigitalSerial();
          certificateNo = serial;
        }

        const certificate = await tx.certificate.create({
          data: {
            gradingReportId: updatedReport.id,
            certificateNo,
            serialNo: serial,
            status: 'CERTIFIED',
            finalGrade: grade,
            graderId: req.userId!,
            certifiedAt: finalizedAt,
            verificationHash: verificationHash(serial, grade),
          },
        });

        // Ensure an ASSEMBLY slab exists so NFC bind can proceed later.
        let slab = await tx.slab.findUnique({ where: { certificateId: certificate.id } });
        if (!slab) {
          slab = await tx.slab.create({
            data: { certificateId: certificate.id, status: 'ASSEMBLY', model: 'VCA-DIGITAL-1' },
          });
          await tx.auditLog.create({
            data: {
              actorId: req.userId!,
              action: 'SLAB_CREATED',
              entityType: 'Slab',
              entityId: slab.id,
              metadata: { certificateId: certificate.id, status: 'ASSEMBLY' },
            },
          });
        }

        await tx.submission.update({ where: { id: req.params.submissionId }, data: { status: 'CERTIFIED' } });
        await tx.auditLog.create({ data: { actorId: req.userId!, action: 'GRADE_FINALIZED', entityType: 'GradingReport', entityId: updatedReport.id, metadata: { finalGrade: grade, methodologyVersion: updatedReport.methodologyVersion } } });
        await tx.auditLog.create({ data: { actorId: req.userId!, action: 'CERTIFICATE_ISSUED', entityType: 'Certificate', entityId: certificate.id, metadata: { serialNo: certificate.serialNo, certificateNo: certificate.certificateNo, kind: 'digital' } } });
        return { updatedReport, certificate, slab };
      });

      res.status(201).json({ success: true, gradingReport: result.updatedReport, certificate: result.certificate, slab: result.slab });
    } catch (error) { next(error); }
  });
}
