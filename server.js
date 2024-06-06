const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const sequelize = require('./config/database');
require('dotenv').config();
const { Message } = require('./models');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api', require('./routes/chatRoomRoutes'));
app.use('/api', require('./routes/messageRoutes'));
app.use('/api', require('./routes/profileRoutes'));
app.use('/api', require('./routes/friendRequestRoutes'));

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
  });

  socket.on('sendMessage', async (messageData) => {
    const { content, userId, chatRoomId } = messageData;

    try {
      const message = await Message.create({
        content,
        userId,
        chatRoomId,
      });

      io.to(chatRoomId).emit('newMessage', message);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await sequelize.sync();
});
