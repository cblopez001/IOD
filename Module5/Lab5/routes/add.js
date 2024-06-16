// routes/add.js
const express = require('express');
const router = express.Router();
const mathController = require('../controllers/mathController');

router.get('/', mathController.add);

module.exports = router;
