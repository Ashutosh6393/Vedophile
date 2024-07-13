import "dotenv/config";
import express from "express";
import connectDB from "./db/index.js";
import { app } from "./app.js";

console.log(process.env);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("mongodb connection failed");
  });
