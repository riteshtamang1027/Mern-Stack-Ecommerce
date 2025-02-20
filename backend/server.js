import express from "express";
import mongoose from "mongoose";

// App config
const app = express();
// Middlewire
app.use(express.json());

// Database cnfig
try {
  mongoose.connect(
    "mongodb+srv://riteshtamang1027:YJHQAapIRkcWnIkX@cluster0.k0tbn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
} catch (error) {
  console.log("Something went wrong ", error);
}

// Product CRUDE
app.post("/products", async (req, res) => {
  try {
    // Check if product name already taken or not
    const productExist = await products.findOne({ name: req.body.name });

    if (productExist) {
      return res.status(409).json({
        message: "Name already exist, please choose another name",
      });
    }

    const newproduct = await new products(req.body).save();
    return res.status(201).json({
      message: "product created successfully",
      data: newproduct,
    });
  } catch (error) {
    console.log("Error in creating a product ", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});
//Get all products
app.get("/products", async (req, res) => {
  try {
    const allProducts = await products.find();
    return res.status(200).json({
      message: "All product fetched successfully",
      data: allProducts,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

// get single producr
app.get("/products/:id", async (req, res) => {
  try {
    const Singleproduct = await products.findById(req.params.id);
    return res.status(200).json({
      message: "Single Product fetched successfully",
      data: Singleproduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error345",
    });
  }
});
// update a product
app.patch("/products/:id", async (req, res) => {});
// Delete a product
app.delete("/products/:id", async (req, res) => {
  try {
    const checkProduct = await products.findById(req.params.id);

    if (!checkProduct) {
      return res.status(404).json({
        message: "Product delete successfully enjoy now",
      
      });
    }

    const deleteProduct = await products.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      message: "Product deleted successfully",
      data: deleteProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

// Table Schema

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  discription: { type: String, required: false },
  price: { type: Number, required: true },
  previousprice: { type: Number, required: true },
  category: { type: String, required: true },
  imgUrl: { type: String, required: true },
});

const products = mongoose.model("Product", ProductSchema);

app.get("/", (req, res) => {
  res.send("Server is runnig now");
});

app.listen(4000, () => {
  console.log("Server is running http://localhost:4000");
});
