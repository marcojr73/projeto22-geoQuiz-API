import { Request, Response } from "express";

import * as userService from "../services/usersService.js"
import * as utils from "../utils/functionsUtils.js"

async function sendUserHistoric(req: Request, res: Response){
    const token: string = req.headers.authorization?.replace("Bearer", "").trim()

    const userId: number = await utils.validateTokenAndGetUser(token)
    const data = await userService.getUserById(userId)


    res.send(data)
}

export {
    sendUserHistoric,
}