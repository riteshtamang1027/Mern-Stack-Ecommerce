import express from "express";
import { createProduct, deleteProductById, getAllProduct, getSingleProductById, updateproductById } from "../controller/productController.js";
const router = express.Router();



router.post("/",createProduct);
router.get("/", getAllProduct);
router.get("/:id", getSingleProductById);
router.patch("/:id",updateproductById);
router.delete("/:id",deleteProductById);

export default router;
