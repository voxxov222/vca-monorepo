import type { CatalogSearchQuery, PokemonCardIdentity } from "./types.js";

const DEX = "https://api.tcgdex.net/v2";

function mapDex(card: any, language: string): PokemonCardIdentity {
  return {
    id: card.id,
    source: "tcgdex",
    name: card.name,
    setId: card.set?.id ?? "",
    setName: card.set?.name ?? "",
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
    mode: "LIVE",
  };
}

export async function searchTcgdex(query: CatalogSearchQuery): Promise<PokemonCardIdentity[]> {
  const lang = (query.language || "en").toLowerCase();
  if (query.id) {
    const res = await fetch(`${DEX}/${lang}/cards/${encodeURIComponent(query.id)}`, {
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return [];
    return [mapDex(await res.json(), lang)];
  }
  if (!query.name) return [];
  const briefsRes = await fetch(`${DEX}/${lang}/cards?name=${encodeURIComponent(query.name)}`, {
    signal: AbortSignal.timeout(10000),
  });
  if (!briefsRes.ok) throw new Error(`TCGDEX_${briefsRes.status}`);
  const briefs = (await briefsRes.json()) as Array<{ id: string; localId: string; name: string }>;
  let filtered = briefs;
  if (query.number) {
    filtered = briefs.filter(
      (b) => b.localId === query.number || b.localId.startsWith(String(query.number)),
    );
  }
  const top = (filtered.length ? filtered : briefs).slice(0, 8);
  const details: PokemonCardIdentity[] = [];
  for (const b of top) {
    const res = await fetch(`${DEX}/${lang}/cards/${encodeURIComponent(b.id)}`, {
      signal: AbortSignal.timeout(10000),
    });
    if (res.ok) details.push(mapDex(await res.json(), lang));
  }
  return details;
}
