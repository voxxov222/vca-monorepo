import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  AlertTriangle,
  BadgeCheck,
  Ban,
  Loader2,
  PauseCircle,
  SearchX,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';

import VcaBrand from '@/components/VcaBrand';
import {
  type PublicCertificate,
  type VerifyResponse,
  verifyByQrToken,
  verifyBySerial,
} from '@/lib/vcaApi';
import { cn } from '@/lib/utils';

type Mode = 'serial' | 'qr';

function statusPresentation(status: string) {
  switch (status) {
    case 'AUTHENTIC_RECORD':
      return {
        label: 'Authentic record on file',
        tone: 'border-emerald-200 bg-emerald-50 text-emerald-900',
        icon: BadgeCheck,
        detail: 'This serial matches a VCA certificate in our trust registry.',
      };
    case 'REVOKED':
      return {
        label: 'Certificate revoked',
        tone: 'border-red-200 bg-red-50 text-red-900',
        icon: Ban,
        detail: 'This certificate has been revoked. Do not treat it as valid.',
      };
    case 'SUSPENDED':
      return {
        label: 'Certificate suspended',
        tone: 'border-amber-200 bg-amber-50 text-amber-950',
        icon: PauseCircle,
        detail: 'Verification is temporarily suspended while the record is under review.',
      };
    case 'NOT_FOUND':
      return {
        label: 'No certificate found',
        tone: 'border-slate-200 bg-slate-50 text-slate-700',
        icon: SearchX,
        detail: 'We could not find a certificate for this serial or QR token.',
      };
    default:
      return {
        label: 'Unable to verify',
        tone: 'border-slate-200 bg-slate-50 text-slate-700',
        icon: AlertTriangle,
        detail: 'The verification service did not return a usable result.',
      };
  }
}

function nfcHonestyLabel(nfc: PublicCertificate['nfc']) {
  if (!nfc) {
    return {
      title: 'No NFC binding on file',
      body: 'This certificate has no registered NFC chip. Physical tag claims cannot be checked here.',
      tone: 'border-slate-200 bg-white text-slate-600',
    };
  }
  if (nfc.securityLevel === 'CRYPTOGRAPHIC') {
    return {
      title: 'NFC security: cryptographic',
      body: 'Chip binding includes a cryptographic security level. Always confirm with a live NFC read when available.',
      tone: 'border-emerald-200 bg-emerald-50 text-emerald-900',
    };
  }
  return {
    title: 'NFC security: identifier only',
    body: 'This NFC binding is IDENTIFIER_ONLY. Matching a chip UID is not cryptographic authenticity proof.',
    tone: 'border-amber-200 bg-amber-50 text-amber-950',
  };
}

function formatGrade(grade: PublicCertificate['finalGrade']): string {
  if (grade === null || grade === undefined || grade === '') return '—';
  const n = Number(grade);
  return Number.isFinite(n) ? n.toFixed(1) : String(grade);
}

