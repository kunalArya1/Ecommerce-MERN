import express from "express";
import { userSignUpController } from "../controllers/userSignUp.js";
import { upload } from "../middleware/multer.middleware.js";
import { userSignInController } from "../controllers/userSignIn.js";
// import { home } from "../controllers/index.js";

const router = express.Router();

router.post("/sign-up", upload.single("profilePic"), userSignUpController);
router.post("/login", userSignInController);
export default router;
