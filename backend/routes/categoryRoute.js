import express from "express";
const router = express.Router();
import multer from "multer";
const upload = multer({ dest: "uploads/" });
import { createCategory, deleteCategoryById, getAllcategories, getSinglecategoryById, updatedCategoryById } from "../controller/categoryController.js";
import { verifyToken } from "../middlware/verifyToken.js";


router.post("/", verifyToken ,upload.single("imgUrl"),createCategory);
router.get("/"  , getAllcategories);
router.get("/:id", getSinglecategoryById);
router.patch("/:id", verifyToken ,upload.single("imgUrl"),updatedCategoryById);
router.delete("/:id", verifyToken ,deleteCategoryById);

export default router;
