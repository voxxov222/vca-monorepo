import { useRef, useState } from 'react';
import { AlertTriangle, Brain, Loader2, Upload } from 'lucide-react';
import { toast } from 'sonner';
import type { CatalogCard } from '@/lib/types';
import { downscaleForUpload, fileToDataUrl } from '@/lib/vision';
import { AI_GRADE_DISCLAIMER, useAiInspection, type AiInspectionResult } from '@/lib/aiInspect';

function sub(n: number | null) {
  return n == null ? '—' : n.toFixed(1);
}

export default function AiInspectionPanel({ card }: { card: CatalogCard }) {
  const inspect = useAiInspection();
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<AiInspectionResult | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const onFile = async (file: File | undefined) => {
    if (!file) return;
    if (!file.type.startsWith('image/') || file.size > 25_000_000) {
      toast.error('Choose a JPEG or PNG under 25 MB.');
      return;
    }
    try {
      const dataUrl = await downscaleForUpload(await fileToDataUrl(file));
      setPreview(dataUrl);
      setResult(null);
      const out = await inspect.mutateAsync({
        dataUrl,
        cardNameHint: card.name,
        setHint: card.set,
      });
      setResult(out);
      if (out.mode !== 'LIVE') toast.message('AI screening unavailable — see status on the panel.');
    } catch (e) {
      toast.error(e instanceof Error ? e.message : 'Inspection failed');
    }
  };

  return (
    <section className="glass rounded-3xl p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] font-bold tracking-[0.25em] text-holo-gold">AI CARD INSPECTION · SCREENING</p>
          <h2 className="mt-2 flex items-center gap-2 font-display text-xl font-bold text-white">
            <Brain className="h-5 w-5 text-holo-gold" />
            AI condition screen
          </h2>
        </div>
        <span className="rounded-full border border-holo-gold/30 bg-holo-gold/10 px-3 py-1 text-[10px] font-bold tracking-wider text-holo-gold">
          NOT AN OFFICIAL GRADE
        </span>
      </div>

      <p className="mt-3 flex gap-2 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-3 text-[11px] leading-relaxed text-amber-100/90">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
        {AI_GRADE_DISCLAIMER}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={inspect.isPending}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-holo-gold to-holo-magenta px-4 py-2 text-[11px] font-bold text-void disabled:opacity-50"
        >
          {inspect.isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
          {inspect.isPending ? 'Screening…' : 'Upload photo for AI screen'}
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={(e) => {
            void onFile(e.target.files?.[0]);
            e.target.value = '';
          }}
        />
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div className="flex min-h-[200px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/30">
          {preview ? (
            <img src={preview} alt="Inspection upload" className="max-h-64 object-contain" />
          ) : (
            <p className="p-6 text-center text-xs text-white/40">Upload your own photo of the physical card. Catalog art is not used for grading AI.</p>
          )}
        </div>

        <div className="space-y-3">
          {!result && !inspect.isPending && (
            <p className="text-xs text-white/45">Results appear here after screening. Estimates are conservative and image-quality dependent.</p>
          )}
          {result && (
            <>
              <div className="flex flex-wrap items-end gap-3">
                <div>
                  <p className="text-[10px] font-bold tracking-wider text-white/40">ESTIMATED BAND</p>
                  <p className="font-display text-3xl font-extrabold text-white">
                    {result.estimatedGrade != null ? result.estimatedGrade.toFixed(1) : '—'}
                  </p>
                  <p className="text-xs text-white/55">{result.gradeBand || 'Insufficient signal'}</p>
                </div>
                <div className="rounded-full border border-white/15 px-3 py-1 text-[10px] font-bold text-white/60">
                  Confidence {Math.round(result.confidence * 100)}% · {result.mode}
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[
                  ['Centering', result.subgrades.centering],
                  ['Corners', result.subgrades.corners],
                  ['Edges', result.subgrades.edges],
                  ['Surface', result.subgrades.surface],
                ].map(([label, val]) => (
                  <div key={String(label)} className="rounded-xl border border-white/10 bg-white/5 p-2 text-center">
                    <p className="text-[9px] font-bold tracking-wider text-white/40">{label}</p>
                    <p className="mt-1 font-mono text-sm font-bold text-white">{sub(val as number | null)}</p>
                  </div>
                ))}
              </div>
              {result.findings.length > 0 && (
                <ul className="space-y-1.5">
                  {result.findings.map((f, i) => (
                    <li key={i} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-[11px] text-white/75">
                      <span className="font-bold text-holo-gold">{f.flag}</span>
                      <span className="text-white/40"> · {f.severity}</span>
                      {f.location ? <span className="text-white/40"> · {f.location}</span> : null}
                      <p className="mt-0.5 text-white/60">{f.note}</p>
                    </li>
                  ))}
                </ul>
              )}
              <p className="text-[10px] text-white/35">
                Model: {result.provider}/{result.model}. Auth notes:{' '}
                {result.authenticitySignals.notes.join('; ') || 'none'}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
