import { Router } from "express";
import { sendCapitalsByLevel } from "../controllers/quizController.js";
import { validateLevelSent } from "../middlewares/QuizzesMiddleware.js";

const capitalsRouter = Router()

capitalsRouter.get("/capitals/:level",validateLevelSent, sendCapitalsByLevel)
capitalsRouter.post("/capital/")

export default capitalsRouter