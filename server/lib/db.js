import mongoose from "mongoose";

// Function to connect to MongoDB
export const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => { console.log("Mongoose connected to DB"); });
    await mongoose.connect(`${process.env.MONGODB_URI}/realtimechat`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
