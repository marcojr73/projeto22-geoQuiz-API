import { flagsQuiz } from "@prisma/client"
import * as flagsRepository from "../repositories/flagsRepository.js"
import * as utils from "../utils/functionsUtils.js"

async function getAndSuffleFlags(level: string) {
    let quiz = await flagsRepository.getAllFlags(level)
    quiz = utils.suffleArray(quiz[0].flagsQuiz, 50)
    return assembleObject(quiz)
}

function assembleObject(quiz){
    const ans = []
    for(let i = 0; i<10; i++){
        const countries = []
        for(let j = 0; j<quiz.length; j++){
            if(quiz[j].country !== quiz[i].country){
                countries.push(quiz[j].country)
            }
        }
        utils.suffleArray(countries, 4)
        ans.push({
            id: quiz[i].id,
            name: quiz[i].flag,
            options: [quiz[i].country, countries[0], countries[1], countries[2], countries[3]]
        })
        utils.suffleArray(ans[i].options, 10)
    }
    return ans
}

async function verifyAndGetQuizById(id: number){
    const quiz = await flagsRepository.getFlagById(id)
    if(!quiz) throw {
        status: 404,
        message: "quiz not found"
    }
    return quiz
}

async function validateAnswer(quiz: flagsQuiz, answer: string){
    if(quiz.country !== answer){
        return false
    } else {
        return true
    }
}


export {
    getAndSuffleFlags,
    verifyAndGetQuizById,
    validateAnswer
}