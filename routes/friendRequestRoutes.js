const express = require('express');
const router = express.Router();
const { sendFriendRequest } = require('../controllers/friendRequestController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/friend-requests', authMiddleware, sendFriendRequest);

module.exports = router;
