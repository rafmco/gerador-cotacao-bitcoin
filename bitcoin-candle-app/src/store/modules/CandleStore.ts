import Candle from "@/models/Candle";
import axios from "axios";
import { Action, Module, Mutation, VuexModule } from "vuex-module-decorators";

const http = axios.create({
  baseURL: process.env.VUE_APP_CANDLES_API
})

@Module({ name: 'CandleStore' })
export default class CandleStore extends VuexModule {
  private _candles: Candle[] = []

  // Lista de Candles no formato para trabalhar com o gráfico
  get candles() {
    return this._candles.length > 0
      ? this._candles.map(c => {
        return {
          x: c.finalDateTime.toLocaleTimeString(),
          y: [c.open, c.high, c.low, c.close]
        }
      })
      : []
  }

  @Action
  async loadInitialCandles() {
    const result = await http.get(`${process.env.VUE_APP_CANDLES_API_ENDPOINT}/50`)
    const candlesObj = result.data
    // Mapear para objetos de Candle
    const candles: Candle[] = candlesObj.map((c: object) => new Candle(c))

    // Inverter Array
    this.context.commit('_initializeCandles', candles.reverse())
  }

  @Action
  addCandle(candle: Candle) {
    this.context.commit('_appendNewCandle', candle)
  }

  @Mutation
  private _initializeCandles(candles: Candle[]) {
    this._candles = candles
  }

  @Mutation
  private _appendNewCandle(candle: Candle) {
    this._candles.push(candle)
  }
}