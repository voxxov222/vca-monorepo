export interface PokemonCardIdentity {
  id: string;
  source: "pokemontcg.io" | "tcgdex" | "scrydex";
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
  mode: "LIVE" | "MOCK" | "REQUIRES_API_KEY";
}

export interface CatalogSearchQuery {
  name?: string;
  set?: string;
  number?: string;
  id?: string;
  language?: string;
}
