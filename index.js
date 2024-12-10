const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Base URL of the exchange rate API
const API_BASE_URL = 'https://v6.exchangerate-api.com/v6';

// Currency conversion endpoint
app.get('/convert', async (req, res) => {
    const { from, to, amount } = req.query;

    // Validation
    if (!from || !to || !amount) {
        return res.status(400).json({ error: 'Please provide from, to, and amount parameters.' });
    }

    try {
        // API call to get exchange rates
        const response = await axios.get(`${API_BASE_URL}/${process.env.API_KEY}/latest/${from.toUpperCase()}`);
        const rates = response.data.conversion_rates;

        if (!rates[to.toUpperCase()]) {
            return res.status(400).json({ error: `Conversion rate for ${to} not available.` });
        }

        // Convert amount
        const rate = rates[to.toUpperCase()];
        const convertedAmount = (amount * rate).toFixed(2);

        // Response
        res.json({
            from: from.toUpperCase(),
            to: to.toUpperCase(),
            amount: Number(amount),
            convertedAmount: Number(convertedAmount),
            rate,
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch exchange rates. Please try again later.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
