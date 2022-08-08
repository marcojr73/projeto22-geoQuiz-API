import cors from "cors"
import express from "express"
import "express-async-errors"
import errorHandler from "./middlewares/errorHandler.js"
import authRouter from "./routers/authrouter.js"
import quizRouter from "./routers/quizRouter.js"

const app = express()
app.use(cors())
app.use(express.json())

app.use(authRouter)
app.use(quizRouter)
app.use(errorHandler)

export default app