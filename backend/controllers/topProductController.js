import asyncHandler from 'express-async-handler'
import TopProduct from '../models/topProductModel.js'

const addTopProduct = asyncHandler(async (req, res) => {
  const { product } = req.body

  if (product) {
    const topProduct = new TopProduct({
      product,
    })

    const createdTopProduct = await topProduct.save()

    res.status(201).json(createdTopProduct)
  } else {
    throw new Error("Can't create slide")
  }
})

const getTopProducts = asyncHandler(async (req, res) => {
  const topProducts = await TopProduct.find({}).populate('product')

  res.json(topProducts)
})

const deleteTopProduct = asyncHandler(async (req, res) => {
  const { id } = req.params

  const deletedTopProduct = await TopProduct.deleteOne({ _id: id })

  if (!deletedTopProduct) {
    throw new Error('No Top product with this id')
  }

  res.status(204).json(deletedTopProduct)
})

export { addTopProduct, getTopProducts, deleteTopProduct }
