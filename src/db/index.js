import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const DBConnection = async ()=>{
    try {
        const connect = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
        console.log(`DB connected !! DB Host ${connect.connection.host}`);
        }
     catch (error) {
        console.log(`Error Occurs in DBconnection ${error}`);
        
    }
}

export default DBConnection