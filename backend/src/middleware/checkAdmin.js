// middleware/checkAdmin.js
import { userModel } from "../models/userModel.js";
export const checkAdmin = async (req, res, next) => {
  try {
    const { userId } = req.user; // This is set in authToken middleware
    // console.log(req.user);
    // console.log(userId);
    const user = await userModel.findById(userId);
    if (user.role !== "ADMIN") {
      //   console.log("code execute");
      return res.status(403).json({
        message: "Access denied. Only admins can perform this action.",
        error: true,
        success: false,
      });
    }
    next();
  } catch (error) {
    res.status(400).json({
      message: error.message || "An error occurred",
      error: true,
      success: false,
    });
  }
};
