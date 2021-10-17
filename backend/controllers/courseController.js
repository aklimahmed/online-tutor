import asyncHandler from 'express-async-handler'
import Course from './../models/courseModel.js';

const createCourse = asyncHandler(async (req, res) => {
    const { tutor, courseByTutor
    } = req.body
     
  
    const course = await Course.create({
        tutor, courseByTutor
    })
  
    if (course) {
      res.status(201).json({
        tutor: course.user,
        courseByTutor: course.courseByTutor
      })
    } else {
      res.status(400)
      throw new Error('Unable to create the course')
    }
  })


  export {
    createCourse
  }