import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 50
  const page = Number(req.query.pageNumber) || 1

  let keyword

  if (req.query.keyword) {
    keyword = {
      name: {
        $regex: req.query.keyword,
        $options: 'i',
      },
    }
  }

  if (!req.query.keyword || req.query.keyword === 'null') {
    keyword = {}
  }

  // const category = req.query.category

  const count = await Product.countDocuments({ ...keyword })
  const products = await Product.find({ ...keyword })
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

const addProduct = asyncHandler(async (req, res) => {
  const product = new Product(req.body)

  const createdProduct = product.save()

  res.status(201).json(createdProduct)
})

export { getProducts, getProductById, addProduct }
