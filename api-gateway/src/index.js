const express = require('express');
const http = require('http');
const { connectMongoDB } = require('./services/mongoService');
const { setupSocketIO } = require('./services/socketService');
const authenticate = require('./middleware/auth');
const { login } = require('./controllers/authController');
const { getLatestData, getHistoricalData } = require('./controllers/dataController');
require('./config/env');

const app = express();
const server = http.createServer(app);
const io = setupSocketIO(server);
const PORT = process.env.PORT || 3003;

app.use(express.json());

// Public routes
app.post('/api/auth/login', login);

// Protected routes
app.get('/api/data/latest', authenticate, getLatestData);
app.get('/api/data/history', authenticate, getHistoricalData);

// Error handling
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: { message: err.message },
  });
});

async function startServer() {
  try {
    await connectMongoDB();
    server.listen(PORT, () => {
      console.log(`API Gateway running on port ${PORT}`);
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