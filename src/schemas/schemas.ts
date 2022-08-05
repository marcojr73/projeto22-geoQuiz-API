import joi from "joi";

const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
const pictureRegex = /(https?:\/\/.*\.(?:png|jpg|gif|jpeg))/i

const schemaSignUp = joi.object({
    name: joi.string().required(),
    email: joi.string().email().pattern(emailRegex).required(),
    password: joi.string().min(4).required(),
    picture: joi.string().pattern(pictureRegex).required()
})

export {
    schemaSignUp
} 
    