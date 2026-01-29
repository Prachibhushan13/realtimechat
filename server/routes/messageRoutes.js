import express from 'express';
import { protectRoute } from '../middleware/authMiddleware.js';
import { getUsersforSidebar, getMessages, markMessagesAsSeen, sendMessage } from '../controllers/messageController.js';

const messageRouter = express.Router();

messageRouter.get("/users",protectRoute , getUsersforSidebar);
messageRouter.get("/:id", protectRoute, getMessages);
messageRouter.put("/mark/:id", protectRoute, markMessagesAsSeen);
messageRouter.post("/send/:id", protectRoute, sendMessage);

export default messageRouter;