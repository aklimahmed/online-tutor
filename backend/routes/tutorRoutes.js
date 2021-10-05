import express from 'express'
const router = express.Router()
import {
    createTutor
} from '../controllers/tutorController.js'

router.route('/').post(createTutor)

export default router
