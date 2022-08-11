import { Router } from "express";
import { sendUserHistoric } from "../controllers/usersController.js";

const usersRouter = Router()

usersRouter.get("/user", sendUserHistoric)
usersRouter.get("/users/ranking")

export default usersRouter