import { Router } from "express";
import * as middlewares from "../middlewares/authMiddleware.js"

const authRouter = Router()

authRouter.post("/sign-up", middlewares.validateDataSignUp)
authRouter.post("/sign-in")

export default authRouter