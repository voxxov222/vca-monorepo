import { Database, ExternalLink, Loader2 } from 'lucide-react';
import type { CatalogCard } from '@/lib/types';
import { usePokemonIdentity } from '@/lib/pokemonIdentity';

function Row({ label, value }: { label: string; value?: string | number | null }) {
  if (value == null || value === '') return null;
  return (
    <div className="flex justify-between gap-3 border-b border-white/5 py-1.5 text-xs last:border-0">
      <span className="text-white/45">{label}</span>
      <span className="text-right font-medium text-white/90">{value}</span>
    </div>
  );
}

export default function PokemonIdentityPanel({ card }: { card: CatalogCard }) {
  const { data, isLoading, isError } = usePokemonIdentity(card);
  const id = data?.primary;

  return (
    <section className="glass rounded-3xl p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] font-bold tracking-[0.25em] text-holo-mint">POKÉMON DATABASE · IDENTITY</p>
          <h2 className="mt-2 flex items-center gap-2 font-display text-xl font-bold text-white">
            <Database className="h-5 w-5 text-holo-cyan" />
            Card identity card
          </h2>
        </div>
        <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-bold tracking-wider text-white/70">
          {isLoading ? 'LOOKING UP…' : data?.mode === 'LIVE' ? 'LIVE' : 'NO MATCH'}
        </span>
      </div>

      {isLoading && (
        <p className="mt-4 flex items-center gap-2 text-xs text-white/50">
          <Loader2 className="h-4 w-4 animate-spin" /> Querying pokemontcg.io / TCGdex…
        </p>
      )}

      {!isLoading && (isError || !id) && (
        <p className="mt-4 text-xs text-white/50">
          No live catalog match for this printing. Local catalog fields still show above — we do not invent database rows.
          {data?.warnings?.length ? ` (${data.warnings.join('; ')})` : ''}
        </p>
      )}

      {id && (
        <div className="mt-4 grid gap-4 sm:grid-cols-[120px_1fr]">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/30">
            {id.imageSmall || id.imageLarge ? (
              <img src={id.imageLarge || id.imageSmall} alt={`${id.name} catalog`} className="h-full w-full object-contain" />
            ) : (
              <div className="flex h-40 items-center justify-center text-[10px] text-white/30">No art</div>
            )}
          </div>
          <div>
            <p className="font-display text-lg font-bold text-white">{id.name}</p>
            <p className="mt-1 text-[11px] text-white/45">
              Source: {id.source} · ID <span className="font-mono text-white/70">{id.id}</span>
              {data?.providersUsed?.length ? ` · via ${data.providersUsed.join(', ')}` : ''}
            </p>
            <div className="mt-3">
              <Row label="Set" value={id.setName} />
              <Row label="Series" value={id.setSeries} />
              <Row label="Number" value={id.printedTotal ? `${id.number}/${id.printedTotal}` : id.number} />
              <Row label="Rarity" value={id.rarity} />
              <Row label="Artist" value={id.artist} />
              <Row label="Types" value={id.types?.join(', ')} />
              <Row label="Subtypes" value={id.subtypes?.join(', ')} />
              <Row label="HP" value={id.hp} />
              <Row label="Stage" value={id.stage} />
              <Row label="Regulation" value={id.regulationMark} />
              <Row label="Pokédex #" value={id.nationalPokedexNumbers?.join(', ')} />
              <Row label="Language" value={id.language} />
            </div>
            {id.tcgplayerUrl && (
              <a
                href={id.tcgplayerUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-holo-cyan hover:underline"
              >
                Open TCGplayer listing <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>
        </div>
      )}

      {id && data && data.candidates.length > 1 && (
        <div className="mt-4 border-t border-white/10 pt-3">
          <p className="text-[10px] font-bold tracking-wider text-white/40">OTHER CANDIDATES ({data.candidates.length - 1})</p>
          <ul className="mt-2 space-y-1">
            {data.candidates.slice(1, 5).map((c) => (
              <li key={c.id} className="text-[11px] text-white/55">
                <span className="font-mono text-white/70">{c.id}</span> · {c.setName} #{c.number} · {c.rarity || '—'}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
