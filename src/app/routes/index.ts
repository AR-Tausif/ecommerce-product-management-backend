import { Router } from "express";
import { ProductRouter } from "../modules/products/products.routes";

const appRoutes = Router();
appRoutes.use("/products", ProductRouter);

export default appRoutes;
