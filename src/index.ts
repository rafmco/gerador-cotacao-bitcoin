import { config } from "dotenv";
import axios from "axios";
import Period from "./enums/Period";
import Candle from "./models/Candle";

// Config .ENV
config()

const readMarketPrice = async (): Promise<number> => {
  const result = await axios.get(process.env.PRICES_API)
  const data = result.data
  const price = data.bitcoin.usd
  return price
}

const generateCandles = async () => {

  while(true) {
    const loopCount = Period.ONE_MINUTE / Period.TEN_SECONDS
    const candle = new Candle('BTC')

    console.log('----------------------------------------')
    console.log('Generating Candle')

    for(let i = 0; i < loopCount; i++) {
      const price = await readMarketPrice()
      candle.addValue(price)
      console.log(`Price #${i + 1} of ${loopCount}`)

      await new Promise(r => setTimeout(r, Period.TEN_SECONDS))
    }

    candle.closeCandle()
    console.log('Candle close')
    const candleObj = candle.toSimpleObject()
    console.log(candleObj)
  }
}

generateCandles()