import ProcessedData from '../models/ProcessedData';
// Calculate simple moving average
function calculateMovingAverage(data, period) {
  if (data.length < period) return null;
  const sum = data.slice(-period).reduce((acc, val) => acc + val.close, 0);
  return sum / period;
}

// Calculate volatility (standard deviation)
function calculateVolatility(data, period) {
  if (data.length < period) return null;
  const closes = data.slice(-period).map(d => d.close);
  const mean = closes.reduce((acc, val) => acc + val, 0) / period;
  const variance = closes.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / period;
  return Math.sqrt(variance);
}

// Process incoming data
async function processData(data) {
  try {
    const recentData = await ProcessedData.find({ symbol: data.symbol })
      .sort({ timestamp: -1 })
      .limit(20)
      .lean(); // Faster queries with .lean()

    const allData = [...recentData, data];
    const closes = allData.map(d => d.close);

    const ma5 = calculateMovingAverage(closes, 5);
    const ma20 = calculateMovingAverage(closes, 20);
    const volatility = calculateVolatility(closes, 5);

    const alerts = [];
    if (ma5 && ma20 && ma5 > ma20 * 1.05) {
      alerts.push('Bullish crossover detected');
    }

    const processed = new ProcessedData({
      timestamp: data.timestamp,
      symbol: data.symbol,
      close: data.close,
      ma5,
      ma20,
      volatility,
      alerts,
    });

    await processed.save();
    console.log('Saved:', processed);
  } catch (error) {
    console.error('Data processing error:', error.message);
  }
}

module.exports = { processData };