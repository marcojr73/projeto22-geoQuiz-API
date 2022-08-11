import bcrypt from "bcrypt"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import {capitalsQuiz} from "@prisma/client"
import * as userRepository from "../repositories/userRepository.js"

async function encryptPassword(password: string){
    dotenv.config()
    return bcrypt.hashSync(password, 10)
}

async function validateTokenAndGetUser(token: string){
    if (token === undefined) throw {
        status: 401,
        message: "Token not sent"
    }

    const {KEYJWT} = process.env
    const {userId} = jwt.verify(token, KEYJWT, function(err, decoded){
        if(err) throw {
            status: 401,
            message: "Token expired or invalid"
        } 
        return decoded
    }) as any
    return userId
}

function suffleArray(quiz, numberItems){
    quiz.sort(() => { 
        return Math.random() - 0.5; 
    })
    return quiz.slice(-numberItems)
}

async function updateHitsUser(userId: number){
    console.log(userId)
    await userRepository.updateHitsByUser(userId)
}

async function updateMistakesUser(userId: number){
    await userRepository.updateMistakesByUser(userId)
}

async function updateWeekScore(quiz, userId: number){
    const ponctuation = quiz.levelId * 10
    await userRepository.createGameScore(userId, ponctuation)
}

export {
    encryptPassword,
    validateTokenAndGetUser,
    suffleArray,
    updateHitsUser,
    updateMistakesUser,
    updateWeekScore
}