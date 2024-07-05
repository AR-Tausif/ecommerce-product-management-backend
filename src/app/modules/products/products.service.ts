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
const getSingleProduct = async (productId: string) => {
  const product = await Product.findById(productId);
  return product;
};
const updateSingleProduct = async (productId: string, payload: TProduct) => {
  console.log(payload);
  const product = await Product.findOneAndUpdate(
    { _id: productId },
    { $set: payload },
    { new: true }
  );
  return product;
};

export const ProductServices = {
  createProductIntoDB,
  getProductsFromDB,
  getSingleProduct,
  updateSingleProduct,
};
