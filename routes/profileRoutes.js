const express = require('express');
const router = express.Router();
const { getProfile } = require('../controllers/profileController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/profile/:userId', authMiddleware, getProfile);

module.exports = router;
