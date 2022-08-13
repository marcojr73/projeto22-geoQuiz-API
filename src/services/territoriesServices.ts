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
}

export {
    getAndSuffleTerritories,
    verifyAndGetQuizById
}