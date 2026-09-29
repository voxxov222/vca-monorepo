/**
 * Canonical VCA certificate serial policy (docs/TECHNICAL-ARCHITECTURE.md):
 * - Digital:  VCA-D-YY-####
 * - Physical: VCA-YY-A-####
 *
 * Serials are server-generated only. Uniqueness is enforced by DB unique
 * constraints on Certificate.serialNo / certificateNo; callers retry on collision.
 */
import { randomBytes } from 'node:crypto';

export type SerialKind = 'digital' | 'physical';

/** UTC 2-digit year, e.g. 2026 → "26". */
export function yearSuffix(date: Date = new Date()): string {
  return String(date.getUTCFullYear() % 100).padStart(2, '0');
}

/**
 * Cryptographically random zero-padded numeric suffix.
 * Default 6 digits (4+ per policy) to keep collision probability low.
 */
export function generateNumericSuffix(digits = 6): string {
  if (digits < 4 || digits > 12) {
    throw new Error('SERIAL_SUFFIX_DIGITS_OUT_OF_RANGE');
  }
  const max = 10 ** digits;
  // Rejection sampling avoids modulo bias for digit counts that don't divide 2^32.
  const limit = Math.floor(0x100000000 / max) * max;
  let value: number;
  do {
    value = randomBytes(4).readUInt32BE(0);
  } while (value >= limit);
  return String(value % max).padStart(digits, '0');
}

export function formatDigitalSerial(yy?: string, suffix?: string): string {
  return `VCA-D-${yy ?? yearSuffix()}-${suffix ?? generateNumericSuffix(6)}`;
}

export function formatPhysicalSerial(yy?: string, suffix?: string): string {
  return `VCA-${yy ?? yearSuffix()}-A-${suffix ?? generateNumericSuffix(6)}`;
}

/** Issue a new serial for grading finalize (digital certificates). */
export function issueDigitalSerial(): string {
  return formatDigitalSerial();
}

export function isValidDigitalSerial(serial: string): boolean {
  return /^VCA-D-\d{2}-\d{4,}$/.test(serial);
}

export function isValidPhysicalSerial(serial: string): boolean {
  return /^VCA-\d{2}-A-\d{4,}$/.test(serial);
}

export function isValidVcaSerial(serial: string): boolean {
  return isValidDigitalSerial(serial) || isValidPhysicalSerial(serial);
}
