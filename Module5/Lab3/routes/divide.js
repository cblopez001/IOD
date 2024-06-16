const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const { num1, num2 } = req.query;
    const divisor = parseFloat(num2);

    if (divisor === 0) {
        res.status(400).json({ error: "Division by zero is not allowed" });
    } else {
        const result = parseFloat(num1) / divisor;
        res.json({ result });
    }
});

module.exports = router;

