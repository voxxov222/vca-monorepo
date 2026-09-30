import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import type { NextFunction, Request, Response } from 'express';
import { createPublicRateLimit } from './publicRateLimit.js';

function mockReq(ip = '1.2.3.4'): Request {
  return {
    ip,
    header: () => undefined,
    socket: { remoteAddress: ip },
  } as unknown as Request;
}

function mockRes() {
  const headers: Record<string, string> = {};
  let statusCode = 200;
  let body: unknown;
  const res = {
    setHeader(k: string, v: string) { headers[k] = v; },
    status(code: number) { statusCode = code; return this; },
    json(payload: unknown) { body = payload; return this; },
    get statusCode() { return statusCode; },
    get body() { return body; },
    get headers() { return headers; },
  };
  return res as unknown as Response & { statusCode: number; body: unknown; headers: Record<string, string> };
}

describe('createPublicRateLimit', () => {
  it('allows up to max requests then returns 429', () => {
    const limit = createPublicRateLimit({ windowMs: 60_000, max: 3 });
    const nextCalls: number[] = [];
    const next: NextFunction = () => { nextCalls.push(1); };

    for (let i = 0; i < 3; i++) {
      const res = mockRes();
      limit(mockReq(), res, next);
      assert.equal(res.statusCode, 200);
    }
    assert.equal(nextCalls.length, 3);

    const blocked = mockRes();
    limit(mockReq(), blocked, next);
    assert.equal(blocked.statusCode, 429);
    assert.equal((blocked.body as { error: string }).error, 'RATE_LIMITED');
    assert.equal(nextCalls.length, 3);
  });
});
