const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  try {
    const user = new User({ username, password: hashed });
    await user.save();
    res.status(201).json({ msg: 'User registered!' });
  } catch(e) {
    res.status(400).json({ error: 'Registration failed.' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ error: 'Invalid credentials.' });
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ error: 'Invalid credentials.' });
  res.json({ msg: 'Login successful!', userId: user._id });
});

module.exports = router;