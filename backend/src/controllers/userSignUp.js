import { userModel } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
export const userSignUpController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User already registered",
        error: true,
        success: false,
      });
    }

    if (!name || !email || !password) {
      throw new Error("Please provide name, email, and password");
    }

    // if (!req.file) {
    //   throw new Error("Profile picture is required");
    // }
    const fileUrl = await uploadOnCloudinary(req?.file?.path);
    const hashedPassword = bcryptjs.hashSync(password, 10);
    console.log(fileUrl);
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      profilePic: fileUrl,
      role: "GENERAL",
    });
    await newUser.save();
    console.log(newUser);
    return res.status(201).json({
      data: newUser,
      success: true,
      error: false,
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Internal Server Error",
      error: true,
      success: false,
    });
  }
};
