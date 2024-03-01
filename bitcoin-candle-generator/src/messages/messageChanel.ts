import { Channel, connect } from 'amqplib';

export const createMessageChanel = async (): Promise<Channel> => {
  try {
    const connection = await connect(process.env.AMQP_SERVER)
    const channel = await connection.createChannel()
    await channel.assertQueue(process.env.QUEUE_NAME)
    console.log('Connected to RabbitMQ')

    return channel
  } catch (error) {
    console.log('Error while trying to connect to RabbitMQ')
    console.log(error)
    return null
  }
}