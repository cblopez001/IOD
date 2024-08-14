const User = require('../models/user');
const Message = require('../models/message');

let users = [];
let messages = [];

function handleConnection(socket) {
    console.log('A user connected');

    // Notify others when a user connects
    io.emit('chat message', 'A user has connected');
    
    // Notify others when a user disconnects
    socket.on('disconnect', () => {
        console.log('A user disconnected');
        io.emit('chat message', 'A user has disconnected');
        users = users.filter(user => user.socketId !== socket.id);
        io.emit('update users', getUsers());
    });

    // Handle incoming chat messages
    socket.on('chat message', (msg) => {
        const user = users.find(u => u.socketId === socket.id);
        const message = new Message(user ? user.nickname : 'Anonymous', msg);
        messages.push(message);
        socket.broadcast.emit('chat message', `${message.sender}: ${message.content}`);
    });

    // Handle nickname change
    socket.on('set nickname', (nickname) => {
        const user = new User(nickname);
        user.socketId = socket.id;
        users.push(user);
        io.emit('update users', getUsers());
    });

    // Handle typing notification
    socket.on('typing', () => {
        const user = users.find(u => u.socketId === socket.id);
        io.emit('typing', user ? user.nickname : 'Anonymous');
    });

    // Handle stopping typing notification
    socket.on('stop typing', () => {
        io.emit('stop typing');
    });
}

function getUsers() {
    return users.map(user => user.nickname);
}

module.exports = { handleConnection };
