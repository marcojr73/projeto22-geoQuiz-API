import {prisma} from "../src/config/database.js";

import { capitalsdata }  from "./data/Capitalsdata.js"
import { levelsData } from "./data/levelsData.js";
import { flagsData } from "./data/flagsData.js";
import { territoriesData } from "./data/territoriesData.js";
import dotenv from "dotenv"

dotenv.config()

console.log("seed running on base" + process.env.DATABASE_URL)

async function seed(){
    await prisma.levels.createMany({
        data: levelsData
    })
    await prisma.capitalsQuiz.createMany({
        data: capitalsdata
    })
    await prisma.flagsQuiz.createMany({
        data: flagsData
    })
    await prisma.territoriesQuiz.createMany({
        data: territoriesData
    })
}seed().catch(e => {
    console.log(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})