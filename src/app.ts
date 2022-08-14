import cors from "cors"
import express from "express"
import "express-async-errors"
import errorHandler from "./middlewares/errorHandler.js"
import authRouter from "./routers/authrouter.js"
import capitalsRouter from "./routers/capitalsRouter.js"
import FlagsRouter from "./routers/flagsRouter.js"
import territoriesRouter from "./routers/territoriesRouter.js"
import usersRouter from "./routers/usersRouter.js"

const app = express()
app.use(cors())
app.use(express.json())

app.use(authRouter)
app.use(capitalsRouter)
app.use(FlagsRouter)
app.use(territoriesRouter)
app.use(usersRouter)
app.use(errorHandler)

export default app