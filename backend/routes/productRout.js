// import multer from "multer";
// const upload = multer({ dest: "uploads/" });
import { products } from "./schema/productSchema.js";
import { app } from "../server.js";
// import { v2 as cloudinary } from "cloudinary";
// import 'dotenv/config'

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });


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
