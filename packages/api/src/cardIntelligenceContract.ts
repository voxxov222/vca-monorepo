/**
 * Card intelligence HTTP contract.
 * Empty collections are empty. Null fields are UNKNOWN. Money is not priced here.
 * Assistive grades are never official certificates.
 */

export const CARD_INTELLIGENCE_DB_VERSION = "20261002120000_card_intelligence";

export const NOT_AN_OFFICIAL_GRADE = "NOT_AN_OFFICIAL_GRADE";

export const GRADE_DISCLAIMER =
  "Assistive proposal only. This is not an official VCA grade, does not certify the card, and does not write a certificate.";

export const AUTHENTICITY_DISPOSITIONS = [
  "INDICATORS",
  "POTENTIAL_CONCERNS",
  "REQUIRES_HUMAN_REVIEW",
] as const;

export type AuthenticityDisposition = (typeof AUTHENTICITY_DISPOSITIONS)[number];

export const INSPECTION_CATEGORIES = [
  "CENTERING",
  "CORNERS",
  "EDGES",
  "SURFACE",
  "PRINT_QUALITY",
] as const;

export type InspectionCategoryKind = (typeof INSPECTION_CATEGORIES)[number];

export const EVIDENCE_KINDS = [
  "ORIGINAL_PHOTO",
  "MEASUREMENT",
  "MARKER",
  "NOTE",
  "REFERENCE_COMPARISON",
  "ENHANCEMENT",
] as const;

export type InspectionEvidenceKind = (typeof EVIDENCE_KINDS)[number];

export const QUEUE_STATES = [
  "NEW",
  "AUTO_VERIFIED",
  "NEEDS_REVIEW",
  "APPROVED",
  "PUBLISHED",
] as const;

export type CardUpdateQueueState = (typeof QUEUE_STATES)[number];

/** Missing money. Graded prices are not queried by this contract. */
export const MISSING_MONEY = "—";
export const GRADED_PRICE_UNAVAILABLE = "Unavailable";

export type UnknownStatus = "UNKNOWN" | "STATED";

export type FieldView = {
  value: string | null;
  status: UnknownStatus;
  provenance: unknown;
};

export function isAuthenticityDisposition(value: unknown): value is AuthenticityDisposition {
  return typeof value === "string" && (AUTHENTICITY_DISPOSITIONS as readonly string[]).includes(value);
}

export function viewField(value: string | null | undefined, provenance: unknown, key: string): FieldView {
  const trimmed = typeof value === "string" ? value.trim() : "";
  if (!trimmed) {
    return { value: null, status: "UNKNOWN", provenance: null };
  }
  const record =
    provenance && typeof provenance === "object" && !Array.isArray(provenance)
      ? (provenance as Record<string, unknown>)[key]
      : undefined;
  if (record === undefined || record === null) {
    return { value: trimmed, status: "STATED", provenance: { source: null, status: "UNKNOWN" } };
  }
  return { value: trimmed, status: "STATED", provenance: record };
}

export function emptyLookup(warnings: string[]) {
  return {
    success: true,
    mode: "LIVE" as const,
    dataStatus: "EMPTY" as const,
    source: "prisma.CardMaster",
    match: null,
    candidates: [] as unknown[],
    population: { value: null, status: "UNKNOWN" as const, source: null },
    rawPrice: MISSING_MONEY,
    gradedPrices: GRADED_PRICE_UNAVAILABLE,
    warnings,
    note: "No sample cards are substituted. This is not the Pokémon catalog.",
  };
}

export function proposedGradeEnvelope(input: {
  proposedGrade: number | null;
  proposedGradeSource: string | null;
  inspectorOverrideGrade: number | null;
  overrideReason: string | null;
  authenticity: AuthenticityDisposition;
  categories: Array<{
    category: InspectionCategoryKind;
    score: number | null;
    confidence: number | null;
    source: string | null;
    status: "UNKNOWN" | "STATED";
  }>;
}) {
  return {
    officialGrade: null,
    gradeLabel: NOT_AN_OFFICIAL_GRADE,
    disclaimer: GRADE_DISCLAIMER,
    mode: "REQUIRES_HUMAN_REVIEW" as const,
    authenticity: input.authenticity,
    authenticityCertain: false,
    proposedGrade: input.proposedGrade,
    proposedGradeSource: input.proposedGradeSource ?? "UNKNOWN",
    inspectorOverrideGrade: input.inspectorOverrideGrade,
    overrideReason: input.overrideReason,
    categories: input.categories,
    rawPrice: MISSING_MONEY,
    gradedPrices: GRADED_PRICE_UNAVAILABLE,
  };
}

/** Finite 1.0–10.0, or null when the caller omitted the grade. */
export function parseOptionalGrade(value: unknown): { ok: true; grade: number | null } | { ok: false; error: string } {
  if (value === undefined || value === null || value === "") return { ok: true, grade: null };
  const grade = typeof value === "number" ? value : typeof value === "string" ? Number(value) : NaN;
  if (!Number.isFinite(grade) || grade < 1 || grade > 10) {
    return { ok: false, error: "GRADE_OUT_OF_RANGE" };
  }
  return { ok: true, grade: Math.round(grade * 10) / 10 };
}

export function parseOptionalUnitScore(value: unknown): { ok: true; score: number | null } | { ok: false; error: string } {
  if (value === undefined || value === null || value === "") return { ok: true, score: null };
  const score = typeof value === "number" ? value : typeof value === "string" ? Number(value) : NaN;
  if (!Number.isFinite(score) || score < 0 || score > 10) {
    return { ok: false, error: "SCORE_OUT_OF_RANGE" };
  }
  return { ok: true, score: Math.round(score * 100) / 100 };
}

export function parseOptionalConfidence(value: unknown): { ok: true; confidence: number | null } | { ok: false; error: string } {
  if (value === undefined || value === null || value === "") return { ok: true, confidence: null };
  const confidence = typeof value === "number" ? value : typeof value === "string" ? Number(value) : NaN;
  if (!Number.isFinite(confidence) || confidence < 0 || confidence > 1) {
    return { ok: false, error: "CONFIDENCE_OUT_OF_RANGE" };
  }
  return { ok: true, confidence: Math.round(confidence * 1000) / 1000 };
}

export function httpUrlOrNull(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  if (!/^https?:\/\/\S+$/i.test(trimmed)) return null;
  if (trimmed.length > 2000) return null;
  return trimmed;
}
