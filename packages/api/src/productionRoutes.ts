import { createHash, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';
import type { Express, NextFunction, Request, Response } from 'express';
import { prisma } from '@vca/db';
import { databaseHealth } from '@vca/db';
import { registerGradingRoutes } from './gradingRoutes.js';

const SESSION_DAYS = 7;
const SESSION_COOKIE = 'vca_session';

type AuthenticatedRequest = Request & { userId?: string };

function hashToken(token: string): string {
  return createHash('sha256').update(token).digest('hex');
}

function hashPassword(password: string): string {
  const salt = randomBytes(16).toString('hex');
  const derived = scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${derived}`;
}

function verifyPassword(password: string, stored: string): boolean {
  const [salt, expectedHex] = stored.split(':');
  if (!salt || !expectedHex) return false;
  const actual = scryptSync(password, salt, 64);
  const expected = Buffer.from(expectedHex, 'hex');
  return expected.length === actual.length && timingSafeEqual(actual, expected);
}

function parseCookies(header?: string): Record<string, string> {
  if (!header) return {};
  return Object.fromEntries(header.split(';').map(part => {
    const index = part.indexOf('=');
    if (index < 0) return [part.trim(), ''];
    return [part.slice(0, index).trim(), decodeURIComponent(part.slice(index + 1).trim())];
  }));
}

function setSessionCookie(res: Response, token: string, expires: Date): void {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : '';
  res.setHeader('Set-Cookie', `${SESSION_COOKIE}=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Expires=${expires.toUTCString()}${secure}`);
}

async function audit(actorId: string | null, action: string, entityType: string, entityId: string, metadata?: unknown): Promise<void> {
  await prisma.auditLog.create({
    data: {
      actorId,
      action,
      entityType,
      entityId,
      metadata: metadata as object | undefined,
    },
  });
}

async function requireAuth(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
  try {
    const bearer = req.header('authorization')?.replace(/^Bearer\s+/i, '');
    const cookies = parseCookies(req.header('cookie'));
    const token = bearer || cookies[SESSION_COOKIE];
    if (!token) {
      res.status(401).json({ success: false, error: 'AUTH_REQUIRED' });
      return;
    }

    const session = await prisma.session.findUnique({
      where: { tokenHash: hashToken(token) },
      include: { user: true },
    });

    if (!session || session.expiresAt <= new Date() || session.user.status !== 'ACTIVE') {
      res.status(401).json({ success: false, error: 'INVALID_SESSION' });
      return;
    }

    req.userId = session.userId;
    next();
  } catch (error) {
    next(error);
  }
}

export function registerProductionRoutes(app: Express): void {
  app.get('/api/health', async (_req, res) => {
    const db = await databaseHealth();
    const healthy = db.ok;
    res.status(healthy ? 200 : 503).json({
      success: healthy,
      service: 'vca-api',
      database: db,
      timestamp: new Date().toISOString(),
    });
  });

  app.post('/api/auth/register', async (req, res, next) => {
    try {
      const email = String(req.body?.email || '').trim().toLowerCase();
      const password = String(req.body?.password || '');
      const displayName = req.body?.displayName ? String(req.body.displayName).trim() : undefined;
      if (!/^\S+@\S+\.\S+$/.test(email) || password.length < 12) {
        res.status(400).json({ success: false, error: 'INVALID_CREDENTIALS', message: 'Use a valid email and a password of at least 12 characters.' });
        return;
      }

      const existing = await prisma.user.findUnique({ where: { email } });
      if (existing) {
        res.status(409).json({ success: false, error: 'EMAIL_EXISTS' });
        return;
      }

      const user = await prisma.user.create({
        data: { email, passwordHash: hashPassword(password), displayName },
        select: { id: true, email: true, displayName: true, status: true, role: true, createdAt: true },
      });
      await audit(user.id, 'USER_REGISTERED', 'User', user.id);
      res.status(201).json({ success: true, user });
    } catch (error) {
      next(error);
    }
  });

  app.post('/api/auth/login', async (req, res, next) => {
    try {
      const email = String(req.body?.email || '').trim().toLowerCase();
      const password = String(req.body?.password || '');
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user || user.status !== 'ACTIVE' || !verifyPassword(password, user.passwordHash)) {
        res.status(401).json({ success: false, error: 'INVALID_LOGIN' });
        return;
      }

      const token = randomBytes(32).toString('base64url');
      const expiresAt = new Date(Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000);
      await prisma.session.create({ data: { userId: user.id, tokenHash: hashToken(token), expiresAt } });
      setSessionCookie(res, token, expiresAt);
      await audit(user.id, 'USER_LOGIN', 'User', user.id);
      res.json({ success: true, user: { id: user.id, email: user.email, displayName: user.displayName, role: user.role } });
    } catch (error) {
      next(error);
    }
  });

  app.post('/api/auth/logout', requireAuth, async (req: AuthenticatedRequest, res, next) => {
    try {
      const bearer = req.header('authorization')?.replace(/^Bearer\s+/i, '');
      const cookies = parseCookies(req.header('cookie'));
      const token = bearer || cookies[SESSION_COOKIE];
      if (token) await prisma.session.deleteMany({ where: { tokenHash: hashToken(token) } });
      res.setHeader('Set-Cookie', `${SESSION_COOKIE}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`);
      await audit(req.userId ?? null, 'USER_LOGOUT', 'User', req.userId ?? 'unknown');
      res.json({ success: true });
    } catch (error) {
      next(error);
    }
  });

  app.get('/api/auth/me', requireAuth, async (req: AuthenticatedRequest, res, next) => {
    try {
      const user = await prisma.user.findUnique({ where: { id: req.userId! }, select: { id: true, email: true, displayName: true, role: true, status: true, createdAt: true } });
      if (!user) {
        res.status(404).json({ success: false, error: 'USER_NOT_FOUND' });
        return;
      }
      res.json({ success: true, user });
    } catch (error) {
      next(error);
    }
  });

  app.post('/api/submissions', requireAuth, async (req: AuthenticatedRequest, res, next) => {
    try {
      const cardId = req.body?.cardId ? String(req.body.cardId) : undefined;
      const submission = await prisma.submission.create({
        data: { userId: req.userId!, cardId, status: 'RECEIVED', submittedAt: new Date() },
        include: { card: true },
      });
      await audit(req.userId!, 'SUBMISSION_CREATED', 'Submission', submission.id, { cardId });
      res.status(201).json({ success: true, submission });
    } catch (error) {
      next(error);
    }
  });

  app.get('/api/submissions', requireAuth, async (req: AuthenticatedRequest, res, next) => {
    try {
      const submissions = await prisma.submission.findMany({ where: { userId: req.userId! }, include: { card: true, gradingReports: true }, orderBy: { createdAt: 'desc' } });
      res.json({ success: true, submissions });
    } catch (error) {
      next(error);
    }
  });

  app.get('/api/submissions/:id', requireAuth, async (req: AuthenticatedRequest, res, next) => {
    try {
      const submission = await prisma.submission.findUnique({ where: { id: req.params.id }, include: { card: true, gradingReports: { include: { certificate: true } } } });
      if (!submission || submission.userId !== req.userId) {
        res.status(404).json({ success: false, error: 'SUBMISSION_NOT_FOUND' });
        return;
      }
      res.json({ success: true, submission });
    } catch (error) {
      next(error);
    }
  });

  app.get('/api/certificates/:serial', async (req, res, next) => {
    try {
      const certificate = await prisma.certificate.findUnique({
        where: { serialNo: req.params.serial },
        include: { gradingReport: { include: { submission: { include: { card: { include: { set: true } } } } } }, slab: true },
      });
      if (!certificate) {
        res.status(404).json({ success: false, error: 'CERTIFICATE_NOT_FOUND' });
        return;
      }
      res.json({ success: true, certificate: { certificateNo: certificate.certificateNo, serialNo: certificate.serialNo, status: certificate.status, finalGrade: certificate.finalGrade, certifiedAt: certificate.certifiedAt, card: certificate.gradingReport.submission.card, slab: certificate.slab } });
    } catch (error) {
      next(error);
    }
  });

  app.get('/api/audit/:entityType/:entityId', requireAuth, async (req: AuthenticatedRequest, res, next) => {
    try {
      const events = await prisma.auditLog.findMany({ where: { entityType: req.params.entityType, entityId: req.params.entityId }, orderBy: { createdAt: 'asc' } });
      res.json({ success: true, events });
    } catch (error) {
      next(error);
    }
  });

  registerGradingRoutes(app);

  app.use((error: unknown, _req: Request, res: Response, _next: NextFunction) => {
    console.error('VCA API error:', error);
    res.status(500).json({ success: false, error: 'INTERNAL_SERVER_ERROR' });
  });
}
