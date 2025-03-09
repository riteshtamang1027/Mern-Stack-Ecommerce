import express from "express";
const router = express.Router();
import {
  deleteUserById,
  getAllUsers,
  getSingleUserById,
  loginUser,
  RegisterUser,
  updatedUserById,
} from "../controller/userController.js";
router.post("/register", RegisterUser);
router.post("/login", loginUser);
router.get("/", getAllUsers);
router.get("/:id", getSingleUserById);
router.patch("/:id", updatedUserById);
router.delete("/:id", deleteUserById);

export default router;
