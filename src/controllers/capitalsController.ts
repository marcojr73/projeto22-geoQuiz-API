import { Request, Response } from "express";
import * as utils from "../utils/functionsUtils.js"
import * as capitalsServices from "../services/capitalsServices.js"

async function sendCapitalsByLevel(req: Request, res: Response){

    const level = req.params.level
    const token: string = req.headers.authorization?.replace("Bearer", "").trim()
    
    await utils.validateTokenAndGetUser(token)
    const quiz = await capitalsServices.getAndSuffleCapitals(level)

    res.send(quiz)
}

async function verifyAnswerCapital(req: Request, res: Response){
    const {quizId, answer}: {quizId: number, answer: string} = req.body
    const token: string = req.headers.authorization?.replace("Bearer", "").trim()

    const userId: number = await utils.validateTokenAndGetUser(token)
    const quiz = await capitalsServices.verifyAndGetQuizById(quizId)

    const isCorrect = capitalsServices.validateAnswer(quiz, answer)
    if(isCorrect) await capitalsServices.updateHitsUser(userId)
    if(!isCorrect) await capitalsServices.updateMistakesUser(userId)
    if(isCorrect) await capitalsServices.updateWeekScore(quiz, userId)

    res.send(isCorrect)
}

export {
    sendCapitalsByLevel,
    verifyAnswerCapital
}