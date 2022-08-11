import {prisma} from "../config/database.js"
import { TcreateUser } from "../utils/typesUtils.js"

async function findUserByEmail(email: string){
    return await prisma.users.findFirst({
        where: {email}
    })
}

async function getUserById(id: number) {
    return await prisma.users.findFirst({
        select:{
            picture: true,
            name: true,
            hits: true,
            mistakes: true
        },
        where: {id}
    })
}

async function registerNewUser(data: TcreateUser){
    await prisma.users.create({
        data
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

async function getHistoryGames(id: number, lastweekDay){
    const game = await prisma.users.findMany({
        select:{
            gameScore:{
                select:{
                    id: true,
                    userId: true,
                    ponctuation: true,
                    createdAt: true
                },
                where:{
                    createdAt:{
                        gte: lastweekDay
                    }
                }
            }
        },
        where: {id}
    })
    return game[0].gameScore
}

export {
    findUserByEmail,
    getUserById,
    registerNewUser,
    updateHitsByUser,
    updateMistakesByUser,
    createGameScore,
    getHistoryGames
}