import { products } from "../schema/productSchema.js";

// Product CRUDE
export const createProduct = async (req, res) => {
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
};

//Get all products
export const getAllProduct = async (req, res) => {
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
};

// get single producr
export const getSingleProductById = async (req, res) => {
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
};
// update a product
export const updateproductById = async (req, res) => {
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
};
// Delete a product
export const deleteProductById = async (req, res) => {
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
};
