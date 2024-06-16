const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import CORS package

const app = express();
const port = 6000;

// Middleware to parse JSON and urlencoded body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS middleware
app.use(cors());

// Import route files
const addRoute = require('./routes/add');
const subtractRoute = require('./routes/subtract');
const multiplyRoute = require('./routes/multiply');
const divideRoute = require('./routes/divide');

// Use routes
app.use('/add', addRoute);
app.use('/subtract', subtractRoute);
app.use('/multiply', multiplyRoute);
app.use('/divide', divideRoute);

// Serve static files (like calculator.html)
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});





