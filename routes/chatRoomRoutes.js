const express = require('express');
const router = express.Router();
const { createChatRoom, joinChatRoom } = require('../controllers/chatRoomController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/chatrooms', authMiddleware, createChatRoom);
router.post('/joinroom', authMiddleware, joinChatRoom);

module.exports = router;
