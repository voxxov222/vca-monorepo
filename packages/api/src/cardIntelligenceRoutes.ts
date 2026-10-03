import { createHash } from "node:crypto";
import type { Express, NextFunction, Request, Response } from "express";
import { prisma } from "@vca/db";
import {
  AUTHENTICITY_DISPOSITIONS,
  CARD_INTELLIGENCE_DB_VERSION,
  EVIDENCE_KINDS,
  GRADE_DISCLAIMER,
  INSPECTION_CATEGORIES,
  NOT_AN_OFFICIAL_GRADE,
  QUEUE_STATES,
  emptyLookup,
  httpUrlOrNull,
  isAuthenticityDisposition,
  parseOptionalConfidence,
  parseOptionalGrade,
  parseOptionalUnitScore,
  proposedGradeEnvelope,
  viewField,
  type AuthenticityDisposition,
  type InspectionCategoryKind,
  type InspectionEvidenceKind,
} from "./cardIntelligenceContract.js";

const SESSION_COOKIE = "vca_session";

type AuthenticatedRequest = Request & { userId?: string; role?: "CUSTOMER" | "GRADER" | "ADMIN" };

function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

function parseCookies(header?: string): Record<string, string> {
  if (!header) return {};
  return Object.fromEntries(
    header.split(";").map((part) => {
      const index = part.indexOf("=");
      if (index < 0) return [part.trim(), ""];
      return [part.slice(0, index).trim(), decodeURIComponent(part.slice(index + 1).trim())];
    }),
  );
}

async function requireStaff(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
  try {
    const bearer = req.header("authorization")?.replace(/^Bearer\s+/i, "");
    const cookies = parseCookies(req.header("cookie"));
    const token = bearer || cookies[SESSION_COOKIE];
    if (!token) {
      res.status(401).json({ success: false, error: "AUTH_REQUIRED", mode: "REQUIRES_HUMAN_REVIEW" });
      return;
    }
    const session = await prisma.session.findUnique({
      where: { tokenHash: hashToken(token) },
      include: { user: true },
    });
    if (!session || session.expiresAt <= new Date() || session.user.status !== "ACTIVE") {
      res.status(401).json({ success: false, error: "INVALID_SESSION" });
      return;
    }
    if (session.user.role !== "GRADER" && session.user.role !== "ADMIN") {
      res.status(403).json({ success: false, error: "GRADER_PERMISSION_REQUIRED" });
      return;
    }
    req.userId = session.userId;
    req.role = session.user.role;
    next();
  } catch {
    res.status(503).json({ success: false, error: "DATABASE_UNAVAILABLE", items: [], match: null });
  }
}

function decimalToNumber(value: { toNumber(): number } | null | undefined): number | null {
  if (value == null) return null;
  const n = value.toNumber();
  return Number.isFinite(n) ? n : null;
}

function unavailable(res: Response) {
  res.status(503).json({
    success: false,
    error: "DATABASE_UNAVAILABLE",
    mode: "LIVE",
    dataStatus: "UNAVAILABLE",
    match: null,
    candidates: [],
    items: [],
    message: "Database query failed. No sample cards were substituted.",
  });
}

