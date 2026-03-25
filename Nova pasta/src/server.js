import express from "express"
import { pool } from "../db.js";
import tasksRoutes from "./routes/task.routes.js"
import { logger } from "./middlewares/logger.middleware.js";

const app = express()
const port = 3000

app.use(express.json())

app.use(logger)

app.get("/health-check", async (req, res) => {
    try {
        await pool.query("select 1")
        return res.status(200).json({
            api: "funcionando",
            banco: "conectado"
        })
    } catch (error) {
        console.log(error)
        return res.status(503).send({
            message: "banco indisponivel"
        })
    }
})

app.use("/tasks", tasksRoutes)

app.listen(port, () => {
    console.log(`servidor localizado em http://localhost:${port}`)
})