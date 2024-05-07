import { userModel } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
export const userSignUpController = async (req, res) => {
  try {
    const { name, email, password, profilePic } = req.body;

    if (!name) {
      throw new Error("Please provide name");
    }
    if (!email) {
      throw new Error("Please provide email");
    }

    if (!password) {
      throw new Error("Please provide password");
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      profilePic,
    });
    await newUser.save();
    console.log(newUser);
    return res.status(201).json(newUser);
  } catch (error) {
    res.json({
      mesaage: error,
      error: true,
      success: false,
    });
  }
};
