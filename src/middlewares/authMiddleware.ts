import { NextFunction, Request, Response } from "express"
import * as schemas from "../schemas/schemas.js"
import { TdataSignIn, TdataSignUp } from "../utils/typesUtils"


async function validateDataSignUp(req: Request, res: Response, next: NextFunction){
    
    const {name, email, password, confirmPassword}: TdataSignUp = req.body

    console.log(req.file)
    
    if(password !== confirmPassword) throw {
        status: 403,
        message: "expected password to equal confirmPassword"
    }
    
    await schemas.schemaSignUp.validateAsync({name, email, password})

    next()
}

async function validateDataSignIn(req: Request, res: Response, next: NextFunction){

    const {email, password}: TdataSignIn = req.body

    await schemas.schemaSignIn.validateAsync({email, password})

    next()
}

export {
    validateDataSignUp,
    validateDataSignIn
} 