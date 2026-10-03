import { useEffect, useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { getVcaApiBaseUrl } from "@/lib/vcaApi";

/**
 * Foundation shell for card intelligence.
 * Panels switch locally. They do not invent grades, prices, or catalog rows.
 * Staff writes stay on the API and are not called from this page.
 */

const PANELS = [
  {
    n: 1,
    id: "lookup",
    title: "Card lookup",
    status: "LIVE read · empty until rows exist",
    body: "Looks up CardMaster in the trust database only. A miss is no match — not a sample Pokémon card. Unknown fields stay UNKNOWN.",
  },
  {
    n: 2,
    id: "queue",
    title: "Update queue",
    status: "LIVE read · queue starts empty",
    body: "States: NEW, AUTO_VERIFIED, NEEDS_REVIEW, APPROVED, PUBLISHED. Versions are separate rows. This shell does not approve or publish.",
  },
  {
    n: 3,
    id: "references",
    title: "Reference images",
    status: "NOT BUILT",
    body: "Image slots are URLs on CardMasterImage. Nothing is crawled here, and no stock art is shown as the catalog.",
  },
  {
    n: 4,
    id: "identify",
    title: "Identification",
    status: "NOT BUILT",
    body: "No computer-vision identifier in this slice. Identity is UNKNOWN until a real source returns it.",
  },
  {
    n: 5,
    id: "session",
    title: "Inspection session",
    status: "API only · REQUIRES grader session",
    body: "POST /api/card-intelligence/inspections creates a session. This page does not call it and does not bypass admin auth.",
  },
  {
    n: 6,
    id: "categories",
    title: "Category scores",
    status: "SCHEMA · no measurements yet",
    body: "Centering, corners, edges, surface, and print quality each store score, confidence, and source. All are UNKNOWN until recorded. Null is not zero.",
  },
  {
    n: 7,
    id: "grade",
    title: "Proposed grade",
    status: "NOT AN OFFICIAL GRADE",
    body: "Assistive proposals are labeled NOT_AN_OFFICIAL_GRADE. There is no default grade. Authenticity is indicators, concerns, or human review — never certain.",
  },
  {
    n: 8,
    id: "evidence",
    title: "Evidence package",
    status: "API append · originals immutable",
    body: "Original photo, measurement, marker, note, and reference comparison are append-only. Enhancements must point at the original. Nothing is overwritten here.",
  },
  {
    n: 9,
    id: "hooks",
    title: "Slab and serial hooks",
    status: "LINKS ONLY",
    body: "A session may reference an existing digital slab id, certificate (serial stays on that certificate), or NFC record id. No NFC cryptography and no new serial is issued.",
  },
] as const;

type LookupPayload = {
  success?: boolean;
  dataStatus?: string;
  error?: string;
  match?: { id: string; name?: { value: string | null; status: string } } | null;
  candidates?: unknown[];
  warnings?: string[];
  gradedPrices?: string;
  rawPrice?: string;
  note?: string;
};

type QueuePayload = {
  success?: boolean;
  dataStatus?: string;
  error?: string;
  count?: number;
  items?: unknown[];
  warnings?: string[];
  note?: string;
};

export default function InspectionAdmin() {
  const [panel, setPanel] = useState(0);
  const [lookup, setLookup] = useState<LookupPayload | null>(null);
  const [queue, setQueue] = useState<QueuePayload | null>(null);
  const [lookupError, setLookupError] = useState<string | null>(null);
  const [queueError, setQueueError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const active = PANELS[panel];

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
      const n = Number(event.key);
      if (n >= 1 && n <= 9) setPanel(n - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const base = getVcaApiBaseUrl();
    const controller = new AbortController();
    fetch(`${base}/api/card-intelligence/update-queue`, { signal: controller.signal })
      .then(async (res) => {
        const body = (await res.json()) as QueuePayload;
        setQueue(body);
        setQueueError(res.ok ? null : body.error || `HTTP ${res.status}`);
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        setQueue(null);
        setQueueError("API unreachable. Queue was not filled with sample rows.");
      });
    return () => controller.abort();
  }, []);

  async function runLookup(event: FormEvent) {
    event.preventDefault();
    const name = query.trim();
    if (!name) {
      setLookup({
        success: false,
        dataStatus: "EMPTY",
        error: "QUERY_REQUIRED",
        match: null,
        candidates: [],
        warnings: ["QUERY_REQUIRED"],
        note: "Enter a name already stored on CardMaster. This does not search the public Pokémon database.",
      });
      setLookupError(null);
      return;
    }
    try {
      const res = await fetch(
        `${getVcaApiBaseUrl()}/api/card-intelligence/cards/lookup?name=${encodeURIComponent(name)}`,
      );
      const body = (await res.json()) as LookupPayload;
      setLookup(body);
      setLookupError(res.ok ? null : body.error || `HTTP ${res.status}`);
    } catch {
      setLookup(null);
      setLookupError("API unreachable. No catalog was invented.");
    }
  }

  return (
    <div className="space-y-5">
      <header className="space-y-2">
        <p className="eyebrow">CARD INTELLIGENCE · FOUNDATION</p>
        <h1 className="font-display text-3xl font-bold">Inspection shell</h1>
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Schema and API contracts only. No official grade is shown because none has been recorded.
          Prices are not loaded. Population is UNKNOWN. Shortcuts 1–9 switch panels and do not run inspection.
        </p>
        <p className="text-xs text-muted-foreground">
          Existing intake stays on <Link className="font-semibold text-primary underline" to="/admin">Administration</Link>.
          This page does not grant grader rights.
        </p>
      </header>

      <nav aria-label="Inspection sections" className="grid gap-2 sm:grid-cols-3">
        {PANELS.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setPanel(index)}
            className={`rounded-xl border px-3 py-3 text-left ${index === panel ? "border-blue-700 bg-blue-50" : "bg-white"}`}
          >
            <span className="font-mono text-[10px] font-bold text-blue-800">{item.n}</span>
            <strong className="mt-1 block text-sm">{item.title}</strong>
            <span className="mt-1 block text-[11px] text-muted-foreground">{item.status}</span>
          </button>
        ))}
      </nav>

      <section className="glass space-y-4 rounded-2xl p-5">
        <p className="eyebrow">{active.status}</p>
        <h2 className="font-display text-2xl font-bold">{active.n}. {active.title}</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">{active.body}</p>

        {active.id === "lookup" && (
          <form onSubmit={runLookup} className="space-y-3">
            <label className="block text-sm font-semibold">
              Card master name
              <input
                className="vca-input mt-2 w-full"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Exact name in CardMaster, or leave the result empty"
                aria-label="Card master name"
              />
            </label>
            <button type="submit" className="min-h-11 rounded-xl bg-blue-800 px-4 text-sm font-semibold text-white">
              Look up stored card
            </button>
            {lookupError && <p role="alert" className="text-sm text-destructive">{lookupError}</p>}
            {lookup && (
              <dl className="grid gap-2 text-sm sm:grid-cols-2">
                <div><dt className="text-muted-foreground">Data status</dt><dd className="font-semibold">{lookup.dataStatus ?? "UNKNOWN"}</dd></div>
                <div><dt className="text-muted-foreground">Match</dt><dd className="font-semibold">{lookup.match ? lookup.match.id : "none"}</dd></div>
                <div><dt className="text-muted-foreground">Candidates</dt><dd className="font-semibold">{lookup.candidates?.length ?? 0}</dd></div>
                <div><dt className="text-muted-foreground">Raw price</dt><dd className="font-semibold">{lookup.rawPrice ?? "—"}</dd></div>
                <div><dt className="text-muted-foreground">Graded prices</dt><dd className="font-semibold">{lookup.gradedPrices ?? "Unavailable"}</dd></div>
                <div><dt className="text-muted-foreground">Name</dt><dd className="font-semibold">{lookup.match?.name?.value ?? "UNKNOWN"}</dd></div>
              </dl>
            )}
            {lookup?.note && <p className="text-xs text-muted-foreground">{lookup.note}</p>}
          </form>
        )}

        {active.id === "queue" && (
          <div className="space-y-2 text-sm">
            {queueError && <p role="alert" className="text-destructive">{queueError}</p>}
            <p>Rows returned: <strong>{queue?.count ?? 0}</strong></p>
            <p>Status: <strong>{queue?.dataStatus ?? "UNKNOWN"}</strong></p>
            {(queue?.items?.length ?? 0) === 0 && <p className="text-muted-foreground">No update proposals stored.</p>}
            {queue?.note && <p className="text-xs text-muted-foreground">{queue.note}</p>}
          </div>
        )}

        {active.id !== "lookup" && active.id !== "queue" && (
          <div className="rounded-xl border border-dashed p-4 text-sm">
            <p className="font-semibold">Empty</p>
            <p className="mt-1 text-muted-foreground">No overlay, no stock grade, no placeholder card. Proposed grade: UNKNOWN. Official grade: none.</p>
            <p className="mt-2 font-mono text-xs">graded prices Unavailable · raw price — · population UNKNOWN</p>
          </div>
        )}
      </section>
    </div>
  );
}
