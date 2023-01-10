import cors from "cors"
import express from "express"
import "express-async-errors"
import errorHandler from "./middlewares/errorHandler.js"
import authRouter from "./routers/authrouter.js"
import capitalsRouter from "./routers/capitalsRouter.js"
import FlagsRouter from "./routers/flagsRouter.js"
import territoriesRouter from "./routers/territoriesRouter.js"
import usersRouter from "./routers/usersRouter.js"
import swaggerUi from "swagger-ui-express"
// @ts-ignore
import swaggerDocs from "./config/swagger.json" assert { type: "json" };

const app = express()
app.use(cors())
app.use(express.json())
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))


app.use(authRouter)
app.use(capitalsRouter)
app.use(FlagsRouter)
app.use(territoriesRouter)
app.use(usersRouter)
app.use(errorHandler)

export default app