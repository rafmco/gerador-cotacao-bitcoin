export default class Candle {
  currency = ''
  finalDateTime = new Date()
  open = 0
  close = 0
  high = 0
  low = 0
  color = ''

  constructor(candleObj: object) {
    Object.assign(this, candleObj)
    this.finalDateTime = new Date(this.finalDateTime)
  }
}