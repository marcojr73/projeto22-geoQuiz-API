import {prisma} from "../src/config/database.js";

import { users } from "./data/Capitalsdata.js";
import dotenv from "dotenv"

dotenv.config()

console.log("seed running on base" + process.env.DATABASE_URL)

async function seed(){
    await prisma.users.createMany({
        data: users
    })
}seed().catch(e => {
    console.log(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})