import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'
import Product from '../models/productModel.js'

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    mobNo1,
    mobNo2 = '',
    email = '',
    shippingAddress,
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error('No order Items')
  } else if (orderItems && mobNo1 && shippingAddress) {
    const products = orderItems.map(async (item) => {
      const product = await Product.findOne({ _id: item._id })

      if (!product) {
        throw new Error("Can't find the product")
      }

      return {
        name: await product.name,
        qty: item.qty,
        images: await product.images,
        priceInUSD: await product.priceInUSD,
        priceInOMR: await product.priceInOMR,
        shippingPriceInUSD: await product.shippingCharge.find(
          (x) => x.area === shippingAddress
        ).priceInUSD,
        shippingPriceInOMR: await product.shippingCharge.find(
          (x) => x.area === shippingAddress
        ).priceInOMR,
        product: await product._id,
      }
    })

    const items = await Promise.all(products)

    const order = new Order({
      orderItems: items,
      mobileNo: mobNo1,
      mobileNo2: mobNo2,
      email,
      shippingAddress,
      totalPriceInUSD: items.reduce((acc, item) => acc + item.priceInUSD, 0),
      totalPriceInOMR: items.reduce((acc, item) => acc + item.priceInOMR, 0),
      totalShippingPriceInUSD: items.reduce(
        (acc, item) => acc + item.shippingPriceInUSD,
        0
      ),
      totalShippingPriceInOMR: items.reduce(
        (acc, item) => acc + item.shippingPriceInOMR,
        0
      ),
    })

    const createdOrder = await order.save()

    res.status(201).json(createdOrder)
  } else {
    res.status(500)
    throw new Error("Can't place order")
  }
})

const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).sort([['createdAt', -1]])

  res.json(orders)
})

const getOrderById = asyncHandler(async (req, res) => {
  const { _id } = req.params

  const order = await Order.findById({ _id })

  res.json(order)
})

export { addOrderItems, getOrders, getOrderById }
