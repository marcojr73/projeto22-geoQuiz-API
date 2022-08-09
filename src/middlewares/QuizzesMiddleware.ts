import { NextFunction, Request, Response } from "express";

async function validateLevelSent(req: Request, res: Response, next: NextFunction){

    const level = req.params.level

    const levels = ["easy", "medium", "hard"]

    if(!levels.includes(level)) throw {
        status: 422,
        message: "this level does not exist"
    }

    next()
}

async function dataVerifyQuiz(req: Request, res: Response, next: NextFunction){

    const {levelId, answer} = req.body
    if(!levelId || !answer) throw {
        status: 422,
        message: "you sent incorrect data"
    }

    next()
}



export {
    validateLevelSent,
    dataVerifyQuiz
}