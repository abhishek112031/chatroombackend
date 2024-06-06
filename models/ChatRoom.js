module.exports = (sequelize, DataTypes) => {
    const ChatRoom = sequelize.define('ChatRoom', {
      roomId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      roomName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdBy: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  
      userIds: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: [],
      },
    });
  
    return ChatRoom;
  };
  