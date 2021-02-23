import express from 'express'
import {
  getOfferProduct,
  addOfferProduct,
} from '../controllers/offerProductController.js'
import { protect, admin } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').get(getOfferProduct).post(protect, admin, addOfferProduct)

export default router
