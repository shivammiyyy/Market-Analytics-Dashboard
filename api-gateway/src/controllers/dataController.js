const createError = require('http-errors');
const ProcessedData = require('../../data-processing/models/ProcessedData'); // Adjust path as needed

async function getLatestData(req, res, next) {
  try {
    const latest = await ProcessedData.findOne().sort({ timestamp: -1 });
    if (!latest) {
      return next(createError(404, 'No data available'));
    }
    res.status(200).json(latest);
  } catch (error) {
    next(error);
  }
}

async function getHistoricalData(req, res, next) {
  try {
    const { symbol, start, end } = req.query;
    const query = { symbol, timestamp: { $gte: new Date(start), $lte: new Date(end) } };
    const data = await ProcessedData.find(query).sort({ timestamp: 1 });
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
}

module.exports = { getLatestData, getHistoricalData };