import mongoose from 'mongoose'

const courseSchema = mongoose.Schema(
{
  tutor: {
        type: String,
        required: true
      },
    courseByTutor: {
        type: Object
    }
},
  {
    timestamps: true,
  }


)

const Course = mongoose.model("Course", courseSchema);
export default Course;