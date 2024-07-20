// const mongoose = require('mongoose');
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, sparse: true },
  password: { type: String },
  walletAddress: { type: String, unique: true, sparse: true },
});

const AuthUser = mongoose.model('AuthUser', userSchema);

// module.exports = { User };
export default AuthUser;
