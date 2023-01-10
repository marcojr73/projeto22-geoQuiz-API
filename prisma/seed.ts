import {prisma} from "../src/config/database.js";

import { capitalsdata }  from "./data/Capitalsdata.js"
import { levelsData } from "./data/levelsData.js";
import { flagsData } from "./data/flagsData.js";
import { territoriesData } from "./data/territoriesData.js";
import dotenv from "dotenv"

dotenv.config()

console.log("seed running on base" + process.env.DATABASE_URL)

async function seed(){
    const isLevels = await prisma.levels.findFirst({}) 
    if(!isLevels) {
        await prisma.levels.createMany({
            data: levelsData
        })
        console.log("levels created")
    }
    const isCapitals = await prisma.capitalsQuiz.findFirst({}) 
    if(!isCapitals){
        await prisma.capitalsQuiz.createMany({
            data: capitalsdata
        })
        console.log("capitals quiz created")
    }
    const isFlags = await prisma.flagsQuiz.findFirst({}) 
    if(!isFlags){
        await prisma.flagsQuiz.createMany({
            data: flagsData
        })
        console.log("flags quiz created")
    }
    const isTerritories = await prisma.territoriesQuiz.findFirst({}) 
    if(!isTerritories){
        await prisma.territoriesQuiz.createMany({
            data: territoriesData
        })
        console.log("territories quiz created")
    }
    const isAdmin = await prisma.users.findFirst({where: {id: 4815162342}}) 
    if(!isAdmin){
        await prisma.users.create({
            data: {id: 4815162342, name: "administrador", email: "admin@admin.com", password: "4815162342"}
        })
        console.log("administrador criado com sucesso")
    }
}seed().catch(e => {
    console.log(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})