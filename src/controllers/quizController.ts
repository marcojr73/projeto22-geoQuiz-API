import { Request, Response } from "express";
import * as utils from "../utils/functionsUtils.js"

async function sendQuestionByLevel(req: Request, res: Response){

    const {level} = req.params
    const token: string = req.headers.authorization?.replace("Bearer", "").trim()

    const userId = utils.validateTokenAndGetUser(token)


    res.send(level)
}

export {
    sendQuestionByLevel
}