import mongoose from "mongoose";

const connectURL = process.env.MONGO_URL;
export const connectDB = () => {
  return mongoose.connect(connectURL);
};
