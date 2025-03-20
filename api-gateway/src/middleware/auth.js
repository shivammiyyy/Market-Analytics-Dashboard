import jwt from 'jsonwebtoken';
import createError from 'http-errors';

function authenticate(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1]; // Bearer <token>
  if (!token) {
    return next(createError(401, 'No token provided'));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(createError(401, 'Invalid token'));
    }
    req.user = decoded;
    next();
  });
}

module.exports = authenticate;