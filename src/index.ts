import { config } from "dotenv";
import axios from "axios";

// Config .ENV
config()

const readMarketPrice = async (): Promise<number> => {
  const result = await axios.get(process.env.PRICES_API)
  const data = result.data
  const price = data.bitcoin.usd
  return price
}

readMarketPrice()