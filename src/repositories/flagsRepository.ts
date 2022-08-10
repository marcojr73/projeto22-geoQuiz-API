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

export {
    getAllFlags
}