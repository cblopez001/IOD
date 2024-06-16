const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const { num1, num2 } = req.query;
    const result = parseFloat(num1) - parseFloat(num2);
    res.json({ result });
});

module.exports = router;

