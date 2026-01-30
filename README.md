# 💬 Realtime Chat Application

A full-stack **Realtime Chat Application** built using **React**, **Node.js**, **Express**, **Socket.IO**, and **MongoDB**.  
The app supports **user authentication**, **real-time messaging**, and **secure communication** using JWT-based authorization.

This project demonstrates how to build scalable real-time systems using WebSockets alongside REST APIs.

---

## 🚀 Features

- 🔐 User authentication (JWT-based)
- 👥 User registration and login
- 💬 Real-time one-to-one messaging using Socket.IO
- 🔄 Persistent socket connections
- 🛡️ Protected API routes with middleware
- ⚡ Modern React architecture with Context API
- 📡 REST + WebSocket hybrid backend
- 🌐 Environment-based configuration

---

## 🧱 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- Context API

### Backend
- Node.js
- Express.js
- Socket.IO
- MongoDB + Mongoose
- JSON Web Tokens (JWT)

---

## 📂 Project Structure
realtimechat/
│
├── client/ # React frontend
│ ├── src/
│ ├── public/
│ └── vite.config.js
│
├── server/ # Express backend
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── server.js
│ └── socket.js
│
└── README.md
---

## ⚙️ Environment Variables

### Backend (`server/.env`)
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173


### Frontend (`client/.env`)
VITE_BACKEND_URL=http://localhost:5001


---

## 🛠️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Prachibhushan13/realtimechat.git
cd realtimechat

2️⃣ Backend Setup
cd server
npm install
npm run server
Backend will start on:

http://localhost:5001

3️⃣ Frontend Setup
cd client
npm install
npm run dev
Frontend will run on:

http://localhost:5173

🔌 Real-time Communication

Socket.IO is used for bi-directional communication.

The server maintains persistent socket connections.

Messages are broadcast instantly between connected users.

🌍 Deployment Notes (Important)
❗ Vercel Limitation

Vercel uses serverless functions, which do not support persistent WebSocket connections.
Because of this:

❌ Socket.IO backend cannot be deployed directly on Vercel

✅ Frontend can be deployed on Vercel
✅ Backend should be deployed on platforms that support long-running servers

✅ Recommended Deployment Strategy

Frontend → Vercel

Backend (Socket.IO + Express) → Render / Railway / Fly.io / Heroku

📌 Future Improvements

Group chat support

Online/offline user indicators

Message read receipts

Typing indicators

File & image sharing

Dockerized deployment
🤝 Contributing

Contributions are welcome!
Feel free to fork the repository and submit a pull request.

📄 License

This project is licensed under the MIT License.

🙌 Acknowledgements

Socket.IO documentation

MongoDB & Mongoose

React & Vite community
