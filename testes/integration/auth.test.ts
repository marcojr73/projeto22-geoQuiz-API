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

describe("sign-up", () => {
    it("should create an new user from the correct data", async () => {
        const user = factory.createValidSignUpData()
        const response = await supertest(app).post("/sign-up").send(user)
        expect(response.statusCode).toBe(201)
    })
    it("should fail to create an new user from the incorrect data", async () => {
        const user = factory.createInvalidSignUpData()
        const response = await supertest(app).post("/sign-up").send(user)
        expect(response.statusCode).toBe(422)
    })
    it("should fail to create a duplicate user", async () => {
        const user = factory.createValidSignUpData()
        await supertest(app).post("/sign-up").send(user)
        const response = await supertest(app).post("/sign-up").send(user)
        expect(response.statusCode).toBe(409)
    })
})

describe("sign-in", () => {
    it("should send token from correct user data", async () => {
        const user = factory.createValidSignUpData()
        await supertest(app).post("/sign-up").send(user)
        const response = await supertest(app).post("/sign-in").send({email: user.email, password: user.password})
        expect(response.statusCode).toBe(200)
    })
    it("should not send token from nonexistent user", async () => {
        const user = factory.createValidSignUpData()
        const response = await supertest(app).post("/sign-in").send({email: user.email, password: user.email})
        expect(response.statusCode).toBe(404)
    })
    it("should not send token from incorrect password", async () => {
        const user = factory.createValidSignUpData()
        await supertest(app).post("/sign-up").send(user)
        const response = await supertest(app).post("/sign-in").send({email: user.email, password: user.email})
        expect(response.statusCode).toBe(422)
    })
})