import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // Added import
import { ClerkExpressWithAuth } from '@clerk/clerk-sdk-node';
import dashBoardRouter from './routes/dashBoardRouter.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors({
    origin: process.env.FRONT_END_KEY, // e.g., 'http://localhost:3000'
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Fixed typo
}));

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const clerkMiddleware = ClerkExpressWithAuth({
    apiKey: process.env.CLERK_SECRET_KEY,
});

app.use('/user', clerkMiddleware, dashBoardRouter);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});