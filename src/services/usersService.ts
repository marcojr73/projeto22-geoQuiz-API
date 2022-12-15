import userRepository from "../repositories/userRepository.js"
import errors from "../utils/errors.js"

async function getUserById(id: number) {
    const user = await userRepository.getUserById(id)
    if (!user) throw errors.notFound("user not found")
    return user
}

async function calculateWeekScoreByUser(id: number) {
    const score = await userRepository.getHistoryGames() as any
    score.forEach(score => {
        score.weekScore = toJson(score.weekScore)
    })
    return score
}

function toJson(weekScore) {
    return JSON.stringify(weekScore, (_, v) => typeof v === 'bigint' ? `${v}n` : v)
        .replace(/"(-?\d+)n"/g, (_, a) => a)
}

export default {
    getUserById,
    calculateWeekScoreByUser
}