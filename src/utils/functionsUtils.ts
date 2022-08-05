import Cryptr from "cryptr"
import dotenv from "dotenv"

dotenv.config()

async function encryptPassword(password: string){
    const {KEYCRYPT} = process.env
    const cryptr = new Cryptr(KEYCRYPT)
    return cryptr.encrypt(password)
}

export {
    encryptPassword
}