// authRoutes.js

const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();
const JWT_SECRET = 'your_jwt_secret';

// User Registration
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, address, medicalNeeds } = req.body;
    const user = new User({ name, email, password, address, medicalNeeds });
    await user.save();
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to register user' });
  }
});

// User Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) return res.status(401).send({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.send({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).send({ error: 'Login failed' });
  }
});

module.exports = router;
