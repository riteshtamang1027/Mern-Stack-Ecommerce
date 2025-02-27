import express from "express";
import mongoose from "mongoose";
// const multer  = require('multer')
import multer from 'multer';
const upload = multer({ dest: 'uploads/' })
import { Category } from "./schema/categorySchema.js";
import { products } from "./schema/productSchema.js";

// App config
const app = express();
// Middlewire
app.use(express.json());

// Database config
try {
  mongoose.connect(
    "mongodb+srv://riteshtamang1027:cFU3k5nLp2jAIMM4@cluster0.k6mob.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("Mongodb connected successfully");
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
    // console.log("Error in creating a product ", error);
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
app.patch("/products/:id", async (req, res) => {
  try {
    const updateproduct = await products.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updateproduct) {
      return res.status(404).json({
        message: "product is not found.",
      });
    }
    return res.status(200).json({
      message: "data update successfully.",
      data: updateproduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      error,
    });
  }
});
// Delete a product
app.delete("/products/:id", async (req, res) => {
  try {
    const deleteProduct = await products.findByIdAndDelete(req.params.id);

    if (!deleteProduct) {
      return res.status(404).json({
        message: "Product is not available now",
      });
    }
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

app.post("/Categories",upload.single('imgUrl'), async (req, res) => {
  try {
// Handle the image upload before saving to database 
console.log(req.file)



    const categoryExist = await Category.findOne({ name: req.body.name });
    if (categoryExist) {
      return res.status(409).json({
        message: "Name already taken, please choose another name",
      });
    }

    const newCategory = await new Category(req.body).save();
    return res.status(201).json({
      message: "Category create successfully",
      data: newCategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      error,
    });
  }
});

app.get("/Categories", async (req, res) => {
  try {
    const allCategory = await Category.find();
    return res.status(200).json({
      message: "All categories fetch success.",
      data: allCategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      error,
    });
  }
});

app.get("/Categories/:id", async (req, res) => {
  try {
    const SingleCategory = await Category.findById(req.params.id);
    if (!SingleCategory) {
      return res.status(404).json({
        message: "Single category is not found",
      });
    }
    return res.status(200).json({
      message: "Single category fetch successfully",
      date: SingleCategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
});
app.patch("/Categories/:id", async (req, res) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    return res.status(200).json({
      message: "Category update successfully",
      data: updatedCategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
});
app.delete("/Categories/:id", async (req, res) => {
  try {
    const deleteCategory = await Category.findByIdAndDelete(req.params.id);
    if (!deleteCategory) {
      return res.status(404).json({
        message: "Category not found",
      });
    }

    return res.status(200).json({
      message: "Category delete successfully",
      data: deleteCategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
    });
  }
});

app.get("/", (req, res) => {
  res.send("Server is runnig now");
});

app.listen(4000, () => {
  console.log("Server is running http://localhost:4000");
});
