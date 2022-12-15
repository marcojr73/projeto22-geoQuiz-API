import { Request, Response } from "express";
import utils from "../utils/functionsUtils.js"
import territoriesServices from "../services/territoriesServices.js"

async function sendTerritoriesByLevel(req: Request, res: Response){

    const level = req.params.level
    const token: string = req.headers.authorization?.replace("Bearer", "").trim()
    await utils.validateTokenAndGetUser(token)

    const territories = await territoriesServices.getAndSuffleTerritories(level)
    
    res.send(territories)
}

async function verifyAnswerTerritories(req: Request, res: Response){
    const {quizId, answer}: {quizId: number, answer: string} = req.body
    const token: string = req.headers.authorization?.replace("Bearer", "").trim()
    const userId: number = await utils.validateTokenAndGetUser(token)
    const quiz = await territoriesServices.verifyAndGetQuizById(quizId)
    const isCorrect = await territoriesServices.validateAnswer(quiz, answer)
    if(isCorrect) await utils.updateHitsUser(userId)
    if(!isCorrect) await utils.updateMistakesUser(userId)
    if(isCorrect) await utils.updateWeekScore(quiz, userId)

    res.send(isCorrect)
}

export {
    sendTerritoriesByLevel,
    verifyAnswerTerritories
}