function presentCard(card: {
  id: string;
  vcaCardId: string | null;
  name: string | null;
  setName: string | null;
  collectorNumber: string | null;
  language: string | null;
  rarity: string | null;
  variant: string | null;
  finish: string | null;
  fieldProvenance: unknown;
  legacyCardId: string | null;
  publishedRevisionId: string | null;
  images: Array<{ id: string; url: string; role: string | null; sourceLabel: string | null; retrievedAt: Date | null }>;
}) {
  const provenance = card.fieldProvenance;
  return {
    id: card.id,
    vcaCardId: viewField(card.vcaCardId, provenance, "vcaCardId"),
    name: viewField(card.name, provenance, "name"),
    set: viewField(card.setName, provenance, "setName"),
    number: viewField(card.collectorNumber, provenance, "collectorNumber"),
    language: viewField(card.language, provenance, "language"),
    rarity: viewField(card.rarity, provenance, "rarity"),
    variant: viewField(card.variant, provenance, "variant"),
    finish: viewField(card.finish, provenance, "finish"),
    images: card.images.map((image) => ({
      id: image.id,
      url: image.url,
      role: image.role ?? "UNKNOWN",
      source: image.sourceLabel ?? "UNKNOWN",
      retrievedAt: image.retrievedAt ? image.retrievedAt.toISOString() : null,
    })),
    legacyCardId: card.legacyCardId,
    publishedRevisionId: card.publishedRevisionId,
    rawPrice: "—",
    gradedPrices: "Unavailable",
    population: { value: null, status: "UNKNOWN", source: null },
  };
}

const cardInclude = { images: true } as const;

