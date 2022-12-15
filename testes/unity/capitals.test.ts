import { jest } from "@jest/globals"

import dotenv from "dotenv"
import * as factory from "../factories/dataFactory.js"
import * as mock from "../factories/mockFactory.js"

import capitalsServices from "../../src/services/capitalsServices"
import errors from "../../src/utils/errors.js"
import capitalsRepositories from "../../src/repositories/capitalsRepositories.js"
import utils from "../../src/utils/functionsUtils.js"

dotenv.config()

jest.mock("../../src/repositories/capitalsRepositories.js")

describe("capitals Services", () => {
    it("should return 10 quizzes", async () => {
        jest.spyOn(capitalsRepositories, "getAllcapitals").mockImplementationOnce(mock.returnFakeCapitalQuiz as any)
        jest.spyOn(utils, "suffleArray").mockImplementationOnce(mock.returnFakeCapitalQuiz)
        jest.spyOn(capitalsServices, "suffleOptions").mockImplementationOnce(mock.returnFakeCapitalQuiz)
        const level = factory.createLevel()
        const ans = await capitalsServices.getAndSuffleCapitals(level)
        expect(ans[0].capitalsQuiz.length).toBe(10)
    })
    it("nothing return return function get quiz", async () => {
        jest.spyOn(capitalsRepositories, "getQuizById").mockImplementationOnce(mock.returnTrue as any)
        const id = factory.createFakeId()
        const ans = capitalsServices.verifyAndGetQuizById(id)
        expect(ans).toBeTruthy()
    })
    it("nothing return return function get quiz", async () => {
        jest.spyOn(capitalsRepositories, "getQuizById").mockImplementationOnce(mock.returnNull as any)
        const id = factory.createFakeId()
        const ans = capitalsServices.verifyAndGetQuizById(id)
        expect(ans).rejects.toEqual({
            status: 404,
            message: "quiz not found"
        })
    })
    it("should return true", async () => {
        const quiz = factory.createFakeCapitalQuiz()
        const ans = capitalsServices.validateAnswer(quiz, "Juiz de Fora")
        expect(ans).toBeTruthy()
    })
    it("should return false", async () => {
        const quiz = factory.createFakeCapitalQuiz()
        const ans = capitalsServices.validateAnswer(quiz, "Rio de Janeiro")
        expect(ans).toBeFalsy()
    })
})