import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser
} from '../controllers/userController.js'

router.route('/').post(registerUser)
//router.route('/tutorsprofileform').post(tutorsProfileForm)
router.post('/login', authUser)

export default router
