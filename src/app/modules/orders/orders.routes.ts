import { Router } from "express";
import { OrderControllers } from "./orders.controllers";
import ValidationSchema from "../../middlewares/validationSchema";
import { OrderValidations } from "./orders.validation";

const router = Router();
router.post(
  "/",
  ValidationSchema(OrderValidations.createOrderSchema),
  OrderControllers.createNewOrder
);

export const OrdersRouter = router;
