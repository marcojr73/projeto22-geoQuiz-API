import * as usersRepository from "../repositories/userRepository.js"
import dayjs from 'dayjs'

async function getUserById(id: number){
    const user = await usersRepository.getUserById(id)
    if(!user) throw {
        status: 404,
        message: "user not found"
    }
    return user
}

async function calculateWeekScoreByUser(id: number){
    const score = await usersRepository.getHistoryGames() as any
    score.forEach(score => {
        score.weekScore = toJson(score.weekScore)
    })
    return score
}

function toJson(weekScore) {
    return  JSON.stringify(weekScore, (_, v) => typeof v === 'bigint' ? `${v}n` : v)
            .replace(/"(-?\d+)n"/g, (_, a) => a)
}

export {
    getUserById,
    calculateWeekScoreByUser
}