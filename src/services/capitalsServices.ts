import * as capitalsRepository from "../repositories/capitalsRepositories.js"
import * as utils from "../utils/functionsUtils.js"

async function getAndSuffleCapitals(level: string){
    const quiz = await capitalsRepository.getAllcapitals(level)
    return utils.suffleArray(quiz[0].capitalsQuiz)
}

export {
    getAndSuffleCapitals
}