import express from 'express'
const router = express.Router()
import { authUser, logoutUser } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/login', authUser)
router.post('/logout', logoutUser)
// router.route('/profile').get(protect, getUserProfile)

export default router
