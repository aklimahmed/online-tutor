import express from 'express'
const router = express.Router()
import {
    createCourse, getCourseDetails
} from '../controllers/courseController.js'

// import { protect } from '../middleware/authMiddleware.js'

// router.route('/').post(createCourse).get(getCourseDetails)

router.route('/').post(createCourse)
router.route('/tutor/:id').get(getCourseDetails)

export default router;