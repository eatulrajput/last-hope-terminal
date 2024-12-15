// server.js

const app = require('./app');
const http = require('http');
const socketIo = require('socket.io');

// Server setup
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

// WebSocket setup
const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
});

app.set('io', io); // Attach WebSocket instance to app for broadcasting

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
