import mongoose from "mongoose";

const tutorSchema = mongoose.Schema(
  {
    basic: {
      type: Object,
      required: true,
    },
    academic: {
      type: Object,
      
    },
    exQualification: {
      type: Array,
      
    },
    woExperience: {
      type: Array,
      required: true,
    },
    WeeklyTime: {
      type: Array,
      
    },
    subjectTeaches: {
      type: Object,
    },
    teachesAndFess: {
      type: Object,
      
    },
    lessonInclude: {
      type: Object,
      
    },
    exActivities: {
      type: Object,
      
    },
    aboutMe: {
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
    },
  },
  {
    timestamps: true,
  }
);

const Tutor = mongoose.model("Tutor", tutorSchema);

export default Tutor;
