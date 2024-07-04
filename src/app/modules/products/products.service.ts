import TProduct from "./products.interface";
import Product from "./products.model";

const createProductIntoDB = async (payload: TProduct) => {
  const newProduct = await Product.create(payload);
  return newProduct;
};
const getProductsFromDB = async () => {
  const products = await Product.find({});
  return products;
};

export const ProductServices = {
  createProductIntoDB,
  getProductsFromDB,
};
