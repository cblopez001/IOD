const axios = require('axios');

// Function to get art object data by ID
const getArtObjectById = async (req, res) => {
  try {
    const { id } = req.params; // Get the object ID from URL parameters
    const artResponse = await axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);

    if (artResponse.data.message) {
      return res.status(404).json({ error: 'Art object not found' });
    }

    res.json(artResponse.data); // Send the API response to the client
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle errors
  }
};

module.exports = {
  getArtObjectById,
};
