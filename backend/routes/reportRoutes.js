// routes/reportRoutes.js

const express = require('express');
const router = express.Router();

// Placeholder route for creating a report
router.post('/', (req, res) => {
  res.send({ message: 'Report route is working!' });
});

// Placeholder route for fetching reports
router.get('/', (req, res) => {
  res.send({ message: 'Fetching all reports!' });
});

module.exports = router;
