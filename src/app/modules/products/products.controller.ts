import { RequestHandler } from "express";
import { ProductServices } from "./products.service";

const createProductIntoDB: RequestHandler = async (req, res) => {
  console.log("hello");

  const product_data = req.body;
  const data = await ProductServices.createProductIntoDB(product_data);
  res.status(201).json({
    success: true,
    message: "Product created successfully!",
    data,
  });
};

export const ProductControllers = {
  createProductIntoDB,
};
