import express from "express";
import mongoose from "mongoose";

// Configure the server
const app = express();
app.use(express.json());

// Connect to MongoDB Database

try {
  mongoose.connect(
    "mongodb+srv://riteshtamang1027:rKyz6jdB5VveFK8U@cluster0.k0oe9.mongodb.net/ecommerce-db?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("MongoDB Connection Success");
} catch (error) {
  console.log("MongoDB Connection Error", error);
}

// Product Schema(items for the product table)
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  previousprice: { type: Number, required: true },
  imgUrl: { type: String, required: true },
  category: { type: String, required: true },
});

// Make product Table

const product = mongoose.model("product", productSchema);

// CRUDE for product

//1. Create a product
app.post("/products", async (req, res) => {

  try {
const newproduct= await new product(req.body).save();
console.log(newproduct)

  } catch (error) {

    console.log("Something went worng",error);
  }
});






app.get("/", (req, res) => {
  res.send("Server is working...");
});
app.get("/students", (req, res) => {
  res.send("100 Students here");
});

app.listen(4000, () => {
  console.log("Server started at http://localhost:4000");
});
