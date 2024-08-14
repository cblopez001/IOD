const express = require('express');
const dotenv = require('dotenv');
const artRoutes = require('./routes/artRoutes');

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Integrate art routes into the application
app.use('/api', artRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
