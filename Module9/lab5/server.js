const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { handleConnection } = require('./controllers/chatController');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// Socket.io connection handling
io.on('connection', handleConnection);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
