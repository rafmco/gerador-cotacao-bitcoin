import { Channel, connect } from "amqplib";
import { config } from "dotenv";
import { Server } from "socket.io";
import * as http from "http";
import CandleController from "src/controllers/CandleController";
import { Candle } from "src/models/CandleModel";

config();

// Abrir conexão com fila do RabbitMQ, consumir Mensagens, gravar no banco de dados e enviar a mensagem para o frontend
export default class CandleMessageChannel {

  private _channel: Channel
  private _candleCtrl: CandleController
  private _io: Server

  constructor(server: http.Server) {
    this._candleCtrl = new CandleController()
    this._io = new Server(server, {
      cors: {
        origin: process.env.SOCKET_CLIENT_SERVER,
        methods: ["GET", "POST"]
      }
    })
    this._io.on('connection', () => console.log('Web socket connnection created'))

    this._createMessageChannel()
  }

  private async _createMessageChannel() {
    try {
      const connection = await connect(process.env.AMQP_SERVER)
      this._channel = await connection.createChannel()
      this._channel.assertQueue(process.env.QUEUE_NAME)
    } catch (error) {
      console.log('Connection to RabbitMQ failed')
      console.log(error)
    }
  }

  // Criar listener para receber mensagem no MessageChannel
  consumeMessages() {
    this._channel.consume(process.env.QUEUE_NAME, async msg => {
      // Mensagem em formato String (JSON)
      const candleObj = JSON.parse(msg.content.toString())
      console.log('Message received')
      console.log(candleObj)

      // Avisar RabbitMQ que foi consumida a fila (acknowledge)
      this._channel.ack(msg)

      // Converter em Candle
      const candle: Candle = candleObj
      await this._candleCtrl.save(candle)
      console.log('Candle saved to database')

      // Enviar para o frontend
      this._io.emit(process.env.SOCKET_EVENT_NAME, candle)
      console.log('New Candle emmited by Web Socket')
    })

    console.log('Candle consumer started')
  }

}