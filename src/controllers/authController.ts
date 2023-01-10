
import { Request, Response } from "express";
import { TdataSignUp, TdataSignIn } from "../utils/typesUtils";
import authServices from "../services/authServices.js"
import util from "../utils/functionsUtils.js"


async function signUp(req: Request, res: Response){
    let {name, email, password, confirmPassword, picture}: TdataSignUp = req.body
    if(!picture) picture = "http://neoleader.com.br/wp-content/uploads/2015/05/geral_adulto-300x300.png"
    await authServices.isEmailAlreadyinUse(email)
    password = await util.encryptPassword(password)
    await authServices.registerNewUser({name, email, password, picture})
    await authServices.buildEmail(email)
    
    res.status(201).send("User register sucessfull")
}

async function signIn(req: Request, res: Response){

    const {email, password}: TdataSignIn = req.body
    const user = await authServices.verifyAndGetIfUserExists(email)
    authServices.verifyPasswordIsCorrect(password, user.password)
    const token = authServices.generateToken(user.id)

    res.status(200).send(token)
}

export {
    signUp,
    signIn
}