import express from 'express'
const router = express.Router()
import {
    createCourse
} from '../controllers/courseController.js'

// import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(createCourse)


export default router;