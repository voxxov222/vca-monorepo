import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { Box, Gem, Save, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import HoloSlab, { type SlabConfig } from '@/components/HoloSlab';
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

type Engine = 'advanced' | 'simple';

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
  // Default Advanced 3D; config.simple maps to Simple engine
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

  const useAdvanced = engine === 'advanced' && !config.simple;

  return (
    <div className="space-y-6">
      <header>
        <p className="eyebrow">VCA / SLAB STUDIO</p>
        <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight">
          Advanced 3D slab studio
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Interactive WebGL holder with an animated digital VCA label. Your card. Every detail
          under your control. Digital displays are not certificates — creating a slab never
          assigns a grade.
        </p>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        {useAdvanced ? (
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

        <section className="glass space-y-5 rounded-3xl p-6">
          <div>
            <p className="mb-2 text-sm font-semibold">Render engine</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                aria-pressed={useAdvanced}
                onClick={() => setEngineMode('advanced')}
                className={`flex min-h-11 items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold transition ${
                  useAdvanced
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border bg-background text-muted-foreground hover:bg-muted/40'
                }`}
              >
                <Sparkles className="h-4 w-4" />
                Advanced 3D
              </button>
              <button
                type="button"
                aria-pressed={!useAdvanced}
                onClick={() => setEngineMode('simple')}
                className={`flex min-h-11 items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold transition ${
                  !useAdvanced
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border bg-background text-muted-foreground hover:bg-muted/40'
                }`}
              >
                <Box className="h-4 w-4" />
                Simple (CSS)
              </button>
            </div>
            <p className="mt-2 text-[11px] text-muted-foreground">
              {useAdvanced
                ? 'WebGL acrylic slab · animated digital VCA label · DEMO NFC glyph'
                : 'CSS perspective fallback · low power · no WebGL'}
            </p>
          </div>

          <label className="block text-sm font-semibold">
            Card
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

          <div className="rounded-xl bg-blue-50 p-4">
            <p className="text-sm font-bold text-primary">
              {certificate?.grade ?? 'Ungraded display'}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {certificate
                ? 'Grade supplied by an authorized grading record.'
                : 'Digital displays are not certificates. Creating a slab never assigns a grade.'}
            </p>
          </div>

          <label className="block text-sm font-semibold">
            Label finish
            <select
              className="vca-input mt-2 w-full"
              value={config.labelStyle}
              onChange={(e) =>
                update('labelStyle', e.target.value as SlabConfig['labelStyle'])
              }
            >
              <option value="classic">Chrome / VCA blue</option>
              <option value="neon">Redline / VCA red</option>
              <option value="gold">Warm metallic</option>
            </select>
          </label>

          <label className="block text-sm font-semibold">
            Studio environment
            <select
              className="vca-input mt-2 w-full"
              value={config.environment}
              onChange={(e) =>
                update('environment', e.target.value as SlabConfig['environment'])
              }
            >
              <option value="studio">Daylight studio</option>
              <option value="void">Midnight display</option>
              <option value="nebula">Red & blue gallery</option>
            </select>
          </label>

          <label className="block text-sm font-semibold">
            Foil intensity{' '}
            <span className="float-right font-mono text-primary">{config.holo}%</span>
            <input
              aria-label="Foil intensity"
              type="range"
              min={0}
              max={100}
              value={config.holo}
              onChange={(e) => update('holo', Number(e.target.value))}
              className="mt-3 w-full accent-blue-700"
            />
          </label>

          <label className="block text-sm font-semibold">
            Card position
            <input
              aria-label="Card position"
              type="range"
              min={-5}
              max={5}
              value={config.cardOffset}
              onChange={(e) => update('cardOffset', Number(e.target.value))}
              className="mt-3 w-full accent-blue-700"
            />
          </label>

          <fieldset>
            <legend className="mb-2 text-sm font-semibold">Light accent</legend>
            <div className="flex gap-2">
              {(
                [
                  { hex: '#244cb4', label: 'Blue', css: 'bg-blue-700' },
                  { hex: '#be253d', label: 'Red', css: 'bg-red-700' },
                  { hex: '#94a3b8', label: 'Silver', css: 'bg-slate-400' },
                ] as const
              ).map((c) => (
                <button
                  key={c.hex}
                  type="button"
                  aria-label={`${c.label} light`}
                  aria-pressed={config.lightTint === c.hex}
                  onClick={() => update('lightTint', c.hex)}
                  className={`h-11 w-11 rounded-full border-4 ${c.css} ${
                    config.lightTint === c.hex ? 'border-slate-900' : 'border-white'
                  }`}
                />
              ))}
            </div>
          </fieldset>

          {(
            [
              { key: 'autoSpin', label: 'Slow auto-rotation' },
              { key: 'showGrade', label: 'Show grade status' },
              { key: 'simple', label: 'Simple display (low power)' },
            ] as const
          ).map((c) => (
            <label
              key={c.key}
              className="flex min-h-10 items-center justify-between text-sm"
            >
              <span>{c.label}</span>
              <input
                type="checkbox"
                className="h-4 w-4 accent-blue-700"
                checked={Boolean(config[c.key])}
                onChange={(e) => update(c.key, e.target.checked)}
              />
            </label>
          ))}

          <div className="flex flex-col gap-2 border-t pt-4">
            <Button
              disabled={save.isPending}
              onClick={() => save.mutate(false)}
              variant="outline"
            >
              <Save className="mr-2 h-4 w-4" />
              Save display settings
            </Button>
            <Button
              disabled={save.isPending || Boolean(record)}
              onClick={() => save.mutate(true)}
            >
              <Gem className="mr-2 h-4 w-4" />
              {record ? 'Digital display saved' : 'Create ungraded digital display'}
            </Button>
          </div>
          {record && (
            <p className="break-all font-mono text-[10px] text-muted-foreground">
              {record.serial}
            </p>
          )}
        </section>
      </div>
    </div>
  );
}
