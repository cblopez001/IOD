const express = require('express');
const app = express();
const port = 3002;

// Middleware to parse JSON bodies
app.use(express.json());

// Route for addition
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Both num1 and num2 are required' });
    }
    const result = parseFloat(num1) + parseFloat(num2);
    res.json({ result });
});

// Route for subtraction
app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Both num1 and num2 are required' });
    }
    const result = parseFloat(num1) - parseFloat(num2);
    res.json({ result });
});

// Route for multiplication
app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Both num1 and num2 are required' });
    }
    const result = parseFloat(num1) * parseFloat(num2);
    res.json({ result });
});

// Route for division
app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Both num1 and num2 are required' });
    }
    const result = parseFloat(num1) / parseFloat(num2);
    if (!isFinite(result)) {
        return res.status(400).json({ error: 'Division by zero or invalid input' });
    }
    res.json({ result });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Server listening
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});


