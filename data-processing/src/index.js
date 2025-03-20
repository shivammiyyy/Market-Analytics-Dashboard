import express from 'express';
import { connectRabbitMQ, consumeFromQueue } from './services/rabbitmqService';
import connectMongoDB from './services/mongoService';
import { processData } from './controllers/dataProcessor';
require('./config/env');

const app = express();
const PORT = process.env.PORT || 3002;

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

async function startServer() {
  try {
    await connectMongoDB();
    await connectRabbitMQ();
    await consumeFromQueue(processData);
    app.listen(PORT, () => {
      console.log(`Data Processing Service running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Server startup failed:', error.message);
    process.exit(1);
  }
}

startServer();

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection:', promise, 'reason:', reason);
  process.exit(1);
});