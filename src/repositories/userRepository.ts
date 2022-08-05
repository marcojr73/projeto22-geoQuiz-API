import {prisma} from "../config/database.js"
import { TcreateUser } from "../utils/typesUtils.js"

async function findUserByEmail(email: string){
    return await prisma.users.findFirst({
        where: {email}
    })
}

async function registerNewUser(data: TcreateUser){
    await prisma.users.create({
        data
    })
}

export {
    findUserByEmail,
    registerNewUser
}