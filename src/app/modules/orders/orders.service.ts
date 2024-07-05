import AppError from "../../errors/AppError";
import Product from "../products/products.model";
import { TOrder } from "./orders.interface";
import httpStatus from "http-status";
import Order from "./orders.model";

const createNewOrder = async (orderBody: TOrder) => {
  const existProduct = await Product.findById(orderBody.productId);
  console.log({ existProduct, orderBody });
  if (!existProduct) {
    throw new AppError(httpStatus.FORBIDDEN, `Product not found`);
  }

  if (!existProduct.inventory.inStock) {
    throw new AppError(httpStatus.FORBIDDEN, `Product already stock out`);
  }

  if (existProduct.inventory.quantity < orderBody.quantity) {
    throw new AppError(httpStatus.FORBIDDEN, `Insufficiant products`);
  }
  const priceValid = existProduct.price * orderBody.quantity;
  console.log(priceValid);
  if (orderBody.price !== priceValid) {
    throw new AppError(httpStatus.FORBIDDEN, `Price would be ${priceValid}`);
  }
  existProduct.inventory.quantity -= orderBody.quantity;
  console.log(existProduct.inventory);
  if (existProduct.inventory.quantity == 0) {
    existProduct.inventory.inStock = false;
  }
  existProduct.save();
  const new_order = await Order.create(orderBody);
  return new_order;
};

const getAllOrders = async () => {
  const orders = await Order.find({});
  return orders;
};
export const OrderServices = {
  createNewOrder,
  getAllOrders,
};
