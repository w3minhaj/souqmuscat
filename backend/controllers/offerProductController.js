import asyncHandler from 'express-async-handler'
import OfferProduct from '../models/offerProductModel.js'

const getOfferProduct = asyncHandler(async (req, res) => {
  const product = await OfferProduct.findOne({})

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Limited Time Offer Product not found')
  }
})

const addOfferProduct = asyncHandler(async (req, res) => {
  const product = new OfferProduct(req.body)

  OfferProduct.deleteMany({})

  const createdProduct = product.save()

  res.status(201).json(createdProduct)
})

export { getOfferProduct, addOfferProduct }
