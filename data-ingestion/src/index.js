import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fetchAndStoreData } from './controllers/dataController.js';
import cron from 'node-cron';

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Fetch data every day at midnight
cron.schedule('0 0 * * *', fetchAndStoreData);

app.listen(process.env.PORT, () => console.log(`Data Ingestion on port ${process.env.PORT}`));