import axios from 'axios';
import Stock from '../models/stock.js';

const companies = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'NVDA', 'BRK.B', 'META', 'TSLA', 'UNH', 'JNJ', 'JPM', 'V', 'PG', 'XOM', 'MA', 'HD', 'CVX', 'ABBV', 'PEP'];

export const fetchAndStoreData = async () => {
  try {
    for (const symbol of companies) {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.ALPHA_VANTAGE_API_KEY}`
      );
      const timeSeries = response.data['Time Series (Daily)'];
      const data = Object.entries(timeSeries).map(([date, values]) => ({
        date,
        open: values['1. open'],
        high: values['2. high'],
        low: values['3. low'],
        close: values['4. close'],
        volume: values['5. volume'],
      }));

      await Stock.updateOne(
        { symbol },
        { $set: { symbol, data } },
        { upsert: true }
      );
      console.log(`Stored data for ${symbol}`);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Seed historical data once
fetchAndStoreData();