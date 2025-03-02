import cloudinary from "../lib/cloudinaryConfig.js";
import { Category } from "../schema/categorySchema.js";


export const createCategory = async (req, res) => {
  try {
    const categoryExist = await Category.findOne({ name: req.body.name });
    if (categoryExist) {
      return res.status(409).json({
        message: "Name already taken, please choose another name",
      });
    }
    // Handle the image upload before saving to database

    const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);

    const newCategory = await new Category({
      ...req.body,
      imgUrl: cloudinaryResponse.secure_url,
    }).save();
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
};

export const getAllcategories = async (req, res) => {
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
};

export const getSinglecategoryById = async (req, res) => {
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
};

export const updatedCategoryById = async (req, res) => {
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
};
export const deleteCategoryById = async (req, res) => {
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
};
