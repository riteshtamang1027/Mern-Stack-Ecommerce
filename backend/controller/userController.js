// create User

import { User } from "../schema/userSchema.js";

export const RegisterUser = async (req, res) => {
  try {
  } catch (error) {}
};
// login
export const loginUser = async (req, res) => {};
// getall users
export const getAllUsers = async (req, res) => {
  try {
    const AllUsers = await User.find();
    return res.status(200).json({
      message: "All user fetch successfully.",
      data: AllUsers,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error.",
    });
  }
};
// get single user
export const getSingleUserById = async (req, res) => {
    try {
        const AllUsers = await User.find();
        return res.status(200).json({
          message: "All user fetch successfully.",
          data: AllUsers,
        });
      } catch (error) {
        return res.status(500).json({
          message: "Internal server error.",
        });
      }
};
// update user
export const updatedUserById = async (req, res) => {};
// delete user
export const deleteUserById = async (req, res) => {};
