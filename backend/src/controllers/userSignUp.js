import { userModel } from "../models/userModel.js";

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

    const newUser = new userModel({
      name,
      email,
      password,
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
