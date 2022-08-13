import { prisma } from "../config/database.js"

async function getAllFlags(level: string){
    return await prisma.levels.findMany({
        select:{
            flagsQuiz:{
                select:{
                    id: true,
                    country: true,
                    flag: true
                }
            }
        },
        where:{level}
    })
}

async function getFlagById(id: number){
    return await prisma.flagsQuiz.findFirst({
        where:{id}
    })
}

export {
    getAllFlags,
    getFlagById
}