const express = require('express');
const dotenv = require('dotenv');
const weatherRoutes = require('./routes/weatherRoutes');

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Integrate weather routes into the application
app.use('/api', weatherRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
