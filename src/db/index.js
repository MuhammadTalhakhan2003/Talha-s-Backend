import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async()=>{
    try{
        const connectionInstance =
await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
console.log(`\n mongoDB Connected !!Db host: ${connectionInstance.connection.host}`)
    }
    catch(error){
console.log("MONGO DB connection error1",error);
process.exit(1)
    }
    
}

export default connectDB