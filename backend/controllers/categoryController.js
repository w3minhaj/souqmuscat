import asyncHandler from 'express-async-handler'
import Category from '../models/categoryModel.js'

const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({})

  res.json(categories)
})

const addCategory = asyncHandler(async (req, res) => {
  const { name, nameInArabic } = req.body

  if (name) {
    const category = new Category({
      name,
      nameInArabic,
    })

    const createdCategory = await category.save()

    res.status(201).json(createdCategory)
  } else {
    throw new Error('No category name')
  }
})

const deleteCategory = asyncHandler(async (req, res) => {
  const { _id } = req.params

  const deletedCategory = await Category.deleteOne({ _id })

  if (!deletedCategory) {
    throw new Error('No category with this id')
  }

  res.status(204).json(deletedCategory)
})

export { addCategory, getCategories, deleteCategory }
