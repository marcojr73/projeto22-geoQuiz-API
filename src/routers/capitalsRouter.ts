import { Router } from "express";
import { sendCapitalsByLevel, verifyAnswerCapital } from "../controllers/capitalsController.js";
import { dataVerifyQuiz, validateLevelSent } from "../middlewares/QuizzesMiddleware.js";

const capitalsRouter = Router()

capitalsRouter.get("/capitals/:level", validateLevelSent, sendCapitalsByLevel)
capitalsRouter.post("/validate/capitals", dataVerifyQuiz, verifyAnswerCapital)

export default capitalsRouter