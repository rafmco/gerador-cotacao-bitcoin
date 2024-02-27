import { model, Document, Schema } from "mongoose";

// Definir Schema de Dados (colunas)
export interface Candle extends Document {
  currency: string
  finalDateTime: Date
  open: number
  close: number
  low: number
  high: number
  color: string
}

// Criar coleção 'Candle'
const schema = new Schema<Candle> ({
  currency: { type: String, required: true },
  finalDateTime: { type: Date, required: true },
  open: { type: Number, required: true },
  close: { type: Number, required: true },
  low: { type: Number, required: true },
  high: { type: Number, required: true },
  color: { type: String, required: true }
})

// Modelo
export const CandleModel = model<Candle>('Candle', schema)