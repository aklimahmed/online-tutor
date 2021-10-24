import express from 'express'
const router = express.Router()
import {
    createCourse, getCourseDetails, deleteCourse
} from '../controllers/courseController.js'


// import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(createCourse)
//.get(getCourseDetails)

//router.route('/tutor/:id').post(createCourse)
router.route('/tutor/view/:id').get(getCourseDetails)
router.route('/tutor/delete/:id').delete(deleteCourse)

// router.route('/tutor/:id').post(createCourse)
// router.router('/tutors/')

export default router;