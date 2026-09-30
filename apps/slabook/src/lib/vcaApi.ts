/**
 * Trust API base URL for public certificate / QR / NFC verify.
 * Set VITE_VCA_API_URL in the monorepo root `.env` (see `.env.example`).
 */
export function getVcaApiBaseUrl(): string {
  const raw = import.meta.env.VITE_VCA_API_URL as string | undefined;
  const base = (raw && raw.trim()) || 'http://localhost:3001';
  return base.replace(/\/$/, '');
}

export type PublicCertificate = {
  certificateNo: string;
  serialNo: string;
  status: string;
  finalGrade: number | string | null;
  certifiedAt: string | null;
  card: {
    name: string;
    collectorNo: string | null;
    variant: string | null;
    language: string | null;
    set: { name: string; brand: string | null; year: number | null } | null;
  } | null;
  slab: { status: string; model: string | null; nfcEnabled: boolean } | null;
  nfc: {
    securityLevel: 'IDENTIFIER_ONLY' | 'CRYPTOGRAPHIC' | string;
    tamperStatus: string;
    lastVerifiedAt: string | null;
  } | null;
};

export type VerifyResponse = {
  success: boolean;
  verificationStatus: string;
  certificate?: PublicCertificate;
  verifiedAt?: string;
  error?: string;
};

export async function verifyBySerial(serial: string): Promise<VerifyResponse> {
  const url = `${getVcaApiBaseUrl()}/api/verify/serial/${encodeURIComponent(serial)}`;
  const res = await fetch(url);
  const data = (await res.json().catch(() => null)) as VerifyResponse | null;
  if (!data) {
    return { success: false, verificationStatus: res.status === 404 ? 'NOT_FOUND' : 'ERROR' };
  }
  return data;
}

export async function verifyByQrToken(token: string): Promise<VerifyResponse> {
  const url = `${getVcaApiBaseUrl()}/api/verify/qr/${encodeURIComponent(token)}`;
  const res = await fetch(url);
  const data = (await res.json().catch(() => null)) as VerifyResponse | null;
  if (!data) {
    return { success: false, verificationStatus: res.status === 404 ? 'NOT_FOUND' : 'ERROR' };
  }
  return data;
}
