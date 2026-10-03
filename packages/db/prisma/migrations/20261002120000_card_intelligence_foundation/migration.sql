-- Card intelligence foundation.
-- NOT APPLIED to production by the commit that added this file.
-- Apply later with `npm run db:migrate` / `prisma migrate deploy` against a real database.
-- Does not seed cards, prices, grades, population, or NFC secrets.

CREATE TYPE "CardUpdateQueueState" AS ENUM ('NEW', 'AUTO_VERIFIED', 'NEEDS_REVIEW', 'APPROVED', 'PUBLISHED');
CREATE TYPE "AuthenticityDisposition" AS ENUM ('INDICATORS', 'POTENTIAL_CONCERNS', 'REQUIRES_HUMAN_REVIEW');
CREATE TYPE "InspectionCategoryKind" AS ENUM ('CENTERING', 'CORNERS', 'EDGES', 'SURFACE', 'PRINT_QUALITY');
CREATE TYPE "InspectionEvidenceKind" AS ENUM ('ORIGINAL_PHOTO', 'MEASUREMENT', 'MARKER', 'NOTE', 'REFERENCE_COMPARISON', 'ENHANCEMENT');

CREATE TABLE "CardMaster" (
  "id" TEXT NOT NULL,
  "vcaCardId" TEXT,
  "name" TEXT,
  "setName" TEXT,
  "cardSetId" TEXT,
  "collectorNumber" TEXT,
  "language" TEXT,
  "rarity" TEXT,
  "variant" TEXT,
  "finish" TEXT,
  "fieldProvenance" JSONB,
  "legacyCardId" TEXT,
  "publishedRevisionId" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "CardMaster_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "CardMaster_vcaCardId_key" ON "CardMaster"("vcaCardId");
CREATE UNIQUE INDEX "CardMaster_legacyCardId_key" ON "CardMaster"("legacyCardId");
CREATE UNIQUE INDEX "CardMaster_publishedRevisionId_key" ON "CardMaster"("publishedRevisionId");
CREATE INDEX "CardMaster_name_idx" ON "CardMaster"("name");
CREATE INDEX "CardMaster_setName_collectorNumber_idx" ON "CardMaster"("setName", "collectorNumber");

CREATE TABLE "CardUpdateQueueItem" (
  "id" TEXT NOT NULL,
  "cardMasterId" TEXT,
  "state" "CardUpdateQueueState" NOT NULL,
  "proposedSnapshot" JSONB NOT NULL,
  "sourceLabel" TEXT,
  "provenance" JSONB,
  "version" INTEGER NOT NULL,
  "supersedesId" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "reviewedAt" TIMESTAMP(3),
  "reviewerId" TEXT,
  CONSTRAINT "CardUpdateQueueItem_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "CardUpdateQueueItem_state_createdAt_idx" ON "CardUpdateQueueItem"("state", "createdAt");
CREATE INDEX "CardUpdateQueueItem_cardMasterId_version_idx" ON "CardUpdateQueueItem"("cardMasterId", "version");

CREATE TABLE "CardMasterRevision" (
  "id" TEXT NOT NULL,
  "cardMasterId" TEXT NOT NULL,
  "version" INTEGER NOT NULL,
  "snapshot" JSONB NOT NULL,
  "sourceLabel" TEXT,
  "provenance" JSONB,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "createdById" TEXT,
  "queueItemId" TEXT,
  CONSTRAINT "CardMasterRevision_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "CardMasterRevision_cardMasterId_version_key" ON "CardMasterRevision"("cardMasterId", "version");
CREATE UNIQUE INDEX "CardMasterRevision_queueItemId_key" ON "CardMasterRevision"("queueItemId");
CREATE INDEX "CardMasterRevision_cardMasterId_createdAt_idx" ON "CardMasterRevision"("cardMasterId", "createdAt");

CREATE TABLE "CardMasterImage" (
  "id" TEXT NOT NULL,
  "cardMasterId" TEXT NOT NULL,
  "url" TEXT NOT NULL,
  "role" TEXT,
  "sourceLabel" TEXT,
  "retrievedAt" TIMESTAMP(3),
  "provenance" JSONB,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "CardMasterImage_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "CardMasterImage_cardMasterId_idx" ON "CardMasterImage"("cardMasterId");

CREATE TABLE "InspectionSession" (
  "id" TEXT NOT NULL,
  "cardMasterId" TEXT,
  "submissionId" TEXT,
  "inspectorId" TEXT,
  "softwareVersion" TEXT,
  "dbSchemaVersion" TEXT,
  "notes" TEXT,
  "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "endedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "proposedGrade" DECIMAL(3,1),
  "proposedGradeAt" TIMESTAMP(3),
  "proposedGradeSource" TEXT,
  "inspectorOverrideGrade" DECIMAL(3,1),
  "overrideReason" TEXT,
  "overrideAt" TIMESTAMP(3),
  "authenticity" "AuthenticityDisposition" NOT NULL DEFAULT 'REQUIRES_HUMAN_REVIEW',
  "slabId" TEXT,
  "nfcRecordId" TEXT,
  "certificateId" TEXT,
  CONSTRAINT "InspectionSession_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "InspectionSession_cardMasterId_startedAt_idx" ON "InspectionSession"("cardMasterId", "startedAt");
CREATE INDEX "InspectionSession_inspectorId_startedAt_idx" ON "InspectionSession"("inspectorId", "startedAt");

CREATE TABLE "InspectionCategoryScore" (
  "id" TEXT NOT NULL,
  "sessionId" TEXT NOT NULL,
  "category" "InspectionCategoryKind" NOT NULL,
  "score" DECIMAL(4,2),
  "confidence" DECIMAL(4,3),
  "sourceLabel" TEXT,
  "provenance" JSONB,
  CONSTRAINT "InspectionCategoryScore_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "InspectionCategoryScore_sessionId_category_key" ON "InspectionCategoryScore"("sessionId", "category");

CREATE TABLE "InspectionEvidence" (
  "id" TEXT NOT NULL,
  "sessionId" TEXT NOT NULL,
  "kind" "InspectionEvidenceKind" NOT NULL,
  "immutable" BOOLEAN NOT NULL DEFAULT true,
  "originalUrl" TEXT,
  "measurement" JSONB,
  "marker" JSONB,
  "note" TEXT,
  "softwareVersion" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "createdById" TEXT,
  "derivedFromId" TEXT,
  CONSTRAINT "InspectionEvidence_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "InspectionEvidence_sessionId_createdAt_idx" ON "InspectionEvidence"("sessionId", "createdAt");
CREATE INDEX "InspectionEvidence_derivedFromId_idx" ON "InspectionEvidence"("derivedFromId");

CREATE TABLE "InspectionGradeProposal" (
  "id" TEXT NOT NULL,
  "sessionId" TEXT NOT NULL,
  "proposedGrade" DECIMAL(3,1),
  "proposedGradeSource" TEXT,
  "inspectorOverrideGrade" DECIMAL(3,1),
  "overrideReason" TEXT,
  "authenticity" "AuthenticityDisposition" NOT NULL,
  "categorySnapshot" JSONB NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "createdById" TEXT,
  CONSTRAINT "InspectionGradeProposal_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "InspectionGradeProposal_sessionId_createdAt_idx" ON "InspectionGradeProposal"("sessionId", "createdAt");

ALTER TABLE "CardMaster" ADD CONSTRAINT "CardMaster_cardSetId_fkey" FOREIGN KEY ("cardSetId") REFERENCES "CardSet"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "CardMaster" ADD CONSTRAINT "CardMaster_legacyCardId_fkey" FOREIGN KEY ("legacyCardId") REFERENCES "Card"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "CardMaster" ADD CONSTRAINT "CardMaster_publishedRevisionId_fkey" FOREIGN KEY ("publishedRevisionId") REFERENCES "CardMasterRevision"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "CardMasterImage" ADD CONSTRAINT "CardMasterImage_cardMasterId_fkey" FOREIGN KEY ("cardMasterId") REFERENCES "CardMaster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "CardMasterRevision" ADD CONSTRAINT "CardMasterRevision_cardMasterId_fkey" FOREIGN KEY ("cardMasterId") REFERENCES "CardMaster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "CardMasterRevision" ADD CONSTRAINT "CardMasterRevision_queueItemId_fkey" FOREIGN KEY ("queueItemId") REFERENCES "CardUpdateQueueItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "CardUpdateQueueItem" ADD CONSTRAINT "CardUpdateQueueItem_cardMasterId_fkey" FOREIGN KEY ("cardMasterId") REFERENCES "CardMaster"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "CardUpdateQueueItem" ADD CONSTRAINT "CardUpdateQueueItem_supersedesId_fkey" FOREIGN KEY ("supersedesId") REFERENCES "CardUpdateQueueItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "CardUpdateQueueItem" ADD CONSTRAINT "CardUpdateQueueItem_reviewerId_fkey" FOREIGN KEY ("reviewerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "InspectionSession" ADD CONSTRAINT "InspectionSession_cardMasterId_fkey" FOREIGN KEY ("cardMasterId") REFERENCES "CardMaster"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "InspectionSession" ADD CONSTRAINT "InspectionSession_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "Submission"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "InspectionSession" ADD CONSTRAINT "InspectionSession_inspectorId_fkey" FOREIGN KEY ("inspectorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "InspectionSession" ADD CONSTRAINT "InspectionSession_slabId_fkey" FOREIGN KEY ("slabId") REFERENCES "Slab"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "InspectionSession" ADD CONSTRAINT "InspectionSession_nfcRecordId_fkey" FOREIGN KEY ("nfcRecordId") REFERENCES "NFCRecord"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "InspectionSession" ADD CONSTRAINT "InspectionSession_certificateId_fkey" FOREIGN KEY ("certificateId") REFERENCES "Certificate"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "InspectionCategoryScore" ADD CONSTRAINT "InspectionCategoryScore_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "InspectionSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "InspectionEvidence" ADD CONSTRAINT "InspectionEvidence_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "InspectionSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "InspectionEvidence" ADD CONSTRAINT "InspectionEvidence_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "InspectionEvidence" ADD CONSTRAINT "InspectionEvidence_derivedFromId_fkey" FOREIGN KEY ("derivedFromId") REFERENCES "InspectionEvidence"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "InspectionGradeProposal" ADD CONSTRAINT "InspectionGradeProposal_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "InspectionSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "InspectionGradeProposal" ADD CONSTRAINT "InspectionGradeProposal_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
