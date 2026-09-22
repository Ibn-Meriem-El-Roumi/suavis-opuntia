import express from "express"
import dotenv from "dotenv"
import productRouter from "./routers/productsRouter.js"
import { connectDB } from "./config/DBConnect.js"

dotenv.config()

const server = express()
connectDB("ecommerce")

server.use(express.json())
server.use(express.urlencoded({extended: true}))

const PORT = process.env.PORT || 6000



server.use("/products", productRouter)



server.listen(PORT, () => {
    console.log(`Listeniong from http://localhost:${PORT}`);
})