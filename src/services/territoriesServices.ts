import { territoriesQuiz } from "@prisma/client"
import territoriesRepository from "../repositories/territoriesRepository.js"
import errors from "../utils/errors.js"
import utils from "../utils/functionsUtils.js"

async function getAndSuffleTerritories(level: string){
    const territories = await territoriesRepository.getAllTerritories(level)
    utils.suffleArray(territories, 10)
    territories.forEach(territory => {
        assembleTerritories(territory)
    })
    return territories
}

async function assembleTerritories(territory){
    territory.options.push(territory.country)
    utils.suffleArray(territory.options, 5)
}

async function verifyAndGetQuizById(id: number){
    const quiz = await territoriesRepository.getQuizById(id)
    if(!quiz) throw errors.notFound("Quiz not found")
    return quiz
}

async function validateAnswer(quiz: territoriesQuiz, answer: string){
    if(quiz.country !== answer){
        return false
    } else {
        return true
    }
}

export default {
    getAndSuffleTerritories,
    assembleTerritories,
    verifyAndGetQuizById,
    validateAnswer
}