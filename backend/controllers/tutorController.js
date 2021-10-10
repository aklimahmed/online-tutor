import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import Tutor from '../models/tutorModel.js'

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const createTutor = asyncHandler(async (req, res) => {
    const { basic, academic, exQualification, WorkExperience, WeeklyTime, 
        SubjectTeaches, TeachesAndFees, LessonInclude, ExtraActivities, AboutMe, DocumentUpload, VideoUpload
    } = req.body
     
  
    const tutor = await Tutor.create({
        basic, academic, exQualification, WorkExperience, WeeklyTime, 
        SubjectTeaches, TeachesAndFees, LessonInclude, ExtraActivities, AboutMe, DocumentUpload, VideoUpload
    })
  
    if (tutor) {
      res.status(201).json({
        basic: tutor.basic,
        academic: tutor.academic,
        exQualification: tutor.exQualification,
        WorkExperience: tutor.WorkExperience,
        WeeklyTime: tutor.WeeklyTime,
        SubjectTeaches: tutor.SubjectTeaches,
        TeachesAndFees: tutor.TeachesAndFees,
        LessonInclude: tutor.LessonInclude,
        ExtraActivities: tutor.ExtraActivities,
        AboutMe: tutor.AboutMe,
        DocumentUpload: tutor.DocumentUpload,
        VideoUpload: tutor.VideoUpload
      })
    } else {
      res.status(400)
      throw new Error('Unable to submit the form')
    }
  })
  

  export {
    createTutor
  }