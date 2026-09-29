import type { AiInspectionResult, InspectionInput } from "./types.js";
import { DISCLAIMER, INSPECTION_SYSTEM } from "./prompts.js";

const RORK = "https://toolkit.rork.com/text/llm/";

function mockResult(reason: string): AiInspectionResult {
  return {
    estimatedGrade: null,
    gradeBand: null,
    confidence: 0,
    subgrades: { centering: null, corners: null, edges: null, surface: null },
    findings: [],
    authenticitySignals: {
      labelMatch: null,
      hologramVisible: null,
      textClarity: null,
      notes: [reason],
    },
    disclaimer: DISCLAIMER,
    mode: "REQUIRES_API_KEY",
    model: "none",
    provider: "none",
  };
}

function parseJsonLoose(text: string): any {
  const trimmed = text.trim();
  const fence = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/);
  const raw = fence ? fence[1] : trimmed;
  const start = raw.indexOf("{");
  const end = raw.lastIndexOf("}");
  if (start < 0 || end < 0) throw new Error("NO_JSON");
  return JSON.parse(raw.slice(start, end + 1));
}

/** Vision inspection via Rork LLM gateway (same path Slabook already uses). Labels REQUIRES_API_KEY when unavailable. */
export async function inspectCardAi(input: InspectionInput): Promise<AiInspectionResult> {
  if (!input.imageBase64 && !input.imageUrl) {
    return mockResult("No image provided for inspection.");
  }

  const userText = [
    "Screen this Pokémon TCG card for condition and obvious authenticity cues.",
    input.cardNameHint ? `Hint name: ${input.cardNameHint}` : "",
    input.setHint ? `Hint set: ${input.setHint}` : "",
    "Remember: AI screening only, not an official grade.",
  ]
    .filter(Boolean)
    .join("\n");

  const content: any[] = [{ type: "text", text: userText }];
  if (input.imageBase64) {
    content.push({
      type: "image",
      image: `data:${input.mimeType || "image/jpeg"};base64,${input.imageBase64}`,
    });
  } else if (input.imageUrl) {
    content.push({ type: "image", image: input.imageUrl });
  }

  try {
    const res = await fetch(RORK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [
          { role: "system", content: INSPECTION_SYSTEM },
          { role: "user", content },
        ],
      }),
      signal: AbortSignal.timeout(60000),
    });
    if (!res.ok) {
      return {
        ...mockResult(`Vision gateway HTTP ${res.status}`),
        mode: "REQUIRES_API_KEY",
        provider: "rork-toolkit",
        model: "unavailable",
      };
    }
    const payload = await res.json();
    const text = typeof payload?.completion === "string" ? payload.completion : JSON.stringify(payload);
    const data = parseJsonLoose(text);
    return {
      estimatedGrade: typeof data.estimatedGrade === "number" ? data.estimatedGrade : null,
      gradeBand: typeof data.gradeBand === "string" ? data.gradeBand : null,
      confidence: typeof data.confidence === "number" ? Math.min(1, Math.max(0, data.confidence)) : 0,
      subgrades: {
        centering: data.subgrades?.centering ?? null,
        corners: data.subgrades?.corners ?? null,
        edges: data.subgrades?.edges ?? null,
        surface: data.subgrades?.surface ?? null,
      },
      findings: Array.isArray(data.findings) ? data.findings : [],
      authenticitySignals: {
        labelMatch: data.authenticitySignals?.labelMatch ?? null,
        hologramVisible: data.authenticitySignals?.hologramVisible ?? null,
        textClarity: data.authenticitySignals?.textClarity ?? null,
        notes: Array.isArray(data.authenticitySignals?.notes) ? data.authenticitySignals.notes : [],
      },
      disclaimer: DISCLAIMER,
      mode: "LIVE",
      model: payload?.model || "rork-vision",
      provider: "rork-toolkit",
    };
  } catch (error) {
    return {
      ...mockResult(error instanceof Error ? error.message : "INSPECTION_ERROR"),
      mode: "REQUIRES_API_KEY",
      provider: "rork-toolkit",
      model: "error",
    };
  }
}
