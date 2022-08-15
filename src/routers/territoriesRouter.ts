import { Router } from "express";
import { sendTerritoriesByLevel, verifyAnswerTerritories } from "../controllers/territoriesController.js";
import { dataVerifyQuiz, validateLevelSent } from "../middlewares/QuizzesMiddleware.js";

const territoriesRouter = Router()

territoriesRouter.get("/territories/:level",validateLevelSent, sendTerritoriesByLevel)
territoriesRouter.post("/validate/territories", dataVerifyQuiz, verifyAnswerTerritories)

export default territoriesRouter