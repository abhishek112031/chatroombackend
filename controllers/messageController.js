


const { Message } = require('../models');
const {ChatRoom}=require('../models')

exports.createMessage = async (req, res) => {
  const { content, ChatRoomId } = req.body;

  const chatroomExist=await ChatRoom.findOne({where:{
    roomId:ChatRoomId
  }})

  try {

    if(!chatroomExist) return res.status(404).json({message:'chatroom doesnot exist!'})

    
    const message = await Message.create({
      content,
      senderId: req.user.id,
      ChatRoomId,
    });

    const allMessages=await Message.findAll({where: {chatRoomId: ChatRoomId}})

    res.status(201).json({message:message, allMessages:allMessages});
  } catch (error) {
    res.status(500).json({ error: 'Error creating message' });
  }
};
