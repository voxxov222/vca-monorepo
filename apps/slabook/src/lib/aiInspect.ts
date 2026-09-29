import { useMutation } from '@tanstack/react-query';

export const AI_GRADE_DISCLAIMER =
  'AI screening estimate only — not an official VCA, PSA, BGS, or CGC grade. Final grades require human inspection and VCA production workflow.';

export interface AiInspectionResult {
  estimatedGrade: number | null;
  gradeBand: string | null;
  confidence: number;
  subgrades: {
    centering: number | null;
    corners: number | null;
    edges: number | null;
    surface: number | null;
  };
  findings: Array<{
    flag: string;
    severity: 'low' | 'medium' | 'high';
    location?: string;
    note: string;
  }>;
  authenticitySignals: {
    labelMatch: boolean | null;
    hologramVisible: boolean | null;
    textClarity: boolean | null;
    notes: string[];
  };
  disclaimer: string;
  mode: 'LIVE' | 'MOCK' | 'REQUIRES_API_KEY' | 'REQUIRES_HUMAN_REVIEW';
  model: string;
  provider: string;
}

const RORK = 'https://toolkit.rork.com/text/llm/';

const SYSTEM = `You are a Pokémon TCG card condition screening assistant for Verified Card Authority (VCA).
You provide AI SCREENING estimates only — never claim to issue an official VCA, PSA, BGS, or CGC grade.
Be conservative. If image quality is poor, lower confidence and say so.
Return STRICT JSON only matching the schema. Do not invent defects you cannot see.
Schema:
{
  "estimatedGrade": number|null,
  "gradeBand": string|null,
  "confidence": number,
  "subgrades": { "centering": number|null, "corners": number|null, "edges": number|null, "surface": number|null },
  "findings": [{ "flag": string, "severity": "low"|"medium"|"high", "location": string|null, "note": string }],
  "authenticitySignals": { "labelMatch": boolean|null, "hologramVisible": boolean|null, "textClarity": boolean|null, "notes": string[] }
}`;

function parseJsonLoose(text: string): any {
  const trimmed = text.trim();
  const fence = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/);
  const raw = fence ? fence[1] : trimmed;
  const start = raw.indexOf('{');
  const end = raw.lastIndexOf('}');
  if (start < 0 || end < 0) throw new Error('NO_JSON');
  return JSON.parse(raw.slice(start, end + 1));
}

export async function runAiInspection(input: {
  dataUrl: string;
  cardNameHint?: string;
  setHint?: string;
}): Promise<AiInspectionResult> {
  const userText = [
    'Screen this Pokémon TCG card for condition and obvious authenticity cues.',
    input.cardNameHint ? `Hint name: ${input.cardNameHint}` : '',
    input.setHint ? `Hint set: ${input.setHint}` : '',
    'Remember: AI screening only, not an official grade.',
  ]
    .filter(Boolean)
    .join('\n');

  try {
    const res = await fetch(RORK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [
          { role: 'system', content: SYSTEM },
          {
            role: 'user',
            content: [
              { type: 'text', text: userText },
              { type: 'image', image: input.dataUrl },
            ],
          },
        ],
      }),
      signal: AbortSignal.timeout(60000),
    });
    if (!res.ok) {
      return {
        estimatedGrade: null,
        gradeBand: null,
        confidence: 0,
        subgrades: { centering: null, corners: null, edges: null, surface: null },
        findings: [],
        authenticitySignals: { labelMatch: null, hologramVisible: null, textClarity: null, notes: [`Vision gateway HTTP ${res.status}`] },
        disclaimer: AI_GRADE_DISCLAIMER,
        mode: 'REQUIRES_API_KEY',
        model: 'unavailable',
        provider: 'rork-toolkit',
      };
    }
    const payload = await res.json();
    const text = typeof payload?.completion === 'string' ? payload.completion : JSON.stringify(payload);
    const data = parseJsonLoose(text);
    return {
      estimatedGrade: typeof data.estimatedGrade === 'number' ? data.estimatedGrade : null,
      gradeBand: typeof data.gradeBand === 'string' ? data.gradeBand : null,
      confidence: typeof data.confidence === 'number' ? Math.min(1, Math.max(0, data.confidence)) : 0,
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
      disclaimer: AI_GRADE_DISCLAIMER,
      mode: 'LIVE',
      model: payload?.model || 'rork-vision',
      provider: 'rork-toolkit',
    };
  } catch (error) {
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
        notes: [error instanceof Error ? error.message : 'INSPECTION_ERROR'],
      },
      disclaimer: AI_GRADE_DISCLAIMER,
      mode: 'REQUIRES_API_KEY',
      model: 'error',
      provider: 'rork-toolkit',
    };
  }
}

export function useAiInspection() {
  return useMutation({ mutationFn: runAiInspection });
}
