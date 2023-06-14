import express, { Express, Request, Response } from "express"
import dotenv from "dotenv"

dotenv.config()

const PORT = process.env.PORT ?? "3000"
const app: Express = express()

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world?")
})

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
})
