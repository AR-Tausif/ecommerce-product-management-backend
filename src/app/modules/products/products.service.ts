import TProduct from './products.interface'
import Product from './products.model'

const createProductIntoDB = async (payload: TProduct) => {
  const newProduct = await Product.create(payload)
  return newProduct
}
const getProductsFromDB = async ({ searchTerm }: { searchTerm: string }) => {
  let products

  if (searchTerm) {
    products = await Product.find({
      $or: [
        { name: new RegExp(searchTerm, 'i') },
        { description: new RegExp(searchTerm, 'i') },
      ],
    }).select('-_id') // Exclude the _id field
  } else {
    products = await Product.find({}).select('-_id') // Exclude the _id field
  }

  return products
}
const getSingleProduct = async (productId: string) => {
  const product = await Product.findById(productId).select('-_id')
  return product
}
const updateSingleProduct = async (productId: string, payload: TProduct) => {
  const product = await Product.findOneAndUpdate(
    { _id: productId },
    { $set: payload },
    { new: true },
  ).select('-_id')
  return product
}
const deleteSingleProduct = async (productId: string) => {
  await Product.findOneAndDelete({ _id: productId }).select('-_id')
  return null
}

export const ProductServices = {
  createProductIntoDB,
  getProductsFromDB,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
}
