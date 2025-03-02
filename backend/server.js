import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import categoryRoute from "./routes/categoryRoute.js";
import productRout from "./routes/productRout.js";

// App config
const app = express();
// Middlewire
app.use(express.json());

// Database config
try {
  mongoose.connect(process.env.MONGO_URI);
  console.log("Mongodb connected successfully");
} catch (error) {
  console.log("Something went wrong ", error);
}
app.use("/Categories", categoryRoute);
app.use("/Products", productRout);

app.get("/", (req, res) => {
  res.send("Ecommerce backend server is running");
});

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running http://localhost:${process.env.APP_PORT}`);
});
