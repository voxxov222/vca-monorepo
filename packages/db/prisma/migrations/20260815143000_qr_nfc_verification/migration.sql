CREATE TYPE "VerificationSecurityLevel" AS ENUM ('IDENTIFIER_ONLY', 'CRYPTOGRAPHIC');
CREATE TYPE "TamperStatus" AS ENUM ('UNKNOWN', 'CLEAR', 'SUSPECTED', 'TAMPERED');

ALTER TABLE "NFCRecord" DROP COLUMN "securityLevel";
ALTER TABLE "NFCRecord" DROP COLUMN "tamperStatus";
ALTER TABLE "NFCRecord" ADD COLUMN "securityLevel" "VerificationSecurityLevel" NOT NULL DEFAULT 'IDENTIFIER_ONLY';
ALTER TABLE "NFCRecord" ADD COLUMN "tamperStatus" "TamperStatus" NOT NULL DEFAULT 'UNKNOWN';
CREATE INDEX "NFCRecord_certificateId_securityLevel_idx" ON "NFCRecord"("certificateId", "securityLevel");

CREATE TABLE "QRRecord" (
  "id" TEXT NOT NULL,
  "certificateId" TEXT NOT NULL,
  "publicToken" TEXT NOT NULL,
  "active" BOOLEAN NOT NULL DEFAULT true,
  "scanCount" INTEGER NOT NULL DEFAULT 0,
  "lastVerifiedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "QRRecord_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "QRRecord_certificateId_key" ON "QRRecord"("certificateId");
CREATE UNIQUE INDEX "QRRecord_publicToken_key" ON "QRRecord"("publicToken");
ALTER TABLE "QRRecord" ADD CONSTRAINT "QRRecord_certificateId_fkey" FOREIGN KEY ("certificateId") REFERENCES "Certificate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
