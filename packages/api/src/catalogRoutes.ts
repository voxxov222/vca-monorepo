import type { Express, Request, Response } from "express";
import { resolvePokemonIdentity } from "@vca/catalog";
import { getLivePrices, listPricingProviders } from "@vca/pricing";
import { inspectCardAi, AI_GRADE_DISCLAIMER } from "@vca/ai";

export function registerCatalogRoutes(app: Express): void {
  app.get("/api/catalog/providers", (_req, res) => {
    res.json({
      pricing: listPricingProviders(),
      identity: [
        { id: "pokemontcg.io", label: "Pokémon TCG API", mode: process.env.POKEMONTCG_API_KEY ? "LIVE" : "LIVE" },
        { id: "tcgdex", label: "TCGdex", mode: "LIVE" },
      ],
      ai: [
        { id: "rork-vision", label: "AI card inspection (screening only)", mode: "LIVE", disclaimer: AI_GRADE_DISCLAIMER },
      ],
    });
  });

  app.get("/api/catalog/identity", async (req: Request, res: Response) => {
    try {
      const result = await resolvePokemonIdentity({
        name: typeof req.query.name === "string" ? req.query.name : undefined,
        set: typeof req.query.set === "string" ? req.query.set : undefined,
        number: typeof req.query.number === "string" ? req.query.number : undefined,
        id: typeof req.query.id === "string" ? req.query.id : undefined,
        language: typeof req.query.language === "string" ? req.query.language : "en",
      });
      res.json(result);
    } catch (error) {
      res.status(502).json({
        primary: null,
        candidates: [],
        providersUsed: [],
        warnings: [error instanceof Error ? error.message : "IDENTITY_ERROR"],
        mode: "REQUIRES_API_KEY",
      });
    }
  });

  app.get("/api/catalog/prices", async (req: Request, res: Response) => {
    const name = typeof req.query.name === "string" ? req.query.name : "";
    if (!name) {
      res.status(400).json({ error: "name required" });
      return;
    }
    try {
      const result = await getLivePrices({
        name,
        set: typeof req.query.set === "string" ? req.query.set : undefined,
        number: typeof req.query.number === "string" ? req.query.number : undefined,
        language: typeof req.query.language === "string" ? req.query.language : undefined,
        printing: typeof req.query.printing === "string" ? req.query.printing : undefined,
        tcgCardId: typeof req.query.tcgCardId === "string" ? req.query.tcgCardId : undefined,
        tcgdexId: typeof req.query.tcgdexId === "string" ? req.query.tcgdexId : undefined,
      });
      res.json(result);
    } catch (error) {
      res.status(502).json({
        query: { name },
        quotes: [],
        warnings: [error instanceof Error ? error.message : "PRICING_ERROR"],
        providersUsed: [],
        mode: "REQUIRES_API_KEY",
      });
    }
  });

  app.post("/api/ai/inspect", async (req: Request, res: Response) => {
    const body = req.body ?? {};
    if (!body.imageBase64 && !body.imageUrl) {
      res.status(400).json({ error: "imageBase64 or imageUrl required", disclaimer: AI_GRADE_DISCLAIMER });
      return;
    }
    // Cap payload — express already 2mb; keep screening honest
    if (typeof body.imageBase64 === "string" && body.imageBase64.length > 1_800_000) {
      res.status(413).json({ error: "Image too large for screening. Downscale first.", disclaimer: AI_GRADE_DISCLAIMER });
      return;
    }
    const result = await inspectCardAi({
      imageBase64: typeof body.imageBase64 === "string" ? body.imageBase64 : undefined,
      imageUrl: typeof body.imageUrl === "string" ? body.imageUrl : undefined,
      mimeType: typeof body.mimeType === "string" ? body.mimeType : undefined,
      cardNameHint: typeof body.cardNameHint === "string" ? body.cardNameHint : undefined,
      setHint: typeof body.setHint === "string" ? body.setHint : undefined,
    });
    res.json(result);
  });
}
