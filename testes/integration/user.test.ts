import supertest from "supertest"
import { prisma } from "../../src/config/database.js"
import app from "../../src/app.js"
import dotenv from "dotenv"
import * as factory from "../factories/integrationFactory.js"

dotenv.config()

console.log("tests running on base" + process.env.DATABASE_URL)

beforeEach(async () => {
    await prisma.gameScore.deleteMany({ where: {} })
    await prisma.users.deleteMany({ where: {} })
})

describe("get historic of user", () => {
    it("should return historic user", async () => {
        const token = await factory.createValidToken()
        const response = await supertest(app).get("/users/ranking").auth(token, {type: "bearer"})
        expect(response.statusCode).toBe(200)
    })
    it("should fail when an invalid token is sent", async () => {
        const token = factory.createInvalidToken()
        const response = await supertest(app).get("/users/ranking").auth(token, {type: "bearer"})
        expect(response.statusCode).toBe(401)
    })
})