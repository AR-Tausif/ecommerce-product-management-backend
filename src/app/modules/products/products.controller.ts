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

const getSingleProduct: RequestHandler = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const data = await ProductServices.getSingleProduct(productId);
    res.status(201).json({
      success: true,
      message: "Product fetched successfully!",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const updateSingleProduct: RequestHandler = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const new_product_data = req.body;
    const data = await ProductServices.updateSingleProduct(
      productId,
      new_product_data
    );
    res.status(201).json({
      success: true,
      message: "Product updated successfully!",
      data,
    });
  } catch (error) {
    next(error);
  }
};
const deleteSingleProduct: RequestHandler = async (req, res, next) => {
  try {
    const { productId } = req.params;

    const data = await ProductServices.deleteSingleProduct(productId);
    res.status(201).json({
      success: true,
      message: "Product deleted successfully!",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const ProductControllers = {
  createProductIntoDB,
  getProductsFromDB,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
};
