const { ChatRoom, User } = require('../models');
const bcrypt = require('bcryptjs');

exports.createChatRoom = async (req, res) => {
  if (!req.user.isPrime) return res.status(403).json({ message: 'Only prime members can create chat rooms' });

  try {
    const { roomId, roomName, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userIds=[req.user.id];
    const chatRoom = await ChatRoom.create({ roomId, roomName, createdBy: req.user.id, password: hashedPassword,userIds:userIds});
    res.status(201).json(chatRoom);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.joinChatRoom = async (req, res) => {
  const { roomId, password } = req.body;

  try {
    const user=await User.findOne({where:{id:req.user.id}});
    if (user.availCoins < 150 && !user.isPrime) {
      return res.status(404).json({ message: 'You can not join the room, update to premium or add coins to join the room' });
    }
    const chatRoom = await ChatRoom.findOne({ where: { roomId } });

    if (!chatRoom) return res.status(404).json({ message: 'Chat room not found' });

    if(chatRoom.userIds.length==6) return res.status(404).json({ message: 'Member are full you can\'t enter' });

    const validPassword = await bcrypt.compare(password, chatRoom.password);

    if (!validPassword) return res.status(400).json({ message: 'Invalid password' });

    
    if (chatRoom.userIds.includes(req.user.id)) {
      return res.status(400).json({ message: 'You are already a member of this chat room' });
    }

 
       chatRoom.userIds = [...chatRoom.userIds, req.user.id];

       // Save the updated chat room
       await chatRoom.save();

       user.joinedRoom=true;
       await user.save();


    res.json({ message: 'Joined the room',user:user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


