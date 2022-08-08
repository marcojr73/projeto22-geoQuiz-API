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

export {
    validateLevelSent
}