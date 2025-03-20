const axios = require('axios');
const { publishToQueue } = require('../services/rabbitmqService');
const { ALPHA_VANTAGE_API_KEY } = process.env;

async function fetchMarketData(req, res) {
  try {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=${ALPHA_VANTAGE_API_KEY}`;
    const response = await axios.get(url);
    const timeSeries = response.data['Time Series (1min)'];
    if (!timeSeries) {
      throw new Error('No time series data available');
    }

    const latestTimestamp = Object.keys(timeSeries)[0];
    const latestData = timeSeries[latestTimestamp];

    const data = {
      timestamp: new Date(latestTimestamp),
      symbol: 'AAPL',
      open: parseFloat(latestData['1. open']),
      high: parseFloat(latestData['2. high']),
      low: parseFloat(latestData['3. low']),
      close: parseFloat(latestData['4. close']),
      volume: parseInt(latestData['5. volume']),
    };

    await publishToQueue(data);
    res.status(200).json({ message: 'Data fetched and published successfully', data });
  } catch (error) {
    console.error('Error fetching market data:', error.message);
    res.status(500).json({ error: 'Failed to fetch market data' });
  }
}

module.exports = { fetchMarketData };