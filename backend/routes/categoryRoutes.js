import express from 'express'
const router = express.Router()
import {
  addCategory,
  getCategories,
  deleteCategory,
  editCategory,
  getCategoryById,
} from '../controllers/categoryController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(protect, admin, addCategory).get(getCategories)

router
  .route('/:_id')
  .get(getCategoryById)
  .delete(protect, admin, deleteCategory)
  .put(protect, admin, editCategory)

export default router
