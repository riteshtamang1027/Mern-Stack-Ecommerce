// create User
import bcrypt from "bcrypt";
const saltRounds = 10;
import jwt from "jsonwebtoken";

import { User } from "../schema/userSchema.js";

export const RegisterUser = async (req, res) => {
  try {
    // Check if user already exist
    const UserExist = await User.findOne({ email: req.body.email });
    if (UserExist) {
      return res.status(409).json({
        message:
          "User already exists with this email please choose another emailadress.",
      });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    console.log(hashedPassword);

    const newRegisterUser = await new User({
      ...req.body,
      password: hashedPassword,
    }).save();
    return res.status(201).json({
      message: "User registered Successfully.",
      data: newRegisterUser,
    });
  } catch (error) {
    // console.log(error)
    return res.status(500).json({
      message: "Error while  registering user.",
      error: error,
    });
  }
};

// login
export const loginUser = async (req, res) => {
  try {
    // Check if user already exist
    const UserExist = await User.findOne({ email: req.body.email });
    if (!UserExist) {
      return res.status(409).json({
        message:
          "User not exists with this email please register it and login.",
      });
    }

    //  if user exist  compare the password
    const isPasswordMatched = await bcrypt.compare(
      req.body.password,
      UserExist.password
    );

    if (!isPasswordMatched) {
      return res.status(401).json({
        message: "Password is not correct",
      });
    }

    // if password matched then generate th jwt token
    const myToken = jwt.sign({ email: UserExist.email }, "this_is_privet_key", {
      expiresIn: "1h",
    });
    console.log(myToken);
    return res.status(200).json({
      message: "User  logged in successfully",
      token: myToken,
      user: UserExist,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error while  login user.",
      error: error,
    });
  }
};

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
    const AllUsers = await User.findById();
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
export const updatedUserById = async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json({
      message: "User data updated Successfully.",
      data: updateUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error.",
    });
  }
};
// delete user
export const deleteUserById = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "User data delete successfully.",
      data: deleteUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error.",
    });
  }
};
