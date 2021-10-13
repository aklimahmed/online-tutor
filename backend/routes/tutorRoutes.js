import express from 'express'
const router = express.Router()
import {
    createTutor,
    getTutorProfile
} from '../controllers/tutorController.js'

// import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(createTutor)
router
  .route('/profile/:id')
  .get(getTutorProfile)

export default router;
