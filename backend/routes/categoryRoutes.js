import express from 'express'
const router = express.Router()
import {
  addCategory,
  getCategories,
  deleteCategory,
} from '../controllers/categoryController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').post(protect, admin, addCategory).get(getCategories)

router.route('/:_id').delete(protect, admin, deleteCategory)

export default router
