import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { mapCertificateVerificationStatus, shouldAuditVerification } from './verificationStatus.js';

describe('mapCertificateVerificationStatus', () => {
  it('maps only confirmed authentic statuses to AUTHENTIC_RECORD', () => {
    assert.equal(mapCertificateVerificationStatus('CERTIFIED'), 'AUTHENTIC_RECORD');
    assert.equal(mapCertificateVerificationStatus('VERIFIED'), 'AUTHENTIC_RECORD');
  });

  it('preserves revoked and suspended', () => {
    assert.equal(mapCertificateVerificationStatus('REVOKED'), 'REVOKED');
    assert.equal(mapCertificateVerificationStatus('SUSPENDED'), 'SUSPENDED');
  });

  it('fails closed for pending / in-review / unknown (never AUTHENTIC_RECORD)', () => {
    for (const status of ['PENDING', 'IN_REVIEW', 'DRAFT', '', 'UNKNOWN', 'foo']) {
      assert.equal(
        mapCertificateVerificationStatus(status),
        'STATUS_UNAVAILABLE',
        `expected STATUS_UNAVAILABLE for ${JSON.stringify(status)}`,
      );
      assert.notEqual(mapCertificateVerificationStatus(status), 'AUTHENTIC_RECORD');
    }
  });
});

describe('shouldAuditVerification', () => {
  it('audits only terminal trust outcomes', () => {
    assert.equal(shouldAuditVerification('AUTHENTIC_RECORD'), true);
    assert.equal(shouldAuditVerification('REVOKED'), true);
    assert.equal(shouldAuditVerification('SUSPENDED'), true);
    assert.equal(shouldAuditVerification('STATUS_UNAVAILABLE'), false);
    assert.equal(shouldAuditVerification('NOT_FOUND'), false);
    assert.equal(shouldAuditVerification('RATE_LIMITED'), false);
  });
});
