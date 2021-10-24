import asyncHandler from "express-async-handler";
import Course from "./../models/courseModel.js";

const createCourse = asyncHandler(async (req, res) => {
  const { tutor, courseByTutor } = req.body;

  const course = await Course.create({
    tutor,
    courseByTutor,
  });

  if (course) {
    res.status(201).json({
      tutor: course.tutor,
      courseByTutor: course.courseByTutor,
    });
  } else {
    res.status(400);
    throw new Error("Unable to create the course");
  }
});

const getCourseDetails = asyncHandler(async (req, res) => {
  const course = await Course.find({ tutor: req.params.id });

  if (course) {
    res.send({
      course,
    });
  } else {
    res.status(404);
    throw new Error("Unable to get the courses");
  }
});

// delete
const deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id)

  if (course) {
    await course.remove()
    res.json({ message: 'Product removed' })
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})


export { createCourse,
         getCourseDetails, 
         deleteCourse 
       };
