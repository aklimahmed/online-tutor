import express from 'express'
const router = express.Router()
import {
    createStudent, getStudent
} from '../controllers/studentController.js'

// import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(createStudent)
router.route('/view/:id').get(getStudent)

export default router;