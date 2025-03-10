import express from "express";
import { createProduct, deleteProductById, getAllProduct, getSingleProductById, updateproductById } from "../controller/productController.js";
const router = express.Router();
import multer from "multer";
import { verifyToken } from "../middlware/verifyToken.js";
const upload = multer({ dest: "uploads/" });


router.post("/",upload.single("imgUrl"),createProduct);
router.get("/", getAllProduct);
router.get("/:id", getSingleProductById);
router.patch("/:id",verifyToken,upload.single("imgUrl"),updateproductById);
router.delete("/:id",verifyToken,deleteProductById);

export default router;
