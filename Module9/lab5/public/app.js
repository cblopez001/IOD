const socket = io();
const messages = document.getElementById('messages');
const input = document.getElementById('m');
const nicknameInput = document.getElementById('nickname');
const userList = document.getElementById('user-list');
const typingDiv = document.getElementById('typing');

let typingTimeout;

input.addEventListener('input', () => {
    socket.emit('typing');
    clearTimeout(typingTimeout);
    typingTimeout = setTimeout(() => {
        socket.emit('stop typing');
    }, 2000);
});

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        const msg = input.value;
        if (msg) {
            socket.emit('chat message', msg);
            input.value = '';
        }
    }
});

nicknameInput.addEventListener('change', () => {
    const nickname = nicknameInput.value;
    if (nickname) {
        socket.emit('set nickname', nickname);
    }
});

socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = msg;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});

socket.on('typing', (user) => {
    typingDiv.textContent = `${user} is typing...`;
});

socket.on('stop typing', () => {
    typingDiv.textContent = '';
});

socket.on('update users', (users) => {
    userList.innerHTML = '';
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user;
        userList.appendChild(li);
    });
});
