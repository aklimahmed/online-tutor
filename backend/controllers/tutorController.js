import asyncHandler from 'express-async-handler'
import Tutor from './../models/tutorModel.js';

const createTutor = asyncHandler(async (req, res) => {
    const { user,basic, academic, exQualification, woExperience, WeeklyTime, 
      subjectTeaches, teachesAndFess, lessonInclude, exActivities, aboutMe, DocumentUpload, VideoUpload
    } = req.body
     
  
    const tutor = await Tutor.create({
        user,basic, academic, exQualification, woExperience, WeeklyTime, 
        subjectTeaches, teachesAndFess, lessonInclude, exActivities, aboutMe, DocumentUpload, VideoUpload
    })
  
    if (tutor) {
      res.status(201).json({
        user: tutor.user,
        basic: tutor.basic,
        academic: tutor.academic,
        exQualification: tutor.exQualification,
        woExperience: tutor.woExperience,
        WeeklyTime: tutor.WeeklyTime,
        subjectTeaches: tutor.subjectTeaches,
        teachesAndFess: tutor.teachesAndFess,
        lessonInclude: tutor.lessonInclude,
        exActivities: tutor.exActivities,
        aboutMe: tutor.aboutMe,
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