import multer from "multer";

import { Router } from "express";
import { signUp, signIn } from "../controllers/authController.js";
import * as middlewares from "../middlewares/authMiddleware.js"
import multerConfig from "../config/multerConfig.js";

const authRouter = Router()

// const storage = multer.memoryStorage();
// const upload = multer({ storage });

authRouter.post("/sign-up",  multer(multerConfig).single('file'), middlewares.validateDataSignUp, signUp)
authRouter.post("/sign-in", middlewares.validateDataSignIn, signIn)

export default authRouter