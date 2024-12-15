// routes/broadcastRoutes.js

const express = require('express');
const router = express.Router();

// Placeholder route for adding a broadcast
router.post('/', (req, res) => {
  res.send({ message: 'Broadcast route is working!' });
});

// Placeholder route for fetching broadcasts
router.get('/', (req, res) => {
  res.send({ message: 'Fetching all broadcasts!' });
});

module.exports = router;
