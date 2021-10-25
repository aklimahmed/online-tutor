import express from 'express'
const router = express.Router()
import {
    createCourse, getCourseDetails, deleteCourse
} from '../controllers/courseController.js'


router.route('/').post(createCourse)
router.route('/tutor/view/:id').get(getCourseDetails)
router.route('/tutor/delete/:id').delete(deleteCourse)

export default router;