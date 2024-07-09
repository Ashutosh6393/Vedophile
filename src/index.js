import 'dotenv/config'
import express from "express";
import connectDB from './db/index.js'
import { app } from './app.js';

console.log(process.env);


connectDB().then(()=>{

}).catch((err)=>{
    console.log("mongodb connection failed");
    
})



