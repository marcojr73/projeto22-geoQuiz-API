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
    }
    return ans
}


export {
    getAndSuffleFlags
}