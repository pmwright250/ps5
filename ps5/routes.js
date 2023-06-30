const express = require('express');
const axios = require('axios');
const redis = require('redis');
const { promisify } = require('util');
const { apiUrl, apiKey } = require('./config');

const router = express.Router();
const redisClient = redis.createClient();
const redisGetAsync = promisify(redisClient.get).bind(redisClient);
const redisSetexAsync = promisify(redisClient.setex).bind(redisClient);

router.post('/api/query', async (req, res) => {
  try {
    const { searchTerm } = req.body;

    // Check if data is already cached in Redis
    const cachedData = await redisGetAsync(searchTerm);
    if (cachedData) {
      console.log('Data retrieved from cache:', cachedData);
      return res.json(JSON.parse(cachedData));
    }

    // Make API call to the third-party API
    const response = await axios.get(`${apiUrl}/search`, {
      params: {
        term: searchTerm,
        apiKey,
      },
    });

    const data = response.data;

    // Cache the data in Redis for 60 seconds
    await redisSetexAsync(searchTerm, 60, JSON.stringify(data));
    console.log('Data retrieved from API:', data);

    res.json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
