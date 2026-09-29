import type { Express, Request, Response } from 'express';
import { getVscanMarketData } from '../services/vscanMarketService';

export function registerVscanMarketRoutes(app: Express): void {
  app.get('/api/vscan/market', async (req: Request, res: Response) => {
    const name = String(req.query.name || '').trim();
    const set = req.query.set ? String(req.query.set).trim() : undefined;
    const number = req.query.number ? String(req.query.number).trim() : undefined;

    if (!name) {
      res.status(400).json({ success: false, error: 'CARD_NAME_REQUIRED' });
      return;
    }

    try {
      const result = await getVscanMarketData(name, set, number);
      res.json({ success: true, data: result });
    } catch (error) {
      console.error('VScan market error:', error);
      res.status(503).json({ success: false, error: 'MARKET_PROVIDER_UNAVAILABLE' });
    }
  });
}
