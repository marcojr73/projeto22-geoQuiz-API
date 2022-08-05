import { Router } from "express";
import { signUp } from "../controllers/authController.js";
import * as middlewares from "../middlewares/authMiddleware.js"

const authRouter = Router()

authRouter.post("/sign-up", middlewares.validateDataSignUp, signUp)
authRouter.post("/sign-in", middlewares.validateDataSignIn)

export default authRouter