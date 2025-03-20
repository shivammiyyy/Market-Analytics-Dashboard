const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const User = require('../models/User');

async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) {
      return next(createError(401, 'Invalid credentials'));
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
}

module.exports = { login };