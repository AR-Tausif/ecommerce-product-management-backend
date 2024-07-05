import { Router } from "express";
import { ProductRouter } from "../modules/products/products.routes";
import { OrdersRouter } from "../modules/orders/orders.routes";

const appRoutes = Router();
appRoutes.use("/products", ProductRouter);
appRoutes.use("/orders", OrdersRouter);

export default appRoutes;
