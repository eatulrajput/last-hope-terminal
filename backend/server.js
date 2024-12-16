require('dotenv').config();
const express = require('express');
const connectDB = require('./dbConfig');

const app = express();

// Connect to MongoDB
connectDB();

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
