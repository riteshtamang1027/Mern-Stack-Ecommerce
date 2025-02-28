
// import { app } from "../server.js";
import { Category } from "./schema/categorySchema.js";
import { v2 as cloudinary } from "cloudinary";
import multer from 'multer'
const upload = multer({ dest: "uploads/" });
import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

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

// app.get("/Categories", async (req, res) => {
//   try {
//     const allCategory = await Category.find();
//     return res.status(200).json({
//       message: "All categories fetch success.",
//       data: allCategory,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "internal server error",
//       error,
//     });
//   }
// });

// app.get("/Categories/:id", async (req, res) => {
//   try {
//     const SingleCategory = await Category.findById(req.params.id);
//     if (!SingleCategory) {
//       return res.status(404).json({
//         message: "Single category is not found",
//       });
//     }
//     return res.status(200).json({
//       message: "Single category fetch successfully",
//       date: SingleCategory,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "internal server error",
//     });
//   }
// });
// app.patch("/Categories/:id", async (req, res) => {
//   try {
//     const updatedCategory = await Category.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     return res.status(200).json({
//       message: "Category update successfully",
//       data: updatedCategory,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "internal server error",
//     });
//   }
// });
// app.delete("/Categories/:id", async (req, res) => {
//   try {
//     const deleteCategory = await Category.findByIdAndDelete(req.params.id);
//     if (!deleteCategory) {
//       return res.status(404).json({
//         message: "Category not found",
//       });
//     }

//     return res.status(200).json({
//       message: "Category delete successfully",
//       data: deleteCategory,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       message: "internal server error",
//     });
//   }
// });
