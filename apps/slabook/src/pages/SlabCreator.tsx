import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { Box, Gem, Layers, Save, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import HoloSlab, { type SlabConfig } from '@/components/HoloSlab';
import PeachwebScene from '@/components/PeachwebScene';
import Slab3DViewer from '@/components/Slab3DViewer';
import { Button } from '@/components/ui/button';
import { useVca } from '@/lib/store';
import type { SlabRecord } from '@/lib/types';

const defaults: SlabConfig = {
  labelStyle: 'classic',
  holo: 35,
  environment: 'studio',
  lightTint: '#244cb4',
  cardOffset: 0,
  showGrade: true,
  autoSpin: false,
  simple: false,
};

const LABEL_FINISHES = [
  {
    value: 'classic' as const,
    name: 'Classic',
    hint: 'Chrome / VCA blue',
    bar: 'linear-gradient(90deg,#244cb4 0%,#244cb4 47%,#fff 47%,#fff 53%,#e2e8f0 53%)',
  },
  {
    value: 'neon' as const,
    name: 'Redline',
    hint: 'VCA red',
    bar: 'linear-gradient(90deg,#be253d 0%,#be253d 47%,#fff 47%,#fff 53%,#f1d5da 53%)',
  },
  {
    value: 'gold' as const,
    name: 'Gold',
    hint: 'Warm metallic',
    bar: 'linear-gradient(90deg,#99702c 0%,#c9a24a 47%,#fff8e8 47%,#fff8e8 53%,#ecddbc 53%)',
  },
];

const ENVIRONMENTS = [
  { value: 'studio' as const, name: 'Studio', hint: 'Daylight' },
  { value: 'void' as const, name: 'Void', hint: 'Midnight' },
  { value: 'nebula' as const, name: 'Gallery', hint: 'Red & blue' },
];

const LIGHT_ACCENTS = [
  { hex: '#244cb4', label: 'Blue', css: 'bg-[#244cb4]' },
  { hex: '#be253d', label: 'Red', css: 'bg-[#be253d]' },
  { hex: '#94a3b8', label: 'Silver', css: 'bg-slate-400' },
] as const;

/** advanced = Peachweb (primary), three = @vca/three-slab, simple = CSS HoloSlab */
type Engine = 'advanced' | 'three' | 'simple';

export default function SlabCreator() {
  const [params] = useSearchParams();
  const {
    myItems,
    cardById,
    slabDraftCardId,
    createDigitalSlab,
    savePreset,
    presets,
    inspections,
    slabs,
    backendReady,
  } = useVca();
  const initial = params.get('card') ?? slabDraftCardId ?? myItems()[0]?.cardId ?? null;
  const [selected, setSelected] = useState<string | null>(initial);
  const [config, setConfig] = useState<SlabConfig>(
    initial ? (presets[initial] ?? defaults) : defaults,
  );
  const [record, setRecord] = useState<SlabRecord | null>(null);
  // Default Advanced = Peachweb; config.simple maps to Simple engine
  const [engine, setEngine] = useState<Engine>(config.simple ? 'simple' : 'advanced');

  const card = selected ? cardById(selected) : undefined;
  const certificate = slabs.find(
    (s) =>
      s.id === params.get('certificate') &&
      s.cardId === selected &&
      s.kind === 'physical' &&
      s.grade,
  );
  const choices = [
    ...new Set([...(selected ? [selected] : []), ...myItems().map((i) => i.cardId)]),
  ];

  const update = <K extends keyof SlabConfig>(key: K, value: SlabConfig[K]): void => {
    setConfig((c) => {
      const next = { ...c, [key]: value };
      if (key === 'simple') {
        setEngine(value ? 'simple' : 'advanced');
      }
      return next;
    });
  };

  const setEngineMode = (mode: Engine): void => {
    setEngine(mode);
    setConfig((c) => ({ ...c, simple: mode === 'simple' }));
  };

  const save = useMutation({
    mutationFn: async (mint: boolean) => {
      if (!card) throw new Error('Choose a card.');
      await savePreset(card.id, config);
      if (mint) setRecord(await createDigitalSlab(card.id, null));
    },
    onSuccess: () =>
      toast.success(
        backendReady
          ? 'Saved to your private workspace.'
          : 'Saved for this session. Sign in for cloud storage.',
      ),
    onError: (e) => toast.error(e.message),
  });

  if (!card) {
    return (
      <div className="glass mx-auto max-w-lg space-y-5 rounded-3xl p-10 text-center">
        <Gem className="mx-auto h-12 w-12 text-primary" />
        <h1 className="font-display text-3xl font-bold">Your next centerpiece.</h1>
        <p className="text-sm text-muted-foreground">
          Scan or select a card before creating its display slab. No sample card or invented
          grade will be substituted.
        </p>
        <Button asChild>
          <Link to="/scanner">Find my card</Link>
        </Button>
      </div>
    );
  }

  const usePeachweb = engine === 'advanced';
  const useThree = engine === 'three';
  const useSimple = engine === 'simple';
  const lookControlsApply = useThree || useSimple;

  const engineHint = usePeachweb
    ? 'Published Peachweb interactive WebGL · marketing experience · NFC REQUIRES_HARDWARE (not live here)'
    : useThree
      ? 'WebGL acrylic slab (@vca/three-slab) · animated digital VCA label · DEMO NFC glyph'
      : 'CSS perspective fallback · low power · no WebGL';

  return (
    <div className="space-y-5">
      <header>
        <p className="eyebrow">VCA / SLAB STUDIO</p>
        <h1 className="mt-1.5 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          Slab studio
        </h1>
        <p className="mt-1.5 text-sm text-muted-foreground">
          Configure a premium display holder — Advanced mode is the Peachweb interactive WebGL
          experience. Your card is the hero.
        </p>
        <div className="slab-studio-trust mt-3" role="status">
          <span className="font-semibold text-amber-800">DIGITAL DISPLAY</span>
          <span className="text-slate-400" aria-hidden>
            ·
          </span>
          <span className="text-blue-800">NOT A CERTIFICATE</span>
          <span className="hidden text-slate-500 sm:inline">
            — creating a slab never assigns a grade
          </span>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <div className="min-h-[520px] sm:min-h-[600px]">
          {usePeachweb ? (
            <PeachwebScene />
          ) : useThree ? (
            <Slab3DViewer
              card={card}
              grade={certificate?.grade ?? null}
              serial={certificate?.serial ?? record?.serial ?? null}
              config={config}
              frontPhoto={inspections[card.id]?.front}
              backPhoto={inspections[card.id]?.back}
            />
          ) : (
            <HoloSlab
              card={card}
              grade={certificate?.grade ?? null}
              serial={certificate?.serial ?? record?.serial ?? null}
              config={config}
              frontPhoto={inspections[card.id]?.front}
              backPhoto={inspections[card.id]?.back}
            />
          )}
        </div>

        <section className="slab-studio-inspector relative flex flex-col">
          {/* Engine */}
          <div className="slab-studio-section">
            <p className="slab-studio-section-title">Render engine</p>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                aria-pressed={usePeachweb}
                onClick={() => setEngineMode('advanced')}
                className={`slab-studio-segment flex-col gap-1 px-1.5 text-[11px] sm:text-xs ${usePeachweb ? 'slab-studio-segment-active' : ''}`}
              >
                <Sparkles className="h-4 w-4 shrink-0" />
                Peachweb 3D
              </button>
              <button
                type="button"
                aria-pressed={useThree}
                onClick={() => setEngineMode('three')}
                className={`slab-studio-segment flex-col gap-1 px-1.5 text-[11px] sm:text-xs ${useThree ? 'slab-studio-segment-active' : ''}`}
              >
                <Layers className="h-4 w-4 shrink-0" />
                Three.js
              </button>
              <button
                type="button"
                aria-pressed={useSimple}
                onClick={() => setEngineMode('simple')}
                className={`slab-studio-segment flex-col gap-1 px-1.5 text-[11px] sm:text-xs ${useSimple ? 'slab-studio-segment-active' : ''}`}
              >
                <Box className="h-4 w-4 shrink-0" />
                Simple
              </button>
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">{engineHint}</p>
          </div>

          {/* Card + grade honesty */}
          <div className="slab-studio-section">
            <label className="block">
              <span className="slab-studio-section-title">Card</span>
              <select
                className="vca-input mt-2 w-full"
                value={selected ?? ''}
                onChange={(e) => {
                  setSelected(e.target.value);
                  setConfig(presets[e.target.value] ?? defaults);
                  setRecord(null);
                }}
              >
                {choices.map((id) => {
                  const c = cardById(id);
                  return c ? (
                    <option key={id} value={id}>
                      {c.name} · {c.set} · {c.number}
                    </option>
                  ) : null;
                })}
              </select>
            </label>
            <div className="mt-3 rounded-xl border border-blue-100 bg-blue-50/80 px-3.5 py-3">
              <p className="text-sm font-bold text-primary">
                {certificate?.grade ?? 'Ungraded display'}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {certificate
                  ? 'Grade supplied by an authorized grading record.'
                  : 'Digital displays are not certificates. Creating a slab never assigns a grade.'}
              </p>
            </div>
          </div>

          {usePeachweb && (
            <div className="slab-studio-section">
              <p className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-[11px] leading-relaxed text-muted-foreground">
                Look controls apply to Three.js / Simple displays. Peachweb is the published
                interactive scene.
              </p>
            </div>
          )}

          {/* Label finish swatches — apply to Three.js / Simple */}
          <div
            className={`slab-studio-section ${usePeachweb ? 'pointer-events-none opacity-40' : ''}`}
            aria-disabled={usePeachweb || undefined}
          >
            <p className="slab-studio-section-title">Label finish</p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {LABEL_FINISHES.map((f) => {
                const active = config.labelStyle === f.value;
                return (
                  <button
                    key={f.value}
                    type="button"
                    aria-pressed={active}
                    aria-label={`${f.name} label finish`}
                    disabled={usePeachweb}
                    onClick={() => update('labelStyle', f.value)}
                    className={`slab-studio-swatch ${active ? 'slab-studio-swatch-active' : ''}`}
                  >
                    <span
                      className="slab-studio-swatch-bar"
                      style={{ background: f.bar }}
                      aria-hidden
                    />
                    <span className="text-xs font-semibold text-foreground">{f.name}</span>
                    <span className="text-[10px] text-muted-foreground">{f.hint}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Environment tiles */}
          <div
            className={`slab-studio-section ${usePeachweb ? 'pointer-events-none opacity-40' : ''}`}
            aria-disabled={usePeachweb || undefined}
          >
            <p className="slab-studio-section-title">Studio environment</p>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {ENVIRONMENTS.map((env) => {
                const active = config.environment === env.value;
                return (
                  <button
                    key={env.value}
                    type="button"
                    aria-pressed={active}
                    aria-label={`${env.name} environment`}
                    disabled={usePeachweb}
                    onClick={() => update('environment', env.value)}
                    className={`slab-studio-env ${active ? 'slab-studio-env-active' : ''}`}
                  >
                    <span
                      className={`slab-studio-env-preview slab-stage-${env.value}`}
                      aria-hidden
                    />
                    <span className="text-xs font-semibold text-foreground">{env.name}</span>
                    <span className="text-[10px] text-muted-foreground">{env.hint}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Look: foil + card position */}
          <div
            className={`slab-studio-section ${usePeachweb ? 'pointer-events-none opacity-40' : ''}`}
            aria-disabled={usePeachweb || undefined}
          >
            <p className="slab-studio-section-title">Look</p>
            <label className="mt-2 block text-sm font-medium">
              <span className="flex items-center justify-between">
                Foil intensity
                <span className="font-mono text-xs font-semibold text-primary tabular-nums">
                  {config.holo}%
                </span>
              </span>
              <input
                aria-label="Foil intensity"
                type="range"
                min={0}
                max={100}
                value={config.holo}
                disabled={usePeachweb}
                onChange={(e) => update('holo', Number(e.target.value))}
                className="mt-2.5 w-full accent-blue-700"
              />
            </label>
            <label className="mt-4 block text-sm font-medium">
              <span className="flex items-center justify-between">
                Card position
                <span className="font-mono text-xs font-semibold text-primary tabular-nums">
                  {config.cardOffset > 0 ? `+${config.cardOffset}` : config.cardOffset}
                </span>
              </span>
              <input
                aria-label="Card position"
                type="range"
                min={-5}
                max={5}
                value={config.cardOffset}
                disabled={usePeachweb}
                onChange={(e) => update('cardOffset', Number(e.target.value))}
                className="mt-2.5 w-full accent-blue-700"
              />
            </label>
          </div>

          {/* Light accent */}
          <div
            className={`slab-studio-section ${usePeachweb ? 'pointer-events-none opacity-40' : ''}`}
            aria-disabled={usePeachweb || undefined}
          >
            <p className="slab-studio-section-title">Light accent</p>
            <div className="mt-2 flex gap-2.5">
              {LIGHT_ACCENTS.map((c) => {
                const active = config.lightTint === c.hex;
                return (
                  <button
                    key={c.hex}
                    type="button"
                    aria-label={`${c.label} light`}
                    aria-pressed={active}
                    disabled={usePeachweb}
                    onClick={() => update('lightTint', c.hex)}
                    className={`h-11 w-11 rounded-full border-2 transition duration-120 ${c.css} ${
                      active
                        ? 'border-primary ring-2 ring-primary/30 ring-offset-2 ring-offset-white'
                        : 'border-slate-200 hover:border-slate-400'
                    }`}
                  />
                );
              })}
            </div>
          </div>

          {/* Toggles — autoSpin/showGrade apply to Three.js / Simple; simple toggle switches engine */}
          <div className="slab-studio-section !border-b-0 pb-2">
            <p className="slab-studio-section-title mb-1">Options</p>
            {(
              [
                {
                  key: 'autoSpin' as const,
                  label: 'Slow auto-rotation',
                  disabled: !lookControlsApply,
                },
                {
                  key: 'showGrade' as const,
                  label: 'Show grade status',
                  disabled: !lookControlsApply,
                },
                {
                  key: 'simple' as const,
                  label: 'Simple display (low power)',
                  disabled: false,
                },
              ] as const
            ).map((c) => (
              <label
                key={c.key}
                className={`slab-studio-toggle ${c.disabled ? 'pointer-events-none opacity-40' : ''}`}
              >
                <span>{c.label}</span>
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-blue-700"
                  checked={Boolean(config[c.key])}
                  disabled={c.disabled}
                  onChange={(e) => update(c.key, e.target.checked)}
                />
              </label>
            ))}
          </div>

          {/* Sticky actions */}
          <div className="slab-studio-footer">
            <Button
              disabled={save.isPending}
              onClick={() => save.mutate(false)}
              variant="outline"
              className="w-full"
            >
              <Save className="mr-2 h-4 w-4" />
              Save display settings
            </Button>
            <Button
              disabled={save.isPending || Boolean(record)}
              onClick={() => save.mutate(true)}
              className="w-full"
            >
              <Gem className="mr-2 h-4 w-4" />
              {record ? 'Digital display saved' : 'Create ungraded digital display'}
            </Button>
            {record && (
              <p className="break-all font-mono text-[10px] text-muted-foreground">
                {record.serial}
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
