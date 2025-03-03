import express from "express";
const router = express.Router();
import multer from "multer";
const upload = multer({ dest: "uploads/" });
import { createCategory, deleteCategoryById, getAllcategories, getSinglecategoryById, updatedCategoryById } from "../controller/categoryController.js";


router.post("/",upload.single("imgUrl"),createCategory);
router.get("/", getAllcategories);
router.get("/:id", getSinglecategoryById);
router.patch("/:id",updatedCategoryById);
router.delete("/:id",deleteCategoryById);

export default router;