function CertificateCard({ certificate, verifiedAt }: { certificate: PublicCertificate; verifiedAt?: string }) {
  const nfc = nfcHonestyLabel(certificate.nfc);
  const card = certificate.card;
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border bg-white p-5 sm:p-6">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Certificate</p>
        <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-blue-950">
          {card?.name ?? 'Card identity unavailable'}
        </h2>
        <p className="mt-2 text-sm text-slate-500">
          {[card?.set?.name, card?.collectorNo ? `#${card.collectorNo}` : null, card?.variant, card?.language]
            .filter(Boolean)
            .join(' · ') || 'Set / collector details not linked'}
        </p>
        <dl className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4">
            <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Serial</dt>
            <dd className="mt-1 font-mono text-sm font-semibold text-blue-950">{certificate.serialNo}</dd>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Certificate no.</dt>
            <dd className="mt-1 font-mono text-sm font-semibold text-blue-950">{certificate.certificateNo}</dd>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Final grade</dt>
            <dd className="mt-1 font-display text-2xl font-extrabold text-blue-950">{formatGrade(certificate.finalGrade)}</dd>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <dt className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Certified</dt>
            <dd className="mt-1 text-sm font-semibold text-blue-950">
              {certificate.certifiedAt ? new Date(certificate.certifiedAt).toLocaleString() : '—'}
            </dd>
          </div>
        </dl>
        {verifiedAt && (
          <p className="mt-4 text-[11px] text-slate-400">Verified at {new Date(verifiedAt).toLocaleString()}</p>
        )}
      </div>

      <div className="rounded-2xl border bg-white p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <Smartphone className="mt-0.5 h-5 w-5 text-blue-700" />
          <div>
            <h3 className="font-display text-base font-bold text-blue-950">Slab / NFC honesty</h3>
            <p className="mt-1 text-xs text-slate-500">
              Slab status: <span className="font-semibold text-slate-700">{certificate.slab?.status ?? 'none'}</span>
              {certificate.slab?.model ? ` · model ${certificate.slab.model}` : ''}
              {certificate.slab?.nfcEnabled ? ' · NFC registered' : ' · NFC not registered'}
            </p>
          </div>
        </div>
        <div className={cn('mt-4 rounded-xl border p-4 text-sm', nfc.tone)}>
          <p className="flex items-center gap-2 font-semibold">
            {certificate.nfc?.securityLevel === 'CRYPTOGRAPHIC' ? (
              <ShieldCheck className="h-4 w-4" />
            ) : (
              <ShieldAlert className="h-4 w-4" />
            )}
            {nfc.title}
          </p>
          <p className="mt-2 text-xs leading-relaxed">{nfc.body}</p>
          {certificate.nfc?.tamperStatus && (
            <p className="mt-2 font-mono text-[10px] uppercase tracking-wider">
              Tamper status: {certificate.nfc.tamperStatus}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function VerifyPage({ mode }: { mode: Mode }) {
  const params = useParams();
  const lookupKey = mode === 'serial' ? params.serial : params.token;
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<VerifyResponse | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      setLoading(true);
      if (!lookupKey) {
        if (!cancelled) {
          setResult({ success: false, verificationStatus: 'NOT_FOUND' });
          setLoading(false);
        }
        return;
      }
      try {
        const data = mode === 'serial' ? await verifyBySerial(lookupKey) : await verifyByQrToken(lookupKey);
        if (!cancelled) setResult(data);
      } catch {
        if (!cancelled) setResult({ success: false, verificationStatus: 'ERROR' });
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    void run();
    return () => {
      cancelled = true;
    };
  }, [lookupKey, mode]);

  const presentation = useMemo(
    () => statusPresentation(result?.verificationStatus ?? (loading ? 'LOADING' : 'ERROR')),
    [result, loading],
  );
  const StatusIcon = presentation.icon;

  return (
    <div className="min-h-screen bg-[hsl(216_33%_97%)]">
      <header className="border-b bg-white/95 px-4 py-5 backdrop-blur sm:px-7">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">
          <VcaBrand />
          <Link to="/home" className="text-xs font-semibold text-blue-800 hover:underline">
            Open Slabook
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-7 sm:py-10">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
          Public verification · {mode === 'serial' ? 'Serial lookup' : 'QR token'}
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-blue-950 sm:text-4xl">
          Verify a certificate
        </h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-500">
          Results come from the VCA trust API. NFC labels are honest about security level — identifier-only
          matches are never presented as cryptographic authenticity.
        </p>

        <div className="mt-6 rounded-xl border border-dashed bg-white/70 p-4 font-mono text-xs text-slate-600">
          {mode === 'serial' ? `Serial: ${lookupKey ?? '—'}` : `QR token: ${lookupKey ? `${lookupKey.slice(0, 12)}…` : '—'}`}
        </div>

        {loading ? (
          <div className="mt-8 flex items-center gap-3 rounded-2xl border bg-white p-6 text-sm text-slate-600">
            <Loader2 className="h-5 w-5 animate-spin text-blue-700" />
            Checking the trust registry…
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            <div className={cn('flex items-start gap-3 rounded-2xl border p-5', presentation.tone)}>
              <StatusIcon className="mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <p className="font-display text-lg font-bold">{presentation.label}</p>
                <p className="mt-1 text-xs leading-relaxed opacity-90">{presentation.detail}</p>
                {result?.verificationStatus && (
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-wider opacity-70">
                    Status code: {result.verificationStatus}
                  </p>
                )}
              </div>
            </div>

            {result?.certificate && (
              <CertificateCard certificate={result.certificate} verifiedAt={result.verifiedAt} />
            )}
          </div>
        )}

        <footer className="mt-12 border-t pt-5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          Verified Card Authority · Public verify is read-only
        </footer>
      </main>
    </div>
  );
}

export function VerifySerialPage() {
  return <VerifyPage mode="serial" />;
}

export function VerifyQrPage() {
  return <VerifyPage mode="qr" />;
}

export default VerifySerialPage;
