import "dotenv/config";
import express from "express";
import cors from "cors";
import { databaseHealth } from "@vca/db";
import { VCA_BRAND } from "@vca/config";
import { registerVerificationRoutes } from "./verificationRoutes.js";
import { registerProductionRoutes } from "./productionRoutes.js";
import { registerVscanMarketRoutes } from "./vscanMarketRoutes.js";
import { registerCatalogRoutes } from "./catalogRoutes.js";
import { registerCardIntelligenceRoutes } from "./cardIntelligenceRoutes.js";

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: "2mb" }));

app.get("/health", async (_req, res) => {
  const db = await databaseHealth();
  res.status(db.ok ? 200 : 503).json({
    service: VCA_BRAND.short,
    ok: db.ok,
    database: db,
  });
});

registerProductionRoutes(app);
registerVerificationRoutes(app);
registerVscanMarketRoutes(app);
registerCatalogRoutes(app);
registerCardIntelligenceRoutes(app);

app.listen(port, () => {
  console.log(`[${VCA_BRAND.short} API] listening on :${port}`);
});
