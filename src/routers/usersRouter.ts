import { Router } from "express";
import { sendUserHistoric } from "../controllers/usersController.js";

const usersRouter = Router()

usersRouter.get("/users/ranking", sendUserHistoric)

export default usersRouter