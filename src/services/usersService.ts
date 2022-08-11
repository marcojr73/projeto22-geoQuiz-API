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
    const lastweekDay = dayjs().subtract(7, 'day').format()
    const games = await usersRepository.getHistoryGames(id, lastweekDay)
    return calculateScore(games)
}

function calculateScore(games){
    let score = 0

    games.forEach(game => {
        score += game.ponctuation
    })

    return score
}

export {
    getUserById,
    calculateWeekScoreByUser
}