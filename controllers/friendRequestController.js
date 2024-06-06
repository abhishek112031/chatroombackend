const { FriendRequest } = require('../models');

exports.sendFriendRequest = async (req, res) => {
  try {
    const { receiverId } = req.body;
    const friendRequest = await FriendRequest.create({ senderId: req.user.id, receiverId });
    res.status(201).json(friendRequest);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
