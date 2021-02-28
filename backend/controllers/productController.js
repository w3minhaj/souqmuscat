import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 20
  const page = Number(req.query.page) || 1
  let q

  if (req.query.q) {
    q = {
      name: {
        $regex: req.query.q,
        $options: 'i',
      },
    }
  }

  if (!req.query.q || req.query.q === 'null') {
    q = {}
  }

  const count = await Product.countDocuments({ ...q })
  const products = await Product.find({ ...q })
    .sort([['createdAt', -1]])
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .populate('category')

  res.json({ products, page, pages: Math.ceil(count / pageSize) })
})

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).populate('category')

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

const getProductsByCategory = asyncHandler(async (req, res) => {
  const pageSize = 20
  const page = Number(req.query.page) || 1
  const categoryId = req.params.id

  const count = await Product.countDocuments({ category: categoryId })
  const products = await Product.find({ category: categoryId })
    .sort([['createdAt', -1]])
    .limit(pageSize)
    .skip(pageSize * (page - 1))
    .populate('category')

  res.json({ products, page, pages: Math.ceil(count / pageSize) })
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
    shippingDays,
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
    product.shippingDays = shippingDays

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
