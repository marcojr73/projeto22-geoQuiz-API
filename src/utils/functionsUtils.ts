import bcrypt from "bcrypt"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"

async function encryptPassword(password: string){
    dotenv.config()
    return bcrypt.hashSync(password, 10)
}

async function validateTokenAndGetUser(token: string){
    if (!token) throw {
        status: 401,
        message: "Token not sent"
    }

    const {KEYJWT} = process.env
    const {userId} = jwt.verify(token, KEYJWT, function(err, decoded){
        if(err) throw {
            status: 401,
            message: "Token expired or invalid"
        } 
        return decoded
    }) as any
    return userId
}

export {
    encryptPassword,
    validateTokenAndGetUser
}