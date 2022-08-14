import * as territoriesRepository from "../repositories/territoriesRepository.js"
import * as utils from "../utils/functionsUtils.js"

async function getAndSuffleTerritories(level){
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
    if(!quiz) throw {
        status: 404,
        message: "Quiz not found"
    }
    return quiz
}

async function validateAnswer(quiz, answer){
    if(quiz.country !== answer){
        return false
    } else {
        return true
    }
}

export {
    getAndSuffleTerritories,
    verifyAndGetQuizById,
    validateAnswer
}