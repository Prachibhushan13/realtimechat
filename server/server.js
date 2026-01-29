import express from 'express';
import "dotenv/config";
import http from 'http';
import cors from 'cors';
import { connectDB } from './lib/db.js';
import userRouter from './routes/userRoutes.js';
import messageRouter from './routes/messageRoutes.js';
import { Server } from 'socket.io';

//Create express app and server
const app = express();
const server = http.createServer(app);

//initialize socket.io
export const io = new Server(server, {
  cors: {origin: "*"}
});

//store online users
export const userSocketMap = {}; //{userId: socketId}

//socket.io connection handler
io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  console.log('user connected', userId);

  if(userId){
    userSocketMap[userId] = socket.id;
  }

  //emit online users to all connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("user disconnected", userId);
      delete userSocketMap[userId];
      io.emit("getOnlineUsers", Object.keys(userSocketMap));
  })
});

// Middleware
app.use(express.json({ limit: '4mb' }));
app.use(cors());

//Routes setup
app.use("/api/status", (req, res) => res.send("Server is running"));
app.use("/api/auth" , userRouter);
app.use("/api/messages",  messageRouter);

//connect to mongoDB
await connectDB();

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

