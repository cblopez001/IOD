const express = require('express');
const { getArtObjectById } = require('../controllers/artController');

const router = express.Router();

// Define the route to get art object data by ID
router.get('/art/:id', getArtObjectById);

module.exports = router;
