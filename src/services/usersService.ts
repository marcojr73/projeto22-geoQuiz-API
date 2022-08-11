import * as usersRepository from "../repositories/userRepository.js"

async function getUserById(id: number){
    const user = await usersRepository.getUserById(id)
    if(!user) throw {
        status: 404,
        message: "user not found"
    }
    return user
}

export {
    getUserById
}