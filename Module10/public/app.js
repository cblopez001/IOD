// public/app.js

const greetBtn = document.getElementById('greetBtn');
const message = document.getElementById('message');

// Add a click event listener to the button
greetBtn.addEventListener('click', () => {
  message.textContent = 'Hello from the client-side JavaScript!';
});
