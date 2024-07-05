import AppError from '../../errors/AppError'
import Product from '../products/products.model'
import { TOrder } from './orders.interface'
import httpStatus from 'http-status'
import Order from './orders.model'

const createNewOrder = async (orderBody: TOrder) => {
  // finding product by product _id
  const existProduct = await Product.findById(orderBody.productId)

  if (!existProduct) {
    throw new AppError(httpStatus.FORBIDDEN, `Product not found`)
  }

  if (!existProduct.inventory.inStock) {
    throw new AppError(httpStatus.FORBIDDEN, `Product already stock out`)
  }
  // when reach quantity zero then will show this error message
  if (existProduct.inventory.quantity < orderBody.quantity) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      `Insufficient quantity available in inventory`,
    )
  }
  // price validating from collect database and then multiply with provided quantity body number
  const priceValid = existProduct.price * orderBody.quantity

  if (orderBody.price !== priceValid) {
    throw new AppError(httpStatus.FORBIDDEN, `Price would be ${priceValid}`)
  }
  existProduct.inventory.quantity -= orderBody.quantity

  if (existProduct.inventory.quantity == 0) {
    existProduct.inventory.inStock = false
  }
  existProduct.save()
  const new_order = await Order.create(orderBody)
  return new_order
}

const getAllOrders = async (query: { email: string }) => {
  let orders
  if (query.email) {
    orders = await Order.find({ email: query.email }).select('-_id')
  } else {
    orders = await Order.find({}).select('-_id')
  }
  return orders
}
export const OrderServices = {
  createNewOrder,
  getAllOrders,
}
