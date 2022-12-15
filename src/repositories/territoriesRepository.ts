import {prisma} from "../config/database.js"

async function getAllTerritories(level: string){
    const list = await prisma.levels.findMany({
        select:{
            territoriesQuiz:{
                select:{
                    id: true,
                    name: true,
                    country: true,
                    options: true
                }
            }
        },
        where:{level}
    })
    return list[0].territoriesQuiz
}

async function getQuizById(id: number){
    return await prisma.territoriesQuiz.findFirst({
        where:{id}
    })
}

export default {
    getAllTerritories,
    getQuizById

} 