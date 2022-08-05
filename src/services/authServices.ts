import * as userRepository from "../repositories/userRepository.js"
import { TcreateUser } from "../utils/typesUtils.js"

async function isEmailAlreadyinUse(email: string){
    const user = await userRepository.findUserByEmail(email)

    if(user) throw {
        status: 409,
        message: "this email already in use"
    }
}

async function verifyAndGetIfUserExists(email: string){
    const user = await userRepository.findUserByEmail(email)
    if(!user) throw {
        status: 404,
        message: "does not exist account register for this email"
    }
    return user
}

async function registerNewUser(data: TcreateUser){
    await userRepository.registerNewUser(data)
}

export{
    isEmailAlreadyinUse,
    registerNewUser,
    verifyAndGetIfUserExists
}