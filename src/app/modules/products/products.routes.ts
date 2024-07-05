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

router.get("/", ProductControllers.getProductsFromDB);
router.get("/:productId", ProductControllers.getSingleProduct);
router.put("/:productId", ProductControllers.updateSingleProduct);
router.delete("/:productId", ProductControllers.deleteSingleProduct);

export const ProductRouter = router;
