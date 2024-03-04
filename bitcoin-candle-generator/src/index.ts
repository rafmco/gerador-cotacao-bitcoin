require('dotenv').config();

import axios from "axios";
import Period from "./enums/Period";
import Candle from "./models/Candle";
import { createMessageChanel } from "./messages/messageChanel";

const readMarketPrice = async (): Promise<number> => {
  const result = await axios.get(process.env.PRICES_API)
  const data = result.data
  const price = data.bitcoin.usd
  return price
}

const generateCandles = async () => {
  // Verificar conexão com RabbitMQ
  const messageChannel = await createMessageChanel()

  if (messageChannel) {
    while(true) {
      const loopCount = Period.FIVE_MINUTES / Period.THIRTY_SECONDS
      const candle = new Candle('BTC')

      console.log('----------------------------------------')
      console.log('Generating Candle')

      for(let i = 0; i < loopCount; i++) {
        const price = await readMarketPrice()
        candle.addValue(price)
        console.log(`Price #${i + 1} of ${loopCount}`)

        await new Promise(r => setTimeout(r, Period.THIRTY_SECONDS))
      }

      candle.closeCandle()
      console.log('Candle close')
      const candleObj = candle.toSimpleObject()
      console.log(candleObj)
      const candleJson = JSON.stringify(candleObj)
      // Enviar para fila
      messageChannel.sendToQueue(process.env.QUEUE_NAME, Buffer.from(candleJson))
      console.log('Candle enqueued')
    }
  }
}

generateCandles()