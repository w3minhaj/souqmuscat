import express from 'express'
import {
  addOrderItems,
  getOrders,
  getOrderById,
} from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').post(addOrderItems).get(protect, admin, getOrders)

router.route('/:_id').get(protect, admin, getOrderById)

export default router
