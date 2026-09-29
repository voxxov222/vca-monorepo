import { useState } from 'react';
import { Loader2 } from 'lucide-react';

/** Published Peachweb interactive WebGL scene for VCA Advanced 3D. */
export const PEACHWEB_3D_URL = 'https://well-6xh2s7vung.peachweb.site/';

interface PeachwebSceneProps {
  /** Override iframe src; defaults to the published Peachweb 3D URL. */
  src?: string;
  className?: string;
}

/**
 * Full-size iframe embed of the published Peachweb Advanced 3D experience.
 * Honesty: NFC on the marketing scene requires hardware and is NOT live in Slabook.
 * Digital displays remain ungraded — this scene does not assign certificates.
 */
export default function PeachwebScene({
  src = PEACHWEB_3D_URL,
  className,
}: PeachwebSceneProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div
      className={`relative min-h-[520px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 sm:min-h-[600px] ${className ?? ''}`}
    >
      {loading && (
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-slate-950/90 text-slate-200"
          aria-live="polite"
        >
          <Loader2 className="h-8 w-8 animate-spin text-blue-400" aria-hidden />
          <p className="font-mono text-[11px] uppercase tracking-[.18em] text-slate-400">
            Loading Peachweb 3D…
          </p>
        </div>
      )}

      {/* Honesty overlay chips — marketing experience, NFC not live here */}
      <div className="pointer-events-none absolute left-3 top-3 z-20 flex max-w-[calc(100%-1.5rem)] flex-col gap-1.5 sm:left-4 sm:top-4">
        <span className="inline-flex w-fit rounded-full border border-amber-400/40 bg-amber-950/80 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[.14em] text-amber-100 shadow-lg backdrop-blur-sm sm:text-[10px]">
          PEACHWEB 3D · MARKETING EXPERIENCE
        </span>
        <span className="inline-flex w-fit rounded-full border border-slate-500/50 bg-slate-900/85 px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[.12em] text-slate-300 shadow-lg backdrop-blur-sm sm:text-[10px]">
          NFC ON THIS SCENE · REQUIRES_HARDWARE · NOT LIVE HERE
        </span>
      </div>

      <iframe
        src={src}
        title="VCA Peachweb 3D interactive"
        allow="fullscreen; xr-spatial-tracking"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 h-full w-full border-0"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
