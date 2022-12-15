import { prisma } from "../../src/config/database.js"
import { jest } from "@jest/globals"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

import dotenv from "dotenv"
import * as factory from "../factories/dataFactory.js"
import * as mock from "../factories/mockFactory.js"

import authServices from "../../src/services/authServices.js"
import userRepository from "../../src/repositories/userRepository.js"
import errors from "../../src/utils/errors.js"

dotenv.config()

jest.mock("../../src/repositories/userRepository.js")

describe("auth service", () => {
    it("nothing should happen", async () => {
        jest.spyOn(userRepository, "findUserByEmail").mockImplementationOnce(mock.returnNull)
        const email = factory.createFakeEmail()
        const ans = await authServices.isEmailAlreadyinUse(email)
        expect(ans).toBeUndefined()
    })
    it("should throw 409 if duplicate email", async () => {
        jest.spyOn(userRepository, "findUserByEmail").mockImplementationOnce(mock.returnTrue as any)
        const email = factory.createFakeEmail()
        const ans = authServices.isEmailAlreadyinUse(email)
        expect(ans).rejects.toEqual({
            status: 409,
            message: "this email already in use"
        })
    })
    it("should return return", async () => {
        jest.spyOn(userRepository, "findUserByEmail").mockImplementationOnce(mock.returnTrue as any)
        const email = factory.createFakeEmail()
        const ans = authServices.verifyAndGetIfUserExists(email)
        expect(ans).toBeTruthy()
    })
    it("should throw 404 if nonexistent email", async () => {
        jest.spyOn(userRepository, "findUserByEmail").mockImplementationOnce(mock.returnNull as any)
        const email = factory.createFakeEmail()
        const ans = authServices.verifyAndGetIfUserExists(email)
        expect(ans).rejects.toEqual({
            status: 404,
            message: "does not exist account register for this email"
        })
    })
    it("nothing should happen", async () => {
        jest.spyOn(userRepository, "registerNewUser").mockImplementationOnce(mock.returnNull)
        const user = factory.createUserData()
        const ans = await authServices.registerNewUser(user)
        expect(ans).toBeUndefined()
    })
    it("nothing should happen", async () => {
        jest.spyOn(bcrypt, "compareSync").mockImplementationOnce(mock.returnTrue)
        const password = factory.createPassword()
        const passCrypt = factory.createPassword()
        const ans = authServices.verifyPasswordIsCorrect(password, passCrypt)
        expect(ans).toBeUndefined()
    })
    it("nothing should happen", async () => {
        jest.spyOn(bcrypt, "compareSync").mockImplementationOnce(mock.returnTrue)
        const password = factory.createPassword()
        const passCrypt = factory.createPassword()
        const ans = authServices.verifyPasswordIsCorrect(password, passCrypt)
        expect(ans).toBeUndefined()
    })
    it("should return return jwt", async () => {
        jest.spyOn(jwt, "sign").mockImplementationOnce(mock.returnTrue)
        const id = factory.createFakeId()
        const ans = authServices.generateToken(id)
        expect(ans).toBeTruthy()
    })
})