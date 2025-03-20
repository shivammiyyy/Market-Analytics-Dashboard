import mongoose from 'mongoose'

const processedDataSchema = new mongoose.Schema({
  timestamp: { type: Date, required: true },
  symbol: { type: String, required: true },
  close: { type: Number, required: true },
  ma5: { type: Number },
  ma20: { type: Number },
  volatility: { type: Number },
  alerts: [{ type: String }],
}, { timestamps: true });

// Add indexes for performance
processedDataSchema.index({ symbol: 1, timestamp: -1 });

module.exports = mongoose.model('ProcessedData', processedDataSchema);