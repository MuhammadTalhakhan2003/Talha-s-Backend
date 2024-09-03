//require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'

import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()








// import express from 'express'








/*
const app = express()


//IIFEImmediately Invoked Function Expression (IIFE)

(async ()=>{
    try{
   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
   app.on("error",(error)=>{
    console.log("err",error);
    throw error
   })

   app.listen(process.env.PORT,()=>{
    console.log(`App is listening on Port ${process.env.PORT}`)
   })
    }
    catch(error){
      console.error("ERROR :",error)
    }
})()

ConnectDb();*/