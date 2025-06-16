import mongoose from "mongoose";
import dotenv, { config } from "dotenv";
dotenv.config()

export const dbconnection = () => {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log(`Database connected successfully !`);
  });
};
