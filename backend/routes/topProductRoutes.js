import express from 'express'
const router = express.Router()
import {
  addTopProduct,
  getTopProducts,
  deleteTopProduct,
} from '../controllers/topProductController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getTopProducts).post(protect, admin, addTopProduct)

router.route('/:id').delete(protect, admin, deleteTopProduct)

export default router
