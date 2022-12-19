import multer from "multer";

import { Router } from "express";
import { signUp, signIn } from "../controllers/authController.js";
import * as middlewares from "../middlewares/authMiddleware.js"

const authRouter = Router()
authRouter.post("/sign-up", middlewares.validateDataSignUp, signUp)
authRouter.post("/sign-in", middlewares.validateDataSignIn, signIn)

export default authRouter