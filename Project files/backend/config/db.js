import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
export const connectDB=async ()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to mango db:");
    }catch(e){
        console.error("error");
        process.exit(1);
    }

}