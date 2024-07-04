import { RequestHandler } from "express";
import { ProductServices } from "./products.service";

const createProductIntoDB: RequestHandler = async (req, res, next) => {
  try {
    const product_data = req.body;
    const data = await ProductServices.createProductIntoDB(product_data);
    res.status(201).json({
      success: true,
      message: "Product created successfully!",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const getProductsFromDB: RequestHandler = async (req, res, next) => {
  try {
    const data = await ProductServices.getProductsFromDB();
    res.status(201).json({
      success: true,
      message: "Products fetched successfully!",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const ProductControllers = {
  createProductIntoDB,
  getProductsFromDB,
};
