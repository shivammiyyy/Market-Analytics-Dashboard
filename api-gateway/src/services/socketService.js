import { Server } from 'socket.io';
import jwt from 'jsonwebtoken';
import ProcessedData from '../../data-processing/models/ProcessedData';

function setupSocketIO(server) {
  const io = new Server(server, {
    cors: { origin: '*' },
  });

  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) {
      return next(new Error('Authentication error: No token provided'));
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return next(new Error('Authentication error: Invalid token'));
      }
      socket.user = decoded;
      next();
    });
  });

  io.on('connection', (socket) => {
    console.log('Client connected:', socket.user.id);

    const changeStream = ProcessedData.watch();
    changeStream.on('change', (change) => {
      if (change.operationType === 'insert') {
        io.emit('new_data', change.fullDocument);
      }
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.user.id);
    });
  });

  return io;
}

module.exports = { setupSocketIO };