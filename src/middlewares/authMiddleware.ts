import { NextFunction, Request, Response } from "express";
import * as schemas from "../schemas/schemas.js"

async function validateDataSignUp(req: Request, res: Response, next: NextFunction){
    type dataSignUp = {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
        picture: string;
    }
    const {name, email, password, confirmPassword, picture}: dataSignUp = req.body
    
    if(password !== confirmPassword) throw {
        status: 403,
        message: "expected password to equal confirmPassword"
    }
    
    await schemas.schemaSignUp.validateAsync({name, email, password, picture})

    next()
}

export {
    validateDataSignUp
} 