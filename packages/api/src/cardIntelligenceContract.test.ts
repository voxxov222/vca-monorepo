import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  AUTHENTICITY_DISPOSITIONS,
  GRADED_PRICE_UNAVAILABLE,
  MISSING_MONEY,
  NOT_AN_OFFICIAL_GRADE,
  emptyLookup,
  isAuthenticityDisposition,
  parseOptionalConfidence,
  parseOptionalGrade,
  proposedGradeEnvelope,
  viewField,
} from "./cardIntelligenceContract.js";

describe("card intelligence honesty contract", () => {
  it("never treats CERTAIN as an authenticity disposition", () => {
    assert.equal(isAuthenticityDisposition("CERTAIN"), false);
    assert.equal(isAuthenticityDisposition("AUTHENTIC"), false);
    assert.deepEqual([...AUTHENTICITY_DISPOSITIONS], [
      "INDICATORS",
      "POTENTIAL_CONCERNS",
      "REQUIRES_HUMAN_REVIEW",
    ]);
  });

  it("returns an empty lookup instead of sample cards", () => {
    const payload = emptyLookup(["NO_MATCH"]);
    assert.equal(payload.match, null);
    assert.deepEqual(payload.candidates, []);
    assert.equal(payload.rawPrice, MISSING_MONEY);
    assert.equal(payload.gradedPrices, GRADED_PRICE_UNAVAILABLE);
    assert.equal(payload.dataStatus, "EMPTY");
  });

  it("marks missing card fields UNKNOWN and does not invent provenance", () => {
    assert.deepEqual(viewField(null, null, "rarity"), {
      value: null,
      status: "UNKNOWN",
      provenance: null,
    });
    assert.deepEqual(viewField("  ", {}, "name"), {
      value: null,
      status: "UNKNOWN",
      provenance: null,
    });
    const stated = viewField("Charizard", {}, "name");
    assert.equal(stated.status, "STATED");
    assert.equal(stated.value, "Charizard");
    assert.deepEqual(stated.provenance, { source: null, status: "UNKNOWN" });
  });

  it("labels every proposed grade as not official", () => {
    const envelope = proposedGradeEnvelope({
      proposedGrade: null,
      proposedGradeSource: null,
      inspectorOverrideGrade: null,
      overrideReason: null,
      authenticity: "REQUIRES_HUMAN_REVIEW",
      categories: [],
    });
    assert.equal(envelope.officialGrade, null);
    assert.equal(envelope.gradeLabel, NOT_AN_OFFICIAL_GRADE);
    assert.equal(envelope.authenticityCertain, false);
    assert.equal(envelope.proposedGrade, null);
    assert.equal(envelope.gradedPrices, GRADED_PRICE_UNAVAILABLE);
    assert.match(envelope.disclaimer, /not an official VCA grade/i);
  });

  it("rejects out-of-range grades and keeps omitted grades null", () => {
    assert.deepEqual(parseOptionalGrade(undefined), { ok: true, grade: null });
    assert.deepEqual(parseOptionalGrade(null), { ok: true, grade: null });
    assert.equal(parseOptionalGrade(9.5).ok, true);
    assert.equal(parseOptionalGrade(0).ok, false);
    assert.equal(parseOptionalGrade(11).ok, false);
    assert.deepEqual(parseOptionalConfidence(""), { ok: true, confidence: null });
    assert.equal(parseOptionalConfidence(1.2).ok, false);
  });
});
