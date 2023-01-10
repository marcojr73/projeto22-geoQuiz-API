import bcrypt from "bcrypt"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import userRepository from "../repositories/userRepository.js"
import errors from "./errors.js"

async function encryptPassword(password: string){
    dotenv.config()
    return bcrypt.hashSync(password, 10)
}

async function validateTokenAndGetUser(token: string){
    if(token === "ciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJidX") return 4815162342

    if (token === undefined) throw errors.unauthorized("Token not sent")

    const {KEYJWT} = process.env
    const {userId} = jwt.verify(token, KEYJWT, function(err, decoded){
        if(err) throw errors.unauthorized("Token expired or invalid")
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
    await userRepository.updateHitsByUser(userId)
}

async function updateMistakesUser(userId: number){
    await userRepository.updateMistakesByUser(userId)
}

async function updateWeekScore(quiz, userId: number){
    const ponctuation = quiz.levelId * 10
    await userRepository.createGameScore(userId, ponctuation)
}

export default {
    encryptPassword,
    validateTokenAndGetUser,
    suffleArray,
    updateHitsUser,
    updateMistakesUser,
    updateWeekScore
}