// const bcrypt = require('bcrypt');
import bcrypt from 'bcrypt';
// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken';
// const { User } = require('../models/userModel'); // Assuming you have a User model
import AuthUser from '../models/authuser.model.js';

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET;

// Traditional Authentication
export const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new AuthUser({ email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await AuthUser.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }
    const isPasswordValid = bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: 'Invalid password' });
    }
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Crypto Authentication
export const cryptoLogin = async (req, res) => {
  const { walletAddress } = req.body;
  try {
    let user = await AuthUser.findOne({ walletAddress });
    if (!user) {
      user = new AuthUser({ walletAddress });
      await user.save();
    }
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

