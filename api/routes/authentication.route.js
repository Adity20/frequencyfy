import express from 'express';
// const { register, login, cryptoLogin } = require('../controllers/authController');
import { register, login, cryptoLogin } from '../controllers/authentication.controller.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/crypto-login', cryptoLogin);

export default router;
