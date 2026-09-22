import { getAllProducts, getOneProduct } from "../controllers/productsController.js";
import { Router } from "express";


const productRouter = Router()

productRouter.get("/", getAllProducts)
productRouter.get("/:id", getOneProduct)

export default productRouter