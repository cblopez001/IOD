const Calculator = require('../lib/calculator');

const calculator = new Calculator();

exports.add = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const result = calculator.add(num1, num2);
    res.json({ result });
};

exports.subtract = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const result = calculator.subtract(num1, num2);
    res.json({ result });
};

exports.multiply = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const result = calculator.multiply(num1, num2);
    res.json({ result });
};

exports.divide = (req, res) => {
    try {
        const num1 = parseFloat(req.query.num1);
        const num2 = parseFloat(req.query.num2);
        const result = calculator.divide(num1, num2);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
