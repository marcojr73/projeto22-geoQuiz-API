import { Router } from "express";
import { sendCapitalsByLevel, verifyAnswerCapital } from "../controllers/quizController.js";
import { dataVerifyQuiz, validateLevelSent } from "../middlewares/QuizzesMiddleware.js";

const capitalsRouter = Router()

capitalsRouter.get("/capitals/:level", validateLevelSent, sendCapitalsByLevel)
capitalsRouter.post("/capital/", dataVerifyQuiz, verifyAnswerCapital)

export default capitalsRouter