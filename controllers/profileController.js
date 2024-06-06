const { User } = require('../models');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.userId }, attributes: { exclude: ['password'] } });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
