import express from "express";
import { userSignUpController } from "../controllers/userSignUp.js";
import { upload } from "../middleware/multer.middleware.js";
import { userSignInController } from "../controllers/userSignIn.js";
import { userDetail } from "../controllers/userDetail.js";
import { authToken } from "../middleware/authToken.js";
import { userLogout } from "../controllers/userLogout.js";
// import { home } from "../controllers/index.js";

const router = express.Router();

router.post("/sign-up", upload.single("profilePic"), userSignUpController);
router.post("/login", userSignInController);
router.get("/user-details", authToken, userDetail);
router.get("/logout", userLogout);
export default router;
