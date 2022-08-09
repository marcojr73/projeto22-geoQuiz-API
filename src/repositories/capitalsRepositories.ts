import { prisma } from "../config/database.js"


async function getAllcapitals(level: string){
    return await prisma.levels.findMany({
        select:{
            capitalsQuiz:{
                select:{
                    id: true,
                    country: true,
                    capital: true,
                    cityTwo: true,
                    cityThree: true,
                    cityFour: true,
                    cityFive: true
                }
            }
        },
        where:{level}
    })
}

async function getQuizById(id: number){
    return await prisma.capitalsQuiz.findFirst({
        where: {id}
    })
}

async function updateHitsByUser(id){
    await prisma.users.update({
        where:{id},
        data:{hits:{increment: 1}}
    })
}

async function updateMistakesByUser(id){
    await prisma.users.update({
        where:{id},
        data:{mistakes:{increment: 1}}
    })
}

async function createGameScore(userId: number, ponctuation: number){
    await prisma.gameScore.create({
        data:{
            userId,
            ponctuation
        }
    })
}

export {
    getAllcapitals,
    getQuizById,
    updateHitsByUser,
    updateMistakesByUser,
    createGameScore
}