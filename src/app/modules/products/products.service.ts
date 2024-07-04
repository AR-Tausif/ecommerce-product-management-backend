import TProduct from "./products.interface";
import Product from "./products.model";

const createProductIntoDB = async (payload: TProduct) => {
  // const newProduct = await Product.create(payload)
  return payload;
};

export const ProductServices = {
  createProductIntoDB,
};
