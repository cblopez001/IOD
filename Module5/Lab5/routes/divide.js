// routes/divide.js
const express = require('express');
const router = express.Router();
const mathController = require('../controllers/mathController');

router.get('/', mathController.divide);

module.exports = router;
