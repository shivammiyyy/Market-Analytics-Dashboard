import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
  symbol: String,
  data: [{ date: String, open: String, high: String, low: String, close: String, volume: String }],
});

export default mongoose.model('Stock', stockSchema);