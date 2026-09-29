import { useQuery } from '@tanstack/react-query';
import type { CatalogCard } from './types';

export interface PokemonIdentity {
  id: string;
  source: 'pokemontcg.io' | 'tcgdex';
  name: string;
  setId: string;
  setName: string;
  setSeries?: string;
  number: string;
  printedTotal?: string;
  rarity?: string;
  artist?: string;
  types?: string[];
  subtypes?: string[];
  supertype?: string;
  hp?: string;
  stage?: string;
  regulationMark?: string;
  nationalPokedexNumbers?: number[];
  imageSmall?: string;
  imageLarge?: string;
  tcgplayerUrl?: string;
  language: string;
  mode: 'LIVE' | 'MOCK' | 'REQUIRES_API_KEY';
}

export interface IdentityLookup {
  primary: PokemonIdentity | null;
  candidates: PokemonIdentity[];
  providersUsed: string[];
  warnings: string[];
  mode: 'LIVE' | 'REQUIRES_API_KEY';
}

const PTCG = 'https://api.pokemontcg.io/v2';
const DEX = 'https://api.tcgdex.net/v2';

function mapPtcg(card: any): PokemonIdentity {
  return {
    id: card.id,
    source: 'pokemontcg.io',
    name: card.name,
    setId: card.set?.id ?? '',
    setName: card.set?.name ?? '',
    setSeries: card.set?.series,
    number: card.number,
    printedTotal:
      card.set?.printedTotal != null
        ? String(card.set.printedTotal)
        : card.set?.total != null
          ? String(card.set.total)
          : undefined,
    rarity: card.rarity,
    artist: card.artist,
    types: card.types,
    subtypes: card.subtypes,
    supertype: card.supertype,
    hp: card.hp,
    regulationMark: card.regulationMark,
    nationalPokedexNumbers: card.nationalPokedexNumbers,
    imageSmall: card.images?.small,
    imageLarge: card.images?.large,
    tcgplayerUrl: card.tcgplayer?.url,
    language: 'en',
    mode: 'LIVE',
  };
}

function mapDex(card: any, language: string): PokemonIdentity {
  return {
    id: card.id,
    source: 'tcgdex',
    name: card.name,
    setId: card.set?.id ?? '',
    setName: card.set?.name ?? '',
    setSeries: card.set?.serie?.name,
    number: card.localId ?? card.id,
    printedTotal: card.set?.cardCount?.official != null ? String(card.set.cardCount.official) : undefined,
    rarity: card.rarity,
    artist: card.illustrator,
    types: card.types,
    subtypes: card.stage ? [card.stage] : undefined,
    supertype: card.category,
    hp: card.hp != null ? String(card.hp) : undefined,
    stage: card.stage,
    regulationMark: card.regulationMark,
    nationalPokedexNumbers: card.dexId,
    imageSmall: card.image ? `${card.image}/low.webp` : undefined,
    imageLarge: card.image ? `${card.image}/high.webp` : undefined,
    language,
    mode: 'LIVE',
  };
}

async function searchPtcg(card: CatalogCard): Promise<PokemonIdentity[]> {
  const parts = [`name:"${card.name.replace(/"/g, '')}"`];
  if (card.set) parts.push(`set.name:"${card.set.replace(/"/g, '')}"`);
  if (card.number) parts.push(`number:${String(card.number).split('/')[0]}`);
  const url = `${PTCG}/cards?q=${encodeURIComponent(parts.join(' '))}&pageSize=8`;
  const res = await fetch(url, { signal: AbortSignal.timeout(10000) });
  if (!res.ok) throw new Error(`pokemontcg.io ${res.status}`);
  const payload = await res.json();
  return (payload.data ?? []).map(mapPtcg);
}

async function searchDex(card: CatalogCard): Promise<PokemonIdentity[]> {
  const lang = (card.language || 'en').toLowerCase().slice(0, 2);
  const briefsRes = await fetch(`${DEX}/${lang}/cards?name=${encodeURIComponent(card.name)}`, {
    signal: AbortSignal.timeout(10000),
  });
  if (!briefsRes.ok) throw new Error(`TCGdex ${briefsRes.status}`);
  const briefs = (await briefsRes.json()) as Array<{ id: string; localId: string; name: string }>;
  const num = card.number ? String(card.number).split('/')[0] : '';
  let filtered = num
    ? briefs.filter((b) => b.localId === num || b.localId.startsWith(num))
    : briefs;
  if (!filtered.length) filtered = briefs;
  const top = filtered.slice(0, 5);
  const out: PokemonIdentity[] = [];
  for (const b of top) {
    const res = await fetch(`${DEX}/${lang}/cards/${encodeURIComponent(b.id)}`, {
      signal: AbortSignal.timeout(10000),
    });
    if (res.ok) out.push(mapDex(await res.json(), lang));
  }
  return out;
}

/** Live Pokémon DB lookup for identity cards. Never invents cards. */
export async function fetchPokemonIdentity(card: CatalogCard | undefined): Promise<IdentityLookup | null> {
  if (!card) return null;
  const warnings: string[] = [];
  const providersUsed: string[] = [];
  let candidates: PokemonIdentity[] = [];

  try {
    candidates = await searchPtcg(card);
    if (candidates.length) providersUsed.push('pokemontcg.io');
  } catch (e) {
    warnings.push(e instanceof Error ? e.message : 'PTCG_ERROR');
  }

  if (!candidates.length) {
    try {
      candidates = await searchDex(card);
      if (candidates.length) providersUsed.push('tcgdex');
    } catch (e) {
      warnings.push(e instanceof Error ? e.message : 'TCGDEX_ERROR');
    }
  }

  return {
    primary: candidates[0] ?? null,
    candidates,
    providersUsed,
    warnings,
    mode: candidates.length ? 'LIVE' : 'REQUIRES_API_KEY',
  };
}

export function usePokemonIdentity(card: CatalogCard | undefined) {
  return useQuery({
    queryKey: ['pokemon-identity', card?.id, card?.name, card?.set, card?.number, card?.language],
    queryFn: () => fetchPokemonIdentity(card),
    enabled: Boolean(card),
    staleTime: 600_000,
    retry: 1,
  });
}
