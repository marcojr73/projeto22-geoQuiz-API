import bcrypt from "bcrypt"
import dotenv from "dotenv"
import jwt from 'jsonwebtoken'


import * as userRepository from "../repositories/userRepository.js"
import { TcreateUser } from "../utils/typesUtils.js"

async function isEmailAlreadyinUse(email: string){
    const user = await userRepository.findUserByEmail(email)

    if(user) throw {
        status: 409,
        message: "this email already in use"
    }
}

async function verifyAndGetIfUserExists(email: string){
    const user = await userRepository.findUserByEmail(email)
    console.log(user, email)
    if(!user) throw {
        status: 404,
        message: "does not exist account register for this email"
    }
    return user
}

async function registerNewUser(data: TcreateUser){
    await userRepository.registerNewUser(data)
}

function verifyPasswordIsCorrect(password: string, passCrypt: string){
    const ans = bcrypt.compareSync(password, passCrypt)
    if(!ans) throw {
        status: 422,
        message: "this password is incorrect"
    }
}

function generateToken(userId: number){
    dotenv.config()
    const {KEYJWT} = process.env
    return jwt.sign({ userId }, KEYJWT, { expiresIn: '7d'})
}

export{
    isEmailAlreadyinUse,
    registerNewUser,
    verifyAndGetIfUserExists,
    verifyPasswordIsCorrect,
    generateToken
}