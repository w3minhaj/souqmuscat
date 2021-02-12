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

const addProduct = asyncHandler(async (req, res) => {
  const product = new Product(req.body)

  const createdProduct = product.save()

  res.status(201).json(createdProduct)
})

const editProduct = asyncHandler(async (req, res) => {
  const { id } = req.params

  const {
    name,
    nameInArabic,
    description,
    descriptionInArabic,
    category,
    price,
    images,
    featured,
    shippingCharge,
  } = req.body

  const product = await Product.findById({ _id: id })

  if (product) {
    product.name = name
    product.nameInArabic = nameInArabic
    product.description = description
    product.descriptionInArabic = descriptionInArabic
    product.category = category
    product.price = price
    product.images = images
    product.featured = featured
    product.shippingCharge = shippingCharge

    const updatedProduct = await product.save()
    res.json(updatedProduct)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

const deleteProductById = asyncHandler(async (req, res) => {
  const { id } = req.params

  const deletedProduct = await Product.deleteOne({ _id: id })

  if (!deletedProduct) {
    throw new Error('No Product with this id')
  }

  res.status(204).json(deletedProduct)
})

export {
  getProducts,
  getProductById,
  addProduct,
  editProduct,
  deleteProductById,
  getProductsByCategory,
}
