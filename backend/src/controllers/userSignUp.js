import { userModel } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
export const userSignUpController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = userModel.findOne({ email });
    if (user) {
      throw new Error("User Already Registered");
    }
    if (!name) {
      throw new Error("Please provide name");
    }
    if (!email) {
      throw new Error("Please provide email");
    }

    if (!password) {
      throw new Error("Please provide password");
    }
    const fileUrl = await uploadOnCloudinary(req.file.path);
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      profilePic: fileUrl,
    });
    await newUser.save();
    console.log(newUser);
    res.status(201).json({
      data: newUser,
      success: true,
      error: false,
      message: "User created successfully",
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
