import { jest } from "@jest/globals"

import dotenv from "dotenv"
import * as factory from "../factories/dataFactory.js"
import * as mock from "../factories/mockFactory.js"

import userService from "../../src/services/usersService.js"
import userRepository from "../../src/repositories/userRepository.js"
import utils from "../../src/utils/functionsUtils.js"

dotenv.config()

jest.mock("../../src/repositories/capitalsRepositories.js")

describe("capitals Services", () => {
    it("shold return return getUserById", async () => {
        jest.spyOn(userRepository, "getUserById").mockImplementationOnce(mock.returnTrue as any)
        const id = factory.createFakeId()
        const ans = userService.getUserById(id)
        expect(ans).toBeTruthy()
    })
    it("shold throw 404", async () => {
        jest.spyOn(userRepository, "getUserById").mockImplementationOnce(mock.returnNull)
        const id = factory.createFakeId()
        const ans = userService.getUserById(id)
        expect(ans).rejects.toEqual({
            status: 404,
            message: "user not found"
        })
    })
    it("shold throw 404", async () => {
        jest.spyOn(userRepository, "getHistoryGames").mockImplementationOnce(factory.createFakeWeekScore as any)
        const id = factory.createFakeId()
        const ans = await userService.calculateWeekScoreByUser(id)
        expect(ans.length).toBe(6)
    })
})