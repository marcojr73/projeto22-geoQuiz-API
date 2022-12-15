import { faker } from "@faker-js/faker"
import { prisma } from "../../src/config/database.js"
import jwt from 'jsonwebtoken'


function createValidSignUpData() {
    const password = faker.music.songName()
    return {
        name: faker.name.firstName(),
        email: faker.internet.email(),
        password,
        confirmPassword: password,
    }
}

function createInvalidSignUpData() {
    return {}
}

async function createValidToken() {
    const { KEYJWT } = process.env
    const user = await prisma.users.create({
        data: {
            name: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.finance.bitcoinAddress(),
            picture: faker.animal.bird()
        }
    })
    return jwt.sign({ userId: user.id }, KEYJWT, { expiresIn: '7d' })
}

function createInvalidToken() {
    return faker.finance.bitcoinAddress()
}

function createLevel() {
    const levels = ["easy", "medium", "hard"]
    return levels[Math.floor(Math.random() * 2)];
}

async function createValidateCapitalData() {
    const quiz = await prisma.capitalsQuiz.findFirst()
    const options = [quiz.capital, quiz.cityTwo, quiz.cityThree, quiz.cityFour, quiz.cityFive]
    return { quizId: quiz.id, answer: options[Math.floor(Math.random() * 4)] }
}

async function createValidateflagData() {
    const quiz = await prisma.flagsQuiz.findFirst()
    const answer = await prisma.flagsQuiz.findFirst()
    return { quizId: quiz.id, answer }
}

async function createValidateTerritoryData() {
    const quiz = await prisma.territoriesQuiz.findFirst()
    return { quizId: quiz.id, answer: quiz.options[Math.floor(Math.random() * 4)] }
}

function createFakeEmail() {
    return faker.internet.email()
}

function createUserData() {
    return {
        name: faker.animal.cat(),
        email: faker.internet.email(),
        password: faker.animal.cat(),
        picture: faker.animal.cat()
    }
}

function createPassword() {
    return faker.animal.lion()
}

function createFakeId() {
    return Math.floor(Math.random() * 100)
}

function createFakeCapitalQuiz() {
    return {
        id: Math.floor(Math.random() * 100),
        country: faker.address.country(),
        capital: "Juiz de Fora",
        cityTwo: faker.address.cityName(),
        cityThree: faker.address.cityName(),
        cityFour: faker.address.cityName(),
        cityFive: faker.address.cityName(),
        levelId: Math.floor(Math.random() * 3),
        createdAt: faker.date.birthdate()
    }
}

function createFakeFlagQuiz() {
    return {
        id: Math.floor(Math.random() * 100),
        country: faker.address.country(),
        flag: faker.address.country(),
        levelId: Math.floor(Math.random() * 3),
        createdAt: faker.date.birthdate()
    }
}

function createFakeTerritory(){
    return {
        id: Math.floor(Math.random() * 100),
        name: faker.address.country(),
        country: faker.address.country(),
        options: [faker.address.country(),faker.address.country(),faker.address.country(),faker.address.country(),],
        levelId: Math.floor(Math.random() * 3),
        createdAt: faker.date.birthdate()
    }
}

function createFakeWeekScore(){
    return [
        {weekScore: Math.floor(Math.random() * 500)},
        {weekScore: Math.floor(Math.random() * 500)},
        {weekScore: Math.floor(Math.random() * 500)},
        {weekScore: Math.floor(Math.random() * 500)},
        {weekScore: Math.floor(Math.random() * 500)},
        {weekScore: Math.floor(Math.random() * 500)},
    ]
}

export {
    createValidSignUpData,
    createInvalidSignUpData,
    createValidToken,
    createInvalidToken,
    createLevel,
    createValidateCapitalData,
    createValidateflagData,
    createValidateTerritoryData,
    createFakeEmail,
    createUserData,
    createPassword,
    createFakeId,
    createFakeCapitalQuiz,
    createFakeFlagQuiz,
    createFakeTerritory,
    createFakeWeekScore
}