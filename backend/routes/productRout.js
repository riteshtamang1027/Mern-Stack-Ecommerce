import express from "express";
import { createProduct, deleteProductById, getAllProduct, getSingleProductById, updateproductById } from "../controller/productController.js";
const router = express.Router();
import multer from "multer";
const upload = multer({ dest: "uploads/" });


router.post("/",upload.single("imgUrl"),createProduct);
router.get("/", getAllProduct);
router.get("/:id", getSingleProductById);
router.patch("/:id",upload.single("imgUrl"),updateproductById);
router.delete("/:id",deleteProductById);

export default router;
