import { model, Schema } from "mongoose";
import { TOrder } from "./orders.interface";

const OrderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: true,
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

const Order = model("Order", OrderSchema);
export default Order;
