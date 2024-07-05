import { RequestHandler } from "express";
import { OrderServices } from "./orders.service";

const createNewOrder: RequestHandler = async (req, res, next) => {
  try {

    const orderBody = req.body;
    const data = await OrderServices.createNewOrder(orderBody);
    res.status(201).json({
      success: true,
      message: "Order created successfully!",
      data,
    });
  } catch (error) {
    next(error);
  }
};
const getAllOrders: RequestHandler = async (req, res, next) => {
  try {
    const data = await OrderServices.getAllOrders({
      email: req.query.email as string,
    });
    res.status(201).json({
      success: true,
      message: "Orders fetched successfully!",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const OrderControllers = {
  createNewOrder,
  getAllOrders,
};
