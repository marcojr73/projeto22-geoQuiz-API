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

async function getHistoryGames(){
    return await prisma.$queryRaw`
    SELECT SUM(ponctuation) as "weekScore", users.name as name FROM "gameScore"
    JOIN users ON "gameScore"."userId" = users.id
    WHERE "gameScore"."createdAt" > current_date - interval '1 days'
    GROUP BY name
    ORDER BY ("weekScore") DESC`
}

async function getUsersList(){
    return prisma.users.findMany({
        select:{
            id: true,
            name: true
        }
    })
}

export {
    findUserByEmail,
    getUserById,
    registerNewUser,
    updateHitsByUser,
    updateMistakesByUser,
    createGameScore,
    getHistoryGames,
    getUsersList
}