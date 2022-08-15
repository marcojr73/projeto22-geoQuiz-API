import bcrypt from "bcrypt"
import dotenv from "dotenv"
import jwt from 'jsonwebtoken'
import sgMail from "@sendgrid/mail"


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

async function buildEmail(email: string){
    dotenv.config()
    const {SGKEY} = process.env
    sgMail.setApiKey(SGKEY)
    const message = "Here you can practice your knowledge in geography, we have questions about capitals flags and territories of almost every country in the world! Don't waste time and come reach the top #1 of our ranking! And if you liked it, don't forget to challenge your friends too."
    try {
        const body = {
            to: email,
            from: "marcojuniorengineer@gmail.com",
            subject: "Hello! Welcome to GeoQuiz",
            text: message
        }
        await sgMail.send(body)

    } catch (error) {
        throw {
            status: 201,
            message: "User Created but fail to send mail"
        }
    }
}

export{
    isEmailAlreadyinUse,
    registerNewUser,
    verifyAndGetIfUserExists,
    verifyPasswordIsCorrect,
    generateToken,
    buildEmail
}