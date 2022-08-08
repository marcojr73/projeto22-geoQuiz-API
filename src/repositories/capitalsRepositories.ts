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

export {
    getAllcapitals
}