import amqp from 'amqplib';
const { RABBITMQ_URL } = process.env;

let channel = null;

async function connectRabbitMQ() {
  try {
    const connection = await amqp.connect(RABBITMQ_URL);
    channel = await connection.createChannel();
    const queue = 'market-data-queue';
    await channel.assertQueue(queue, { durable: true });
    console.log('Connected to RabbitMQ');
  } catch (error) {
    console.error('RabbitMQ connection failed:', error.message);
    process.exit(1);
  }
}

async function consumeFromQueue(processMessage) {
  try {
    if (!channel) throw new Error('RabbitMQ channel not initialized');
    const queue = 'market-data-queue';
    channel.consume(queue, async (msg) => {
      if (msg !== null) {
        const data = JSON.parse(msg.content.toString());
        console.log('Received:', data);
        await processMessage(data);
        channel.ack(msg);
      }
    }, { noAck: false });
  } catch (error) {
    console.error('Queue consumption error:', error.message);
  }
}

module.exports = { connectRabbitMQ, consumeFromQueue };