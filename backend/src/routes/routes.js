import express from "express";
import { userSignUpController } from "../controllers/userSignUp.js";
// import { home } from "../controllers/index.js";

const router = express.Router();

router.post("/sign-up", userSignUpController);

export default router;
