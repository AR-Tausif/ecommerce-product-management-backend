import { RequestHandler } from "express";
import { OrderServices } from "./orders.service";

const createNewOrder: RequestHandler = async (req, res, next) => {
  try {
    console.log("ss", req.body);
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

export const OrderControllers = {
  createNewOrder,
};
