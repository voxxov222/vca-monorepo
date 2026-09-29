CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'SUSPENDED', 'DISABLED');
CREATE TYPE "UserRole" AS ENUM ('CUSTOMER', 'GRADER', 'ADMIN');
CREATE TYPE "CertificateStatus" AS ENUM ('PENDING', 'IN_REVIEW', 'CERTIFIED', 'VERIFIED', 'SUSPENDED', 'REVOKED');
CREATE TYPE "SubmissionStatus" AS ENUM ('DRAFT', 'RECEIVED', 'IN_REVIEW', 'GRADING', 'AWAITING_APPROVAL', 'CERTIFIED', 'RETURNED', 'CANCELLED');
CREATE TYPE "SlabStatus" AS ENUM ('ASSEMBLY', 'ACTIVE', 'SUSPENDED', 'RETIRED');

CREATE TABLE "User" (
  "id" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "passwordHash" TEXT NOT NULL,
  "displayName" TEXT,
  "role" "UserRole" NOT NULL DEFAULT 'CUSTOMER',
  "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

CREATE TABLE "Session" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "tokenHash" TEXT NOT NULL,
  "expiresAt" TIMESTAMP(3) NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "Session_tokenHash_key" ON "Session"("tokenHash");
CREATE INDEX "Session_userId_expiresAt_idx" ON "Session"("userId", "expiresAt");

CREATE TABLE "CardSet" (
  "id" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "brand" TEXT NOT NULL DEFAULT 'Pokemon',
  "year" INTEGER,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "CardSet_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "CardSet_brand_name_year_key" ON "CardSet"("brand", "name", "year");

CREATE TABLE "Card" (
  "id" TEXT NOT NULL,
  "setId" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "collectorNo" TEXT,
  "variant" TEXT,
  "language" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "Card_name_idx" ON "Card"("name");
CREATE INDEX "Card_setId_collectorNo_idx" ON "Card"("setId", "collectorNo");

CREATE TABLE "Submission" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "cardId" TEXT,
  "status" "SubmissionStatus" NOT NULL DEFAULT 'DRAFT',
  "submittedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "Submission_userId_status_idx" ON "Submission"("userId", "status");

CREATE TABLE "GradingReport" (
  "id" TEXT NOT NULL,
  "submissionId" TEXT NOT NULL,
  "methodologyVersion" TEXT NOT NULL,
  "centering" DECIMAL(4,2),
  "corners" DECIMAL(4,2),
  "edges" DECIMAL(4,2),
  "surface" DECIMAL(4,2),
  "printQuality" DECIMAL(4,2),
  "whitening" DECIMAL(4,2),
  "defects" JSONB,
  "proposedGrade" DECIMAL(3,1),
  "humanGrade" DECIMAL(3,1),
  "finalizedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "GradingReport_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "GradingReport_submissionId_createdAt_idx" ON "GradingReport"("submissionId", "createdAt");

CREATE TABLE "Certificate" (
  "id" TEXT NOT NULL,
  "gradingReportId" TEXT NOT NULL,
  "certificateNo" TEXT NOT NULL,
  "serialNo" TEXT NOT NULL,
  "status" "CertificateStatus" NOT NULL DEFAULT 'PENDING',
  "finalGrade" DECIMAL(3,1),
  "graderId" TEXT,
  "verificationHash" TEXT,
  "certifiedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Certificate_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "Certificate_gradingReportId_key" ON "Certificate"("gradingReportId");
CREATE UNIQUE INDEX "Certificate_certificateNo_key" ON "Certificate"("certificateNo");
CREATE UNIQUE INDEX "Certificate_serialNo_key" ON "Certificate"("serialNo");
CREATE UNIQUE INDEX "Certificate_verificationHash_key" ON "Certificate"("verificationHash");
CREATE INDEX "Certificate_status_idx" ON "Certificate"("status");

CREATE TABLE "Slab" (
  "id" TEXT NOT NULL,
  "certificateId" TEXT NOT NULL,
  "status" "SlabStatus" NOT NULL DEFAULT 'ASSEMBLY',
  "model" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Slab_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "Slab_certificateId_key" ON "Slab"("certificateId");

CREATE TABLE "NFCRecord" (
  "id" TEXT NOT NULL,
  "certificateId" TEXT NOT NULL,
  "identifier" TEXT NOT NULL,
  "securityLevel" TEXT NOT NULL,
  "tamperStatus" TEXT,
  "lastVerifiedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  "slabId" TEXT,
  CONSTRAINT "NFCRecord_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "NFCRecord_certificateId_key" ON "NFCRecord"("certificateId");
CREATE UNIQUE INDEX "NFCRecord_identifier_key" ON "NFCRecord"("identifier");
CREATE UNIQUE INDEX "NFCRecord_slabId_key" ON "NFCRecord"("slabId");

CREATE TABLE "AuditLog" (
  "id" TEXT NOT NULL,
  "actorId" TEXT,
  "action" TEXT NOT NULL,
  "entityType" TEXT NOT NULL,
  "entityId" TEXT NOT NULL,
  "metadata" JSONB,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "AuditLog_entityType_entityId_createdAt_idx" ON "AuditLog"("entityType", "entityId", "createdAt");
CREATE INDEX "AuditLog_actorId_createdAt_idx" ON "AuditLog"("actorId", "createdAt");

ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Card" ADD CONSTRAINT "Card_setId_fkey" FOREIGN KEY ("setId") REFERENCES "CardSet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "GradingReport" ADD CONSTRAINT "GradingReport_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "Submission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_gradingReportId_fkey" FOREIGN KEY ("gradingReportId") REFERENCES "GradingReport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Certificate" ADD CONSTRAINT "Certificate_graderId_fkey" FOREIGN KEY ("graderId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "Slab" ADD CONSTRAINT "Slab_certificateId_fkey" FOREIGN KEY ("certificateId") REFERENCES "Certificate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "NFCRecord" ADD CONSTRAINT "NFCRecord_certificateId_fkey" FOREIGN KEY ("certificateId") REFERENCES "Certificate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "NFCRecord" ADD CONSTRAINT "NFCRecord_slabId_fkey" FOREIGN KEY ("slabId") REFERENCES "Slab"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_actorId_fkey" FOREIGN KEY ("actorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
