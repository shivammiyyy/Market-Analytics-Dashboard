import dotenv from 'dotenv';

dotenv.config();

export default {
  mongoUrl: process.env.MONGO_URL ,
  alphaVantageKey: process.env.ALPHA_VANTAGE_KEY,
  port: process.env.PORT || 5001,
};