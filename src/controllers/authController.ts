import { Request, Response } from "express";
import { TdataSignUp } from "../utils/typesUtils";
import * as authServices from "../services/authServices.js"
import * as util from "../utils/functionsUtils.js"

async function signUp(req: Request, res: Response){

    let {name, email, password, confirmPassword, picture}: TdataSignUp = req.body
    await authServices.isEmailAlreadyinUse(email)
    password = await util.encryptPassword(password)
    await authServices.registerNewUser({name, email, password, picture})

    res.status(201).send("User register sucessfull")
}

export {
    signUp
}