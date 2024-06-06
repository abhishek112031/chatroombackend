const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./User')(sequelize, Sequelize);
const ChatRoom = require('./ChatRoom')(sequelize, Sequelize);
const Message = require('./Message')(sequelize, Sequelize);
const FriendRequest = require('./FriendRequest')(sequelize, Sequelize);

User.hasMany(ChatRoom);
ChatRoom.belongsTo(User);

ChatRoom.hasMany(Message);
Message.belongsTo(ChatRoom);

User.hasMany(FriendRequest, { as: 'SentRequests', foreignKey: 'senderId' });
User.hasMany(FriendRequest, { as: 'ReceivedRequests', foreignKey: 'receiverId' });

sequelize.sync({ alter: true });

module.exports = {
  User,
  ChatRoom,
  Message,
  FriendRequest,
};
