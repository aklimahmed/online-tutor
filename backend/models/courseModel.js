import mongoose from 'mongoose'

const courseSchema = mongoose.Schema({
    tutor: {
        type:String,
        required: true,
        unique: true,
    },
    courseByTutor: {
        type: String
    }
})

const Course = mongoose.model("Course", courseSchema);
export default Course;