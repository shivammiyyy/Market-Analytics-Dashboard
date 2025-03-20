import amqp from 'amqplib';

const { RABBITMQ_URL } = process.env.RABBITMQ_URL;

let channel = null;

async function connectRabbitMQ() {
  try {
    const connection = await amqp.connect(RABBITMQ_URL);
    channel = await connection.createChannel();
    const queue = 'market-data-queue';
    await channel.assertQueue(queue, { durable: true });
    console.log('Connected to RabbitMQ');
  } catch (error) {
    console.error('Failed to connect to RabbitMQ:', error.message);
    process.exit(1);
  }
}

async function publishToQueue(data) {
  try {
    if (!channel) {
      throw new Error('RabbitMQ channel not initialized');
    }
    const queue = 'market-data-queue';
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)), { persistent: true });
    console.log('Published to queue:', data);
  } catch (error) {
    console.error('Error publishing to RabbitMQ:', error.message);
  }
}

module.exports = { connectRabbitMQ, publishToQueue };