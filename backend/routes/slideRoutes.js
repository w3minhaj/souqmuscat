import express from 'express'
const router = express.Router()
import {
  getSlides,
  addSlide,
  deleteSlide,
} from '../controllers/slideController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getSlides).post(protect, admin, addSlide)

router.route('/:id').delete(protect, admin, deleteSlide)

export default router
