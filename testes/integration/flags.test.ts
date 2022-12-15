import supertest from "supertest"
import { prisma } from "../../src/config/database.js"
import app from "../../src/app.js"
import dotenv from "dotenv"
import * as factory from "../factories/dataFactory.js"

dotenv.config()

console.log("tests running on base" + process.env.DATABASE_URL)

beforeEach(async () => {
    await prisma.gameScore.deleteMany({ where: {} })
    await prisma.users.deleteMany({ where: {} })
})

describe("get flag quiz", () => {
    it("should return a teen randon quizzes", async () => {
        const token = await factory.createValidToken()
        const level = factory.createLevel()
        const response = await supertest(app).get(`/flags/${level}`).auth(token, {type: "bearer"})
        expect(response.statusCode).toBe(200)
        expect(response.body.length).toBe(10)
    })
    it("should fail when an invalid token is sent", async () => {
        const token = factory.createInvalidToken()
        const level = factory.createLevel()
        const response = await supertest(app).get(`/flags/${level}`).auth(token, {type: "bearer"})
        expect(response.statusCode).toBe(401)
    })
})

describe("validate capitals quiz", () => {
    it("should return true or false", async () => {
        const token = await factory.createValidToken()
        const  validateFlagData = await factory.createValidateflagData()
        const response = await supertest(app).post("/validate/flags").auth(token, {type: "bearer"}).send(validateFlagData)
        expect(response.statusCode).toBe(200)
    })
    it("should fail when an invalid token is sent", async () => {
        const token = factory.createInvalidToken()
        const  validateFlagData = await factory.createValidateflagData()
        const response = await supertest(app).post("/validate/capitals").auth(token, {type: "bearer"}).send(validateFlagData)
        expect(response.statusCode).toBe(401)
    })
})