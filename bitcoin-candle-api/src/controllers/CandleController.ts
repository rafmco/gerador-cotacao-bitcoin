import { Candle, CandleModel } from "src/models/CandleModel";

// Operações do Banco
export default class CandleController {

  // Gravar no Banco
  async save(candle: Candle): Promise<Candle> {
    const newCandle = await CandleModel.create(candle)
    return newCandle
  }

  // Recuperar n últimas Candles inseridas
  async findLastCandle(quantity: number): Promise<Candle[]> {
    const n = quantity > 0 ? quantity : 10
    const lastCandles: Candle[] =
      await CandleModel
        .find()
        .sort({ _id: -1 }) // Últimos primeiro
        .limit(n)

    return lastCandles
  }
}