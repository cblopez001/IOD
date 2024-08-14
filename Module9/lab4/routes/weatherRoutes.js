const express = require('express');
const { getWeatherByCity } = require('../controllers/weatherController');

const router = express.Router();

// Define the route to get weather data by city
router.get('/weather/:city', getWeatherByCity);

module.exports = router;
