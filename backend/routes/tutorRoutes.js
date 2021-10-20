import express from 'express'
const router = express.Router()
import {
    createTutor,
    getTutorProfile,
    editTutor
} from '../controllers/tutorController.js'


router.route('/').post(createTutor)
router
  .route('/profile/:id')
  .get(getTutorProfile)
  router.route('/profile/edit/:id').put(editTutor)
  

export default router;
