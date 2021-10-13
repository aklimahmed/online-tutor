import asyncHandler from 'express-async-handler'
import Student from './../models/studentModel.js';

const createStudent = asyncHandler(async (req, res) => {
    const { user, studentBasic, studentAcademic
    } = req.body
     
  
    const student = await Student.create({
        user,studentBasic,studentAcademic
    })
  
    if (student) {
      res.status(201).json({
        user: student.user,
        studentBasic: student.studentBasic,
        studentAcademic: student.studentAcademic
      })
    } else {
      res.status(400)
      throw new Error('Unable to submit the form')
    }
  })


  export {
    createStudent
  }