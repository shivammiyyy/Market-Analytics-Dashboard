import Stock from '../models/stock.js';

export const dataControl = async (req, res) => {
    try {
        const { id } = req.params;
        const stock = await Stock.findOne({ symbol: id }, 'data'); // Select only 'data' field
        if (!stock) {
            return res.status(404).json({ message: 'Stock not found' });
        }

        const dates = stock.data.map(item => item.date);
        const opens = stock.data.map(item => parseFloat(item.open));
        const closes = stock.data.map(item => parseFloat(item.close));
        const highs = stock.data.map(item => parseFloat(item.high));
        const lows = stock.data.map(item => parseFloat(item.low));

        const responseData = {
            dates,
            opens,
            closes,
            highs,
            lows
        };
        res.json(responseData);
    } catch (error) {
        console.error('Error fetching stock data:', error);
        res.status(500).json({ message: 'Server error' });
    }
};