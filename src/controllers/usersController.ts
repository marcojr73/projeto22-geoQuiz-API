import { Request, Response } from "express";

import * as userService from "../services/usersService.js"
import * as utils from "../utils/functionsUtils.js"

async function sendUserHistoric(req: Request, res: Response){
    const token: string = req.headers.authorization?.replace("Bearer", "").trim()

    const userId: number = await utils.validateTokenAndGetUser(token)
    const data: any = await userService.getUserById(userId)
    data.weekScore = await userService.calculateWeekScoreByUser(userId)
    res.send(data)
}

export {
    sendUserHistoric,
}