import { Router } from "express";
import { ProductControllers } from "./products.controller";
import ValidationSchema from "../../middlewares/validationSchema";
import { ProductValidations } from "./products.validation";

const router = Router();
router.post(
  "/",
  ValidationSchema(ProductValidations.createProductSchema),
  ProductControllers.createProductIntoDB
);

export const ProductRouter = router;
