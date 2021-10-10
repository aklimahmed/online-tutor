import mongoose from "mongoose";

const tutorSchema = mongoose.Schema(
  {
    basic: {
      type: Object,
      required: true,
    },
<<<<<<< HEAD
    academic: {
      type: Object,
    },
    exQualification: {
      type: Array,
    },
    WorkExperience: {
      type: Object,
    },
    WeeklyTime: {
      type: Object,
    },
    SubjectTeaches: {
      type: Object,
    },
    TeachesAndFees: {
      type: Object,
    },
    LessonInclude: {
      type: Object,
    },
    ExtraActivities: {
      type: Object,
    },
    AboutMe: {
      type: Object,
    },
    DocumentUpload: {
      type: Object,
      //
    },
    VideoUpload: {
      type: String,
      validate: {
        validator: function (v) {
          return /^https:\/\/www.youtube.com\/.*$/.test(v);
        },
        message: (props) => `${props.value} is not a valid youtube link.`,
      },
=======
     AcademicQualification: {
        type: Object,
        //required: true
    },
      extraQualification: {
        type: Object,
        // required: true
    },
      WorkExperience: {
          type: Object,
          // required: true
      },
      WeeklyTime: {
          type: Object,
          // required: true
      },
      SubjectTeaches: {
        type: Object,
        // required: true
    },
      TeachesAndFees: {
        type: Object,
        // required: true
    },
      LessonInclude: {
        type: Object,
        // required: true
    },
      ExtraActivities: {
        type: Object,
        // required: true
    },
      AboutMe: {
        type: Object,
        // required: true
    },
      DocumentUpload: {
        type: Object,
        // required: true
>>>>>>> 18a760a2c27b6d33459316d36d05d5237d6c4ad0
    },
  },
  {
    timestamps: true,
  }
);

const Tutor = mongoose.model("Tutor", tutorSchema);

export default Tutor;
