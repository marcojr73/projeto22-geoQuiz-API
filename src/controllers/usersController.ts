import { Request, Response } from "express";

import userService from "../services/usersService.js"
import utils from "../utils/functionsUtils.js"

async function sendUserHistoric(req: Request, res: Response){
    const token: string = req.headers.authorization?.replace("Bearer", "").trim()

    const userId: number = await utils.validateTokenAndGetUser(token)
    const user: any = await userService.getUserById(userId)
    const weekScore = await userService.calculateWeekScoreByUser(userId) as any
   
    res.send({user, weekScore}) 
}

export {
    sendUserHistoric
}