export function registerCardIntelligenceRoutes(app: Express): void {
  app.get("/api/card-intelligence/cards/lookup", async (req, res) => {
    const vcaCardId = typeof req.query.vcaCardId === "string" ? req.query.vcaCardId.trim() : "";
    const id = typeof req.query.id === "string" ? req.query.id.trim() : "";
    const name = typeof req.query.name === "string" ? req.query.name.trim() : "";
    const setName = typeof req.query.set === "string" ? req.query.set.trim() : "";
    const number = typeof req.query.number === "string" ? req.query.number.trim() : "";
    const language = typeof req.query.language === "string" ? req.query.language.trim() : "";
    if (!vcaCardId && !id && !name && !setName && !number) {
      res.status(400).json({
        ...emptyLookup(["QUERY_REQUIRED"]),
        success: false,
        error: "QUERY_REQUIRED",
        dataStatus: "EMPTY",
      });
      return;
    }
    try {
      const where = {
        ...(id ? { id } : {}),
        ...(vcaCardId ? { vcaCardId } : {}),
        ...(name ? { name: { equals: name, mode: "insensitive" as const } } : {}),
        ...(setName ? { setName: { equals: setName, mode: "insensitive" as const } } : {}),
        ...(number ? { collectorNumber: number } : {}),
        ...(language ? { language: { equals: language, mode: "insensitive" as const } } : {}),
      };
      const rows = await prisma.cardMaster.findMany({
        where,
        include: cardInclude,
        take: 20,
        orderBy: { updatedAt: "desc" },
      });
      if (rows.length === 0) {
        res.json(emptyLookup(["NO_MATCH"]));
        return;
      }
      const [first, ...rest] = rows;
      res.json({
        success: true,
        mode: "LIVE",
        dataStatus: rows.length === 1 ? "MATCH" : "CANDIDATES",
        source: "prisma.CardMaster",
        match: presentCard(first),
        candidates: rest.map(presentCard),
        population: { value: null, status: "UNKNOWN", source: null },
        rawPrice: "—",
        gradedPrices: "Unavailable",
        warnings: [] as string[],
        note: "Card master rows only. External Pokémon catalogs are not queried here.",
      });
    } catch {
      unavailable(res);
    }
  });

  app.get("/api/card-intelligence/update-queue", async (req, res) => {
    const state = typeof req.query.state === "string" ? req.query.state.trim() : "";
    if (state && !(QUEUE_STATES as readonly string[]).includes(state)) {
      res.status(400).json({ success: false, error: "INVALID_QUEUE_STATE", items: [], allowed: QUEUE_STATES });
      return;
    }
    try {
      const items = await prisma.cardUpdateQueueItem.findMany({
        where: state ? { state: state as (typeof QUEUE_STATES)[number] } : {},
        orderBy: { createdAt: "desc" },
        take: 50,
      });
      res.json({
        success: true,
        mode: "LIVE",
        dataStatus: items.length === 0 ? "EMPTY" : "ROWS",
        source: "prisma.CardUpdateQueueItem",
        count: items.length,
        items: items.map((item) => ({
          id: item.id,
          cardMasterId: item.cardMasterId,
          state: item.state,
          version: item.version,
          supersedesId: item.supersedesId,
          source: item.sourceLabel ?? "UNKNOWN",
          provenance: item.provenance ?? null,
          proposedSnapshot: item.proposedSnapshot,
          createdAt: item.createdAt.toISOString(),
          reviewedAt: item.reviewedAt ? item.reviewedAt.toISOString() : null,
          reviewerId: item.reviewerId,
        })),
        warnings: items.length === 0 ? ["QUEUE_EMPTY"] : [],
        note: "Historical rows are listed as stored. This endpoint does not rewrite them.",
      });
    } catch {
      unavailable(res);
    }
  });

  app.post("/api/card-intelligence/inspections", requireStaff, async (req: AuthenticatedRequest, res) => {
    try {
      const body = req.body ?? {};
      const cardMasterId = typeof body.cardMasterId === "string" ? body.cardMasterId : null;
      const submissionId = typeof body.submissionId === "string" ? body.submissionId : null;
      const slabId = typeof body.slabId === "string" ? body.slabId : null;
      const nfcRecordId = typeof body.nfcRecordId === "string" ? body.nfcRecordId : null;
      const certificateId = typeof body.certificateId === "string" ? body.certificateId : null;
      const softwareVersion = typeof body.softwareVersion === "string" && body.softwareVersion.trim()
        ? body.softwareVersion.trim().slice(0, 120)
        : null;
      const notes = typeof body.notes === "string" && body.notes.trim() ? body.notes.trim() : null;

      if (cardMasterId && !(await prisma.cardMaster.findUnique({ where: { id: cardMasterId }, select: { id: true } }))) {
        res.status(404).json({ success: false, error: "CARD_MASTER_NOT_FOUND" });
        return;
      }
      if (submissionId && !(await prisma.submission.findUnique({ where: { id: submissionId }, select: { id: true } }))) {
        res.status(404).json({ success: false, error: "SUBMISSION_NOT_FOUND" });
        return;
      }
      if (slabId && !(await prisma.slab.findUnique({ where: { id: slabId }, select: { id: true } }))) {
        res.status(404).json({ success: false, error: "SLAB_NOT_FOUND" });
        return;
      }
      if (nfcRecordId && !(await prisma.nFCRecord.findUnique({ where: { id: nfcRecordId }, select: { id: true } }))) {
        res.status(404).json({ success: false, error: "NFC_RECORD_NOT_FOUND" });
        return;
      }
      if (certificateId && !(await prisma.certificate.findUnique({ where: { id: certificateId }, select: { id: true } }))) {
        res.status(404).json({ success: false, error: "CERTIFICATE_NOT_FOUND" });
        return;
      }

      const created = await prisma.inspectionSession.create({
        data: {
          cardMasterId,
          submissionId,
          inspectorId: req.userId,
          softwareVersion,
          dbSchemaVersion: CARD_INTELLIGENCE_DB_VERSION,
          notes,
          authenticity: "REQUIRES_HUMAN_REVIEW",
          slabId,
          nfcRecordId,
          certificateId,
          categoryScores: {
            create: INSPECTION_CATEGORIES.map((category) => ({ category })),
          },
        },
        include: {
          categoryScores: true,
          certificate: { select: { id: true, serialNo: true } },
          slab: { select: { id: true } },
          nfcRecord: { select: { id: true, securityLevel: true } },
        },
      });

      res.status(201).json({
        success: true,
        mode: "REQUIRES_HUMAN_REVIEW",
        officialGrade: null,
        gradeLabel: NOT_AN_OFFICIAL_GRADE,
        disclaimer: GRADE_DISCLAIMER,
        session: {
          id: created.id,
          cardMasterId: created.cardMasterId,
          submissionId: created.submissionId,
          inspectorId: created.inspectorId,
          softwareVersion: created.softwareVersion ?? "UNKNOWN",
          dbSchemaVersion: created.dbSchemaVersion,
          notes: created.notes,
          startedAt: created.startedAt.toISOString(),
          authenticity: created.authenticity,
          proposedGrade: null,
          inspectorOverrideGrade: null,
          categories: created.categoryScores.map((row) => ({
            category: row.category,
            score: null,
            confidence: null,
            source: row.sourceLabel ?? "UNKNOWN",
            status: "UNKNOWN",
          })),
          links: {
            digitalSlabId: created.slab?.id ?? null,
            certificateId: created.certificate?.id ?? null,
            serialNo: created.certificate?.serialNo ?? null,
            nfcRecordId: created.nfcRecord?.id ?? null,
            nfcSecurityLevel: created.nfcRecord?.securityLevel ?? null,
            nfcCryptography: "NOT_IMPLEMENTED",
          },
        },
      });
    } catch {
      unavailable(res);
    }
  });

  app.post("/api/card-intelligence/inspections/:sessionId/evidence", requireStaff, async (req: AuthenticatedRequest, res) => {
    try {
      const session = await prisma.inspectionSession.findUnique({ where: { id: req.params.sessionId }, select: { id: true } });
      if (!session) {
        res.status(404).json({ success: false, error: "INSPECTION_SESSION_NOT_FOUND" });
        return;
      }
      const body = req.body ?? {};
      if (body.replaceOriginal === true || body.overwrite === true) {
        res.status(409).json({ success: false, error: "ORIGINALS_ARE_IMMUTABLE" });
        return;
      }
      const kind = body.kind as InspectionEvidenceKind;
      if (!(EVIDENCE_KINDS as readonly string[]).includes(kind)) {
        res.status(400).json({ success: false, error: "INVALID_EVIDENCE_KIND", allowed: EVIDENCE_KINDS });
        return;
      }
      const derivedFromId = typeof body.derivedFromId === "string" ? body.derivedFromId : null;
      const originalUrl = httpUrlOrNull(body.originalUrl);
      const note = typeof body.note === "string" && body.note.trim() ? body.note.trim() : null;
      const measurement = body.measurement && typeof body.measurement === "object" && !Array.isArray(body.measurement)
        ? body.measurement
        : null;
      const marker = body.marker && typeof body.marker === "object" && !Array.isArray(body.marker) ? body.marker : null;

      if (kind === "ORIGINAL_PHOTO") {
        if (derivedFromId) {
          res.status(400).json({ success: false, error: "ORIGINAL_PHOTO_CANNOT_DERIVE" });
          return;
        }
        if (!originalUrl) {
          res.status(400).json({ success: false, error: "ORIGINAL_URL_REQUIRED" });
          return;
        }
      }
      if (kind === "ENHANCEMENT") {
        if (!derivedFromId) {
          res.status(400).json({ success: false, error: "ENHANCEMENT_REQUIRES_DERIVED_FROM" });
          return;
        }
      }
      if (kind === "MEASUREMENT" && !measurement) {
        res.status(400).json({ success: false, error: "MEASUREMENT_REQUIRED" });
        return;
      }
      if (kind === "MARKER" && !marker) {
        res.status(400).json({ success: false, error: "MARKER_REQUIRED" });
        return;
      }
      if (kind === "NOTE" && !note) {
        res.status(400).json({ success: false, error: "NOTE_REQUIRED" });
        return;
      }
      if (kind === "REFERENCE_COMPARISON" && !note && !originalUrl) {
        res.status(400).json({ success: false, error: "REFERENCE_REQUIRED" });
        return;
      }
      if (derivedFromId) {
        const prior = await prisma.inspectionEvidence.findUnique({ where: { id: derivedFromId } });
        if (!prior || prior.sessionId !== session.id) {
          res.status(404).json({ success: false, error: "DERIVED_FROM_NOT_FOUND" });
          return;
        }
      }

      const evidence = await prisma.inspectionEvidence.create({
        data: {
          sessionId: session.id,
          kind,
          immutable: kind !== "ENHANCEMENT",
          originalUrl,
          measurement: measurement ?? undefined,
          marker: marker ?? undefined,
          note,
          softwareVersion: typeof body.softwareVersion === "string" ? body.softwareVersion.slice(0, 120) : null,
          createdById: req.userId,
          derivedFromId,
        },
      });

      res.status(201).json({
        success: true,
        mode: "LIVE",
        evidence: {
          id: evidence.id,
          sessionId: evidence.sessionId,
          kind: evidence.kind,
          immutable: evidence.immutable,
          originalUrl: evidence.originalUrl,
          measurement: evidence.measurement ?? null,
          marker: evidence.marker ?? null,
          note: evidence.note,
          createdAt: evidence.createdAt.toISOString(),
          createdById: evidence.createdById,
          derivedFromId: evidence.derivedFromId,
        },
        note: "Append-only. Original photos are not replaced by this call.",
      });
    } catch {
      unavailable(res);
    }
  });

  app.post("/api/card-intelligence/inspections/:sessionId/proposed-grade", requireStaff, async (req: AuthenticatedRequest, res) => {
    try {
      const session = await prisma.inspectionSession.findUnique({
        where: { id: req.params.sessionId },
        include: { categoryScores: true },
      });
      if (!session) {
        res.status(404).json({ success: false, error: "INSPECTION_SESSION_NOT_FOUND", officialGrade: null, gradeLabel: NOT_AN_OFFICIAL_GRADE });
        return;
      }
      const body = req.body ?? {};
      if (body.official === true || body.certify === true) {
        res.status(409).json({
          success: false,
          error: "NOT_AN_OFFICIAL_GRADE",
          officialGrade: null,
          gradeLabel: NOT_AN_OFFICIAL_GRADE,
          disclaimer: GRADE_DISCLAIMER,
        });
        return;
      }
      const proposed = parseOptionalGrade(body.proposedGrade);
      if (!proposed.ok) {
        res.status(400).json({ success: false, error: proposed.error, officialGrade: null, gradeLabel: NOT_AN_OFFICIAL_GRADE });
        return;
      }
      const override = parseOptionalGrade(body.inspectorOverrideGrade);
      if (!override.ok) {
        res.status(400).json({ success: false, error: override.error, officialGrade: null, gradeLabel: NOT_AN_OFFICIAL_GRADE });
        return;
      }
      const overrideReason = typeof body.overrideReason === "string" ? body.overrideReason.trim() : "";
      if (override.grade != null && !overrideReason) {
        res.status(400).json({ success: false, error: "OVERRIDE_REASON_REQUIRED", officialGrade: null, gradeLabel: NOT_AN_OFFICIAL_GRADE });
        return;
      }
      if (override.grade == null && overrideReason) {
        res.status(400).json({ success: false, error: "OVERRIDE_GRADE_REQUIRED", officialGrade: null, gradeLabel: NOT_AN_OFFICIAL_GRADE });
        return;
      }
      let authenticity: AuthenticityDisposition = "REQUIRES_HUMAN_REVIEW";
      if (body.authenticity !== undefined && body.authenticity !== null) {
        if (!isAuthenticityDisposition(body.authenticity)) {
          res.status(400).json({
            success: false,
            error: "INVALID_AUTHENTICITY",
            allowed: AUTHENTICITY_DISPOSITIONS,
            rejected: "CERTAIN",
            officialGrade: null,
            gradeLabel: NOT_AN_OFFICIAL_GRADE,
          });
          return;
        }
        authenticity = body.authenticity;
      }
      const source = typeof body.proposedGradeSource === "string" && body.proposedGradeSource.trim()
        ? body.proposedGradeSource.trim().slice(0, 80)
        : null;

      const incoming = Array.isArray(body.categories) ? body.categories : [];
      const byCategory = new Map<InspectionCategoryKind, { score: number | null; confidence: number | null; source: string | null }>();
      for (const row of incoming) {
        if (!row || typeof row !== "object") {
          res.status(400).json({ success: false, error: "INVALID_CATEGORY", officialGrade: null, gradeLabel: NOT_AN_OFFICIAL_GRADE });
          return;
        }
        const category = (row as { category?: unknown }).category;
        if (typeof category !== "string" || !(INSPECTION_CATEGORIES as readonly string[]).includes(category)) {
          res.status(400).json({ success: false, error: "INVALID_CATEGORY", allowed: INSPECTION_CATEGORIES, officialGrade: null, gradeLabel: NOT_AN_OFFICIAL_GRADE });
          return;
        }
        const score = parseOptionalUnitScore((row as { score?: unknown }).score);
        const confidence = parseOptionalConfidence((row as { confidence?: unknown }).confidence);
        if (!score.ok || !confidence.ok) {
          res.status(400).json({ success: false, error: !score.ok ? score.error : (confidence as { error: string }).error, officialGrade: null, gradeLabel: NOT_AN_OFFICIAL_GRADE });
          return;
        }
        const rowSource = (row as { source?: unknown }).source;
        byCategory.set(category as InspectionCategoryKind, {
          score: score.score,
          confidence: confidence.confidence,
          source: typeof rowSource === "string" && rowSource.trim() ? rowSource.trim().slice(0, 80) : null,
        });
      }

      const now = new Date();
      const categories = INSPECTION_CATEGORIES.map((category) => {
        const existing = session.categoryScores.find((row) => row.category === category);
        const patch = byCategory.get(category);
        const score = patch ? patch.score : decimalToNumber(existing?.score);
        const confidence = patch ? patch.confidence : decimalToNumber(existing?.confidence);
        const sourceLabel = patch ? patch.source : existing?.sourceLabel ?? null;
        return {
          category,
          score,
          confidence,
          source: sourceLabel,
          status: score == null ? "UNKNOWN" as const : "STATED" as const,
        };
      });

      await prisma.$transaction(async (tx) => {
        for (const category of categories) {
          if (!byCategory.has(category.category)) continue;
          await tx.inspectionCategoryScore.upsert({
            where: { sessionId_category: { sessionId: session.id, category: category.category } },
            create: {
              sessionId: session.id,
              category: category.category,
              score: category.score,
              confidence: category.confidence,
              sourceLabel: category.source,
            },
            update: {
              score: category.score,
              confidence: category.confidence,
              sourceLabel: category.source,
            },
          });
        }
        await tx.inspectionSession.update({
          where: { id: session.id },
          data: {
            proposedGrade: proposed.grade,
            proposedGradeAt: now,
            proposedGradeSource: source,
            inspectorOverrideGrade: override.grade,
            overrideReason: override.grade == null ? null : overrideReason,
            overrideAt: override.grade == null ? null : now,
            authenticity,
          },
        });
        await tx.inspectionGradeProposal.create({
          data: {
            sessionId: session.id,
            proposedGrade: proposed.grade,
            proposedGradeSource: source,
            inspectorOverrideGrade: override.grade,
            overrideReason: override.grade == null ? null : overrideReason,
            authenticity,
            categorySnapshot: categories,
            createdById: req.userId,
          },
        });
      });

      res.status(201).json({
        success: true,
        ...proposedGradeEnvelope({
          proposedGrade: proposed.grade,
          proposedGradeSource: source,
          inspectorOverrideGrade: override.grade,
          overrideReason: override.grade == null ? null : overrideReason,
          authenticity,
          categories,
        }),
        sessionId: session.id,
        dbSchemaVersion: CARD_INTELLIGENCE_DB_VERSION,
      });
    } catch {
      unavailable(res);
    }
  });
}
