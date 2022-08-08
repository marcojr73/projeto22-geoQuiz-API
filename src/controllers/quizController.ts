import { Request, Response } from "express";
import * as utils from "../utils/functionsUtils.js"
import * as capitalsServices from "../services/capitalsServices.js"

async function sendCapitalsByLevel(req: Request, res: Response){

    const level = req.params.level
    const token: string = req.headers.authorization?.replace("Bearer", "").trim()
    
    await utils.validateTokenAndGetUser(token)
    const quiz = await capitalsServices.getAndSuffleCapitals(level)

    res.send(quiz)
}

export {
    sendCapitalsByLevel
}