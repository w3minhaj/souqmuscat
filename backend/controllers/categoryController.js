import asyncHandler from 'express-async-handler'
import Category from '../models/categoryModel.js'

const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({})

  res.json(categories)
})

const getCategoryById = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params._id)

  if (category) {
    res.json(category)
  } else {
    res.status(404)
    throw new Error('Category not found')
  }
})

const addCategory = asyncHandler(async (req, res) => {
  const { name, nameInArabic } = req.body

  if (name && nameInArabic) {
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

const editCategory = asyncHandler(async (req, res) => {
  const { _id } = req.params

  const { name, nameInArabic } = req.body

  const category = await Category.findById({ _id })

  if (category) {
    category.name = name
    category.nameInArabic = nameInArabic

    const updatedCategory = await category.save()
    res.json(updatedCategory)
  } else {
    res.status(404)
    throw new Error('Category not found')
  }
})

export {
  addCategory,
  getCategories,
  deleteCategory,
  editCategory,
  getCategoryById,
}
