import express from "express";
// import { Database } from "lucide";
// import mongoose from 'mongoose';

// Configure the server
const app = express();

app.get("/", (req, res) => {
  res.send("Server is working...");
});
app.get("/students", (req, res) => {
  res.send("100 Students here");
});

app.listen(4000, () => {
  console.log("Server started at http://localhost:4000");
});
