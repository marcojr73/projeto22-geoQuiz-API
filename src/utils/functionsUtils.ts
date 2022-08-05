import bcrypt from "bcrypt"
import dotenv from "dotenv"

async function encryptPassword(password: string){
    dotenv.config()
    return bcrypt.hashSync(password, 10)
}

export {
    encryptPassword
}