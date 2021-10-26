import express from 'express'
const router = express.Router()
import {
    createCourse, getCourseDetails, deleteCourse, getSingleCourse, editCourse
} from '../controllers/courseController.js'

router.route('/').post(createCourse)
router.route('/tutor/view/:id').get(getCourseDetails)
router.route('/tutor/delete/:id').delete(deleteCourse)
router.route('/tutor/singlecourse/:id').get(getSingleCourse)
router.route('/tutor/edit/:id').put(editCourse)

export default router;