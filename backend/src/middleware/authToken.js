import jwt from "jsonwebtoken";

export const authToken = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.headers["authorization"]?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "User not logged in",
        error: true,
        success: false,
      });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          message: "Invalid token",
          error: true,
          success: false,
        });
      }

      req.user = decoded;
      next();
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || "An error occurred",
      data: [],
      error: true,
      success: false,
    });
  }
};
