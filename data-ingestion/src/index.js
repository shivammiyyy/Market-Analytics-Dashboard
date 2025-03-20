const express = require('express');
const { connectRabbitMQ } = require('./services/rabbitmqService');
const { fetchMarketData } = require('./controllers/dataController');
require('./config/env'); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(express.json());

// Routes
app.get('/fetch-data', fetchMarketData);

// Start the server and connect to RabbitMQ
async function startServer() {
  try {
    await connectRabbitMQ();
    app.listen(PORT, () => {
      console.log(`Data Ingestion Service running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
}

startServer();

// Handle uncaught exceptions and rejections
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});