import type { CatalogSearchQuery, PokemonCardIdentity } from "./types.js";

const BASE = "https://api.scrydex.com/pokemon/v1";

function headers(): Record<string, string> | null {
  const key = process.env.SCRYDEX_API_KEY;
  const team = process.env.SCRYDEX_TEAM_ID;
  if (!key || !team) return null;
  return { "X-Api-Key": key, "X-Team-ID": team };
}

function mapCard(card: any): PokemonCardIdentity {
  const front = (card.images ?? []).find((i: any) => i.type === "front") ?? (card.images ?? [])[0];
  return {
    id: card.id,
    source: "scrydex",
    name: card.name,
    setId: card.expansion?.id ?? "",
    setName: card.expansion?.name ?? "",
    setSeries: card.expansion?.series,
    number: String(card.number ?? card.printed_number ?? ""),
    printedTotal: card.expansion?.printed_total != null ? String(card.expansion.printed_total) : undefined,
    rarity: card.rarity,
    artist: card.artist,
    types: card.types,
    subtypes: card.subtypes,
    supertype: card.supertype,
    hp: card.hp != null ? String(card.hp) : undefined,
    stage: Array.isArray(card.subtypes) ? card.subtypes.find((s: string) => /stage|basic|v|ex|gx/i.test(s)) : undefined,
    regulationMark: card.regulation_mark,
    nationalPokedexNumbers: card.national_pokedex_numbers,
    imageSmall: front?.small,
    imageLarge: front?.large ?? front?.medium,
    language: (card.language_code || "en").toLowerCase(),
    mode: "LIVE",
  };
}

export async function searchScrydex(query: CatalogSearchQuery): Promise<PokemonCardIdentity[]> {
  const h = headers();
  if (!h) return [];
  if (query.id) {
    const res = await fetch(`${BASE}/en/cards/${encodeURIComponent(query.id)}`, {
      headers: h,
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) return [];
    const body = await res.json();
    const card = body.data ?? body;
    return card?.id ? [mapCard(card)] : [];
  }
  if (!query.name) return [];
  const parts = [`name:"${query.name.replace(/"/g, "")}"`];
  if (query.set) parts.push(`expansion.name:"${query.set.replace(/"/g, "")}"`);
  if (query.number) parts.push(`number:${String(query.number).split("/")[0]}`);
  const url = `${BASE}/en/cards?q=${encodeURIComponent(parts.join(" "))}&page_size=12`;
  const res = await fetch(url, { headers: h, signal: AbortSignal.timeout(15000) });
  if (!res.ok) throw new Error(`SCRYDEX_${res.status}`);
  const body = await res.json();
  return (body.data ?? []).map(mapCard);
}
