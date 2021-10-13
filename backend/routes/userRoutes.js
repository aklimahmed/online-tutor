import express from 'express'
const router = express.Router()
import {
  authUser,
  registerUser
} from '../controllers/userController.js'

router.route('/').post(registerUser)
<<<<<<< HEAD
=======

>>>>>>> ee481aaa853f0c62ded557811457d6814e703780
router.post('/login', authUser)

export default router;
