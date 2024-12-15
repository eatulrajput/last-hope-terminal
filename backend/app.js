// Importing dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const broadcastRoutes = require('./routes/broadcastRoutes');
const reportRoutes = require('./routes/reportRoutes');

// Database connection
const dbConnect = require('./dbConnect');  // Adjust path if needed

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
dbConnect();  // Connect to MongoDB

// Routes
app.use('/auth', authRoutes);
app.use('/broadcasts', broadcastRoutes);
app.use('/reports', reportRoutes);

module.exports = app;
