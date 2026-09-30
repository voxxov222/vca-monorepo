/**
 * Fail closed: only confirmed authentic certificate statuses map to AUTHENTIC_RECORD.
 * PENDING / IN_REVIEW / unknown → STATUS_UNAVAILABLE (never presented as authentic).
 */
export function mapCertificateVerificationStatus(status: string): string {
  if (status === 'REVOKED') return 'REVOKED';
  if (status === 'SUSPENDED') return 'SUSPENDED';
  if (status === 'CERTIFIED' || status === 'VERIFIED') return 'AUTHENTIC_RECORD';
  return 'STATUS_UNAVAILABLE';
}

/** Audit only meaningful trust outcomes — not pending/unknown probes. */
export function shouldAuditVerification(verificationStatus: string): boolean {
  return verificationStatus === 'AUTHENTIC_RECORD'
    || verificationStatus === 'REVOKED'
    || verificationStatus === 'SUSPENDED';
}
