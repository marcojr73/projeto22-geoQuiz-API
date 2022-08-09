import * as capitalsRepository from "../repositories/capitalsRepositories.js"
import * as utils from "../utils/functionsUtils.js"
import {capitalsQuiz} from "@prisma/client"

async function getAndSuffleCapitals(level: string){
    let quiz = await capitalsRepository.getAllcapitals(level)
    quiz = utils.suffleArray(quiz[0].capitalsQuiz)
    return suffleOptions(quiz)
}

function suffleOptions(quiz){
    quiz.forEach(e => {
        e.name = e.country
        e.options = [e.capital, e.cityTwo, e.cityThree, e.cityFour, e.cityFive]
        utils.suffleArray(e.options)
        delete e.country
        delete e.capital
        delete e.cityTwo
        delete e.cityThree
        delete e.cityFour
        delete e.cityFive
    })
    return quiz
}

async function verifyAndGetQuizById(id: number){
    const quiz = await capitalsRepository.getQuizById(id)
    if(!quiz) throw {
        status: 404,
        message: "quiz not found"
    }
    return quiz
}

function validateAnswer(quiz: capitalsQuiz, answer: string){
    if(quiz.capital !== answer){
        return false
    } else {
        return true
    }
}

async function updateHitsUser(userId: number){
    await capitalsRepository.updateHitsByUser(userId)
}

async function updateMistakesUser(userId: number){
    await capitalsRepository.updateMistakesByUser(userId)
}

export {
    getAndSuffleCapitals,
    verifyAndGetQuizById,
    validateAnswer,
    updateHitsUser,
    updateMistakesUser
}