import * as capitalsRepository from "../repositories/capitalsRepositories.js"
import * as utils from "../utils/functionsUtils.js"

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

export {
    getAndSuffleCapitals
}