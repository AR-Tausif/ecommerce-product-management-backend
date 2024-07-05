import { Schema, model } from "mongoose";
import TProduct, { TInventory, TVariants } from "./products.interface";

const variantsModelSchema = new Schema<TVariants>(
  {
    type: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const inventoryModelSchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: { type: Boolean, required: true },
});
const productModelSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: [true, "name field required"],
    },
    description: String,
    price: {
      type: Number,
      required: [true, "price field required"],
    },
    category: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    variants: {
      type: [variantsModelSchema],
      required: true,
    },
    inventory: inventoryModelSchema,
  },
  {
    versionKey: false,
  }
);

const Product = model("Product", productModelSchema);
export default Product;
