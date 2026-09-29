/** Integration honesty labels — never claim LIVE without a verified provider. */
export type IntegrationMode = "LIVE" | "MOCK" | "DEMO" | "REQUIRES_API_KEY" | "REQUIRES_HARDWARE" | "REQUIRES_HUMAN_REVIEW";

export const VCA_BRAND = {
  name: "Verified Card Authority",
  short: "VCA",
  colors: { red: "#C8102E", white: "#FFFFFF", blue: "#0033A0" },
} as const;

export const SERIAL = {
  digitalPrefix: "VCA-D",
  physicalPrefix: "VCA",
} as const;

export function yearShort(d = new Date()): string {
  return String(d.getFullYear()).slice(-2);
}
