import asyncHandler from 'express-async-handler'
import Student from './../models/studentModel.js';

const createStudent = asyncHandler(async (req, res) => {
    const { user, studentBasic, studentAcademic, studentExtraActivities, studentDocumentsUpload
    } = req.body

    const student = await Student.create({
        user, studentBasic, studentAcademic, studentExtraActivities, studentDocumentsUpload
    })
  
    if (student) {
      res.status(201).json({
        user: student.user,
        studentBasic: student.studentBasic,
        studentAcademic: student.studentAcademic,
        studentExtraActivities: student.studentExtraActivities,
        studentDocumentsUpload: student.studentDocumentsUpload
      })
    } else {
      res.status(400)
      throw new Error('Unable to submit the form')
    }
  })

  const getStudent = asyncHandler(async (req, res) => {
    const student = await Student.find({ user: req.params.id})
  
    if(student) {
      res.send({student})
    }else {
      res.status(404)
      throw new Error('Student not found')
    }
  })


  export {
    createStudent,
    getStudent
  }