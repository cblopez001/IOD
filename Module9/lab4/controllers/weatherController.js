const axios = require('axios');

// Function to get weather data by city
const getWeatherByCity = async (req, res) => {
  try {
    const { city } = req.params; // Get city from URL parameters
    const { units } = req.query; // Get units from query parameters (optional)
    
    const apiKey = process.env.OPENWEATHERMAP_API_KEY; // Get API key from environment variables
    const weatherResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: city,
        appid: apiKey,
        units: units || 'metric' // Default to metric (Celsius)
      }
    });

    res.json(weatherResponse.data); // Send the API response to the client
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle errors
  }
};

module.exports = {
  getWeatherByCity,
};
