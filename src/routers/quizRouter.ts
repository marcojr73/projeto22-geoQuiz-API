import { Router } from "express";
import { sendQuestionByLevel } from "../controllers/quizController.js";

const quizRouter = Router()

quizRouter.get("/capitals/:level", sendQuestionByLevel)
quizRouter.get("/flags/:level")

export default quizRouter