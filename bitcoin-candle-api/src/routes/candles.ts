import { Router } from "express";
import CandleController from "src/controllers/CandleController";

export const candleRouter = Router()
const candleCtrl = new CandleController()

candleRouter.get('/:quantity', async (req, res) => {
  const quantity = parseInt(req.params.quantity)
  const lastCandles = await candleCtrl.findLastCandle(quantity)
  return res.json(lastCandles)
})
