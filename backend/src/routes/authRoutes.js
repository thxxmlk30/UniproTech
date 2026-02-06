// TODO: Auth Routes
// Developer: [ASSIGNED_DEV]
// Routes: POST /login, POST /register (admin only), POST /logout
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/login', authController.login);
router.post('/register', authMiddleware, authController.register);
router.post('/logout', authController.logout);
router.get('/me', authMiddleware, authController.getMe);

module.exports = router;

