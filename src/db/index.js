import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const DBConnection = async () => {
  try {
    console.log(" Connecting to MongoDB...");
    console.log(`Using URI: ${process.env.DB_URI}/${DB_NAME}`);
    
    const connect = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
    
    console.log(` DB connected! DB Host: ${connect.connection.host}`);
  } catch (error) {
    console.log(` Error occurred in DB connection: ${error.message}`);
  }
};

export default DBConnection;
