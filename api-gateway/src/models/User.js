import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // In production, hash this
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);