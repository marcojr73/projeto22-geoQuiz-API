import { jest } from "@jest/globals"

import dotenv from "dotenv"
import * as factory from "../factories/dataFactory.js"
import * as mock from "../factories/mockFactory.js"

import flagsServices from "../../src/services/flagsServices"
import flagsRepository from "../../src/repositories/flagsRepository.js"
import utils from "../../src/utils/functionsUtils.js"

dotenv.config()

jest.mock("../../src/repositories/capitalsRepositories.js")

describe("capitals Services", () => {
    it("should return 10 quizzes", async () => {
        jest.spyOn(flagsRepository, "getAllFlags").mockImplementationOnce(mock.returnFakeFlagsQuiz as any)
        jest.spyOn(utils, "suffleArray").mockImplementationOnce(mock.returnFakeFlagsQuiz as any)
        const level = factory.createLevel()
        const ans = await flagsServices.getAndSuffleFlags(level)
        expect(ans.length).toBe(10)
    })
    it("should return return getFlag", async () => {
        jest.spyOn(flagsRepository, "getFlagById").mockImplementationOnce(mock.returnTrue as any)
        const id = factory.createFakeId()
        const ans = await flagsServices.verifyAndGetQuizById(id)
        expect(ans).toBeTruthy
    })
    it("should throw 404 not found quiz", async () => {
        jest.spyOn(flagsRepository, "getFlagById").mockImplementationOnce(mock.returnNull as any)
        const id = factory.createFakeId()
        const ans = flagsServices.verifyAndGetQuizById(id)
        expect(ans).rejects.toEqual({
            status: 404,
            message: "quiz not found"
        })
    })
    it("should return true for correct answer", async () => {
        const quiz = factory.createFakeFlagQuiz()
        const ans = flagsServices.validateAnswer(quiz, quiz.country)
        expect(ans).toBeTruthy()
    })
    it("should return true for correct answer", async () => {
        const quiz = factory.createFakeFlagQuiz()
        const ans = flagsServices.validateAnswer(quiz, quiz.flag)
        expect(ans).toBeFalsy()
    })
})