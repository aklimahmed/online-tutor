import mongoose from 'mongoose'

const tutorSchema = mongoose.Schema(
  {
     BasicInfo: {
        type: Object,
        required: true
    },
     AcademicQualification: {
        type: Object,
        required: true
    },
      extraQualification: {
        type: Object,
        required: true
    },
      WorkExperience: {
          type: Object,
          required: true
      },
      WeeklyTime: {
          type: Object,
          required: true
      },
      SubjectTeaches: {
        type: Object,
        required: true
    },
      TeachesAndFees: {
        type: Object,
        required: true
    },
      LessonInclude: {
        type: Object,
        required: true
    },
      ExtraActivities: {
        type: Object,
        required: true
    },
      AboutMe: {
        type: Object,
        required: true
    },
      DocumentUpload: {
        type: Object,
        required: true
    },
      VideoUpload: {
        type: String,
            validate: {
               validator: function(v) {
                    return /^https:\/\/www.youtube.com\/.*$/.test(v);
               },
               message: props => `${props.value} is not a valid youtube link.`
            }
      }
  },
  {
    timestamps: true,
  }
)


const Tutor = mongoose.model('Tutor', tutorSchema)

export default Tutor
