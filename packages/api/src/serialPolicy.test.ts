import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import {
  formatDigitalSerial,
  formatPhysicalSerial,
  generateNumericSuffix,
  isValidDigitalSerial,
  isValidPhysicalSerial,
  isValidVcaSerial,
  issueDigitalSerial,
  yearSuffix,
} from './serialPolicy.js';

describe('serialPolicy', () => {
  it('formats digital serials as VCA-D-YY-####', () => {
    assert.equal(formatDigitalSerial('26', '0042'), 'VCA-D-26-0042');
    assert.equal(formatDigitalSerial('99', '123456'), 'VCA-D-99-123456');
  });

  it('formats physical serials as VCA-YY-A-####', () => {
    assert.equal(formatPhysicalSerial('26', '0007'), 'VCA-26-A-0007');
  });

  it('uses UTC 2-digit year', () => {
    assert.equal(yearSuffix(new Date(Date.UTC(2026, 0, 1))), '26');
    assert.equal(yearSuffix(new Date(Date.UTC(1999, 5, 1))), '99');
  });

  it('generates zero-padded numeric suffixes of the requested length', () => {
    const suffix = generateNumericSuffix(6);
    assert.match(suffix, /^\d{6}$/);
  });

  it('issues unique-looking digital serials that pass validation', () => {
    const a = issueDigitalSerial();
    const b = issueDigitalSerial();
    assert.ok(isValidDigitalSerial(a));
    assert.ok(isValidDigitalSerial(b));
    assert.ok(isValidVcaSerial(a));
    assert.notEqual(a, b);
  });

  it('rejects malformed serials', () => {
    assert.equal(isValidDigitalSerial('VCA-2026-ABCDEF'), false);
    assert.equal(isValidPhysicalSerial('VCA-D-26-0001'), false);
    assert.equal(isValidVcaSerial('not-a-serial'), false);
  });
});
