import { jest } from "@jest/globals"

import dotenv from "dotenv"
import * as factory from "../factories/dataFactory.js"
import * as mock from "../factories/mockFactory.js"

import territoriesServices from "../../src/services/territoriesServices.js"
import territoriesRepository from "../../src/repositories/territoriesRepository.js"
import utils from "../../src/utils/functionsUtils.js"

dotenv.config()

jest.mock("../../src/repositories/capitalsRepositories.js")

describe("capitals Services", () => {
    it("should return 10 quizzes", async () => {
        jest.spyOn(territoriesRepository, "getAllTerritories").mockImplementationOnce(mock.returnFakeTerritoryQuiz as any)
        jest.spyOn(utils, "suffleArray").mockImplementationOnce(mock.returnFakeTerritoryQuiz as any)
        const level = factory.createLevel()
        const ans = await territoriesServices.getAndSuffleTerritories(level)
        expect(ans.length).toBe(10)
    })
    it("nothing should happen", async () => {
        jest.spyOn(utils, "suffleArray").mockImplementationOnce(mock.returnNull as any)
        const territory = factory.createFakeTerritory()
        const ans = await territoriesServices.assembleTerritories(territory)
        expect(ans).toBeUndefined()
    })
    it("should return return getQuizById", async () => {
        jest.spyOn(territoriesRepository, "getQuizById").mockImplementationOnce(mock.returnTrue as any)
        const id = factory.createFakeId()
        const ans = await territoriesServices.verifyAndGetQuizById(id)
        expect(ans).toBeTruthy()
    })
    it("should thorw 404", async () => {
        jest.spyOn(territoriesRepository, "getQuizById").mockImplementationOnce(mock.returnNull as any)
        const id = factory.createFakeId()
        const ans = territoriesServices.verifyAndGetQuizById(id)
        expect(ans).rejects.toEqual({
            status: 404,
            message: "Quiz not found"
        })
    })
    it("shold return true", async () => {
        const quiz = factory.createFakeTerritory()
        const ans = await territoriesServices.validateAnswer(quiz, quiz.country)
        expect(ans).toBeTruthy()
    })
    it("shold return false", async () => {
        const quiz = factory.createFakeTerritory()
        const ans = await territoriesServices.validateAnswer(quiz, quiz.name)
        expect(ans).toBeFalsy()
    })
})