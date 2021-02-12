import express from 'express'
import {
  getProducts,
  getProductById,
  addProduct,
  editProduct,
  deleteProductById,
  getProductsByCategory,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'
const router = express.Router()

router.route('/').get(getProducts).post(protect, admin, addProduct)

router
  .route('/:id')
  .get(getProductById)
  .put(protect, admin, editProduct)
  .delete(protect, admin, deleteProductById)

router.route('/category/:id').get(getProductsByCategory)

export default router
