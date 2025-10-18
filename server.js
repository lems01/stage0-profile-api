// server.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;
const CAT_FACT_URL = process.env.CAT_FACT_URL || 'https://catfact.ninja/fact';

app.use(cors());

// GET /me endpoint
app.get('/me', async (req, res) => {
  try {
    const response = await axios.get(CAT_FACT_URL, { timeout: 5000 });
    const catFact = response.data.fact;

    const profileData = {
      status: "success",
      user: {
        email: "peterlemule@gmail.com",
        name: "Peter Lemule",
        stack: "Node.js/Express"
      },
      timestamp: new Date().toISOString(),
      fact: catFact
    };

    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json(profileData);

  } catch (error) {
    console.error("Error fetching cat fact:", error.message);

    // Handle API failure gracefully
    const fallbackData = {
      status: "success",
      user: {
        email: "peterlemule@gmail.com",
        name: "Peter Lemule",
        stack: "Node.js/Express"
      },
      timestamp: new Date().toISOString(),
      fact: "Could not fetch a cat fact at this time. Try again later."
    };

    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json(fallbackData);
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

