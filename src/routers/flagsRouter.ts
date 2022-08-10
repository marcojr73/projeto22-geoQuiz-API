import { Router } from "express";
import { sendFlagsByLevel } from "../controllers/flagsController.js";
import { dataVerifyQuiz, validateLevelSent } from "../middlewares/QuizzesMiddleware.js";

const FlagsRouter = Router()

FlagsRouter.get("/flags/:level", validateLevelSent, sendFlagsByLevel)
// FlagsRouter.post("/validate/flags/", dataVerifyQuiz, verifyAnswerFlags)

export default FlagsRouter