import type { NextFunction, Request, Response } from 'express';

type Bucket = { count: number; resetAt: number };

/**
 * Lightweight in-process per-IP rate limiter for public verify endpoints.
 * Sufficient for single-instance API; replace with Redis-backed limiter if
 * the API is horizontally scaled.
 */
export function createPublicRateLimit(options: {
  windowMs: number;
  max: number;
  errorCode?: string;
}) {
  const buckets = new Map<string, Bucket>();
  const errorCode = options.errorCode ?? 'RATE_LIMITED';

  // Opportunistic cleanup to avoid unbounded map growth.
  const CLEAN_EVERY = 200;
  let hits = 0;

  function clientKey(req: Request): string {
    const forwarded = req.header('x-forwarded-for');
    if (forwarded) {
      const first = forwarded.split(',')[0]?.trim();
      if (first) return first;
    }
    return req.ip || req.socket.remoteAddress || 'unknown';
  }

  return function publicRateLimit(req: Request, res: Response, next: NextFunction): void {
    const now = Date.now();
    hits += 1;
    if (hits % CLEAN_EVERY === 0) {
      for (const [key, bucket] of buckets) {
        if (bucket.resetAt <= now) buckets.delete(key);
      }
    }

    const key = clientKey(req);
    let bucket = buckets.get(key);
    if (!bucket || bucket.resetAt <= now) {
      bucket = { count: 0, resetAt: now + options.windowMs };
      buckets.set(key, bucket);
    }

    bucket.count += 1;
    const remaining = Math.max(0, options.max - bucket.count);
    const retryAfterSec = Math.max(1, Math.ceil((bucket.resetAt - now) / 1000));

    res.setHeader('X-RateLimit-Limit', String(options.max));
    res.setHeader('X-RateLimit-Remaining', String(remaining));
    res.setHeader('X-RateLimit-Reset', String(Math.ceil(bucket.resetAt / 1000)));

    if (bucket.count > options.max) {
      res.setHeader('Retry-After', String(retryAfterSec));
      res.status(429).json({
        success: false,
        error: errorCode,
        verificationStatus: 'RATE_LIMITED',
        retryAfterSeconds: retryAfterSec,
      });
      return;
    }

    next();
  };
}
