import joi from "joi";

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const pictureRegex = /(https?:\/\/.*\.(?:png|jpg|gif|jpeg))/i

const schemaSignUp = joi.object({
    name: joi.string().required(),
    email: joi.string().email().pattern(emailRegex).required(),
    password: joi.string().min(4).required()
})

const schemaSignIn = joi.object({
    email: joi.string().email().pattern(emailRegex).required(),
    password: joi.string().min(4).required(),
})

export {
    schemaSignUp,
    schemaSignIn
} 
    