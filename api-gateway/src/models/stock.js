import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
    symbol: { type: String, required: true, unique: true },
    data: [{
        date: { type: String, required: true },
        open: { type: String, required: true },
        high: { type: String, required: true },
        low: { type: String, required: true },
        close: { type: String, required: true },
        volume: { type: String, required: true }
    }]
});

export default mongoose.model('Stock', stockSchema);