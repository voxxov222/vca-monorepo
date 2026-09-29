import type { CatalogSearchQuery, PokemonCardIdentity } from "./types.js";

const PTCG = "https://api.pokemontcg.io/v2";

function mapCard(card: any): PokemonCardIdentity {
  return {
    id: card.id,
    source: "pokemontcg.io",
    name: card.name,
    setId: card.set?.id ?? "",
    setName: card.set?.name ?? "",
    setSeries: card.set?.series,
    number: card.number,
    printedTotal: card.set?.printedTotal != null ? String(card.set.printedTotal) : card.set?.total != null ? String(card.set.total) : undefined,
    rarity: card.rarity,
    artist: card.artist,
    types: card.types,
    subtypes: card.subtypes,
    supertype: card.supertype,
    hp: card.hp,
    stage: Array.isArray(card.subtypes) ? card.subtypes.find((s: string) => /stage|basic|v|ex|gx/i.test(s)) : undefined,
    regulationMark: card.regulationMark,
    nationalPokedexNumbers: card.nationalPokedexNumbers,
    imageSmall: card.images?.small,
    imageLarge: card.images?.large,
    tcgplayerUrl: card.tcgplayer?.url,
    language: "en",
    mode: "LIVE",
  };
}

export async function searchPokemonTcg(query: CatalogSearchQuery): Promise<PokemonCardIdentity[]> {
  const key = process.env.POKEMONTCG_API_KEY;
  const headers: Record<string, string> = {};
  if (key) headers["X-Api-Key"] = key;

  if (query.id) {
    const res = await fetch(`${PTCG}/cards/${encodeURIComponent(query.id)}`, {
      headers,
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return [];
    const payload = await res.json();
    return payload.data ? [mapCard(payload.data)] : [];
  }

  const parts: string[] = [];
  if (query.name) parts.push(`name:"${query.name.replace(/"/g, "")}"`);
  if (query.set) parts.push(`set.name:"${query.set.replace(/"/g, "")}"`);
  if (query.number) parts.push(`number:${query.number.split("/")[0]}`);
  if (!parts.length) return [];

  const url = `${PTCG}/cards?q=${encodeURIComponent(parts.join(" "))}&pageSize=12`;
  const res = await fetch(url, { headers, signal: AbortSignal.timeout(10000) });
  if (!res.ok) throw new Error(`POKEMON_TCG_${res.status}`);
  const payload = await res.json();
  return (payload.data ?? []).map(mapCard);
}
