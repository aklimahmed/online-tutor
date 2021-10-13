import express from 'express'
const router = express.Router()
import {
    createStudent
} from '../controllers/studentController.js'

// import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(createStudent)


export default router;