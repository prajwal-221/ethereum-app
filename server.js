const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('views'));

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
    const price = response.data.ethereum.usd;

    res.send(`
      <html>
        <head>
          <title>Ethereum Info</title>
        </head>
        <body style="font-family: Arial; text-align: center;">
          <h1>🌐 Ethereum Info</h1>
          <p>Current Ethereum Price (USD): <strong>$${price}</strong></p>
          <p>This Node.js app is deployed on Azure App Service.</p>
        </body>
      </html>
    `);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to fetch Ethereum price.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


//test file for prod
//Hello i am prajwal 
// This is a node js app that fetches the current price of Ethereum in USD from the CoinGecko API and serves it on a simple HTML page. The app is designed to be deployed on Azure App Service.