import mongoose from "mongoose";

const tutorSchema = mongoose.Schema(
  {
    user:{
      type:String,
      required: true,
      unique: true,
    },
    basic: {
      type: Object,
      required: true,
    },
    academic: {
      type: Object,
      required: true,
    },
    exQualification: {
      type: Array,
      required: true,
    },
    woExperience: {
      type: Array,
      required: true,
    },
    WeeklyTime: {
      type: Array,
      required: true,
    },
    subjectTeaches: {
      type: Object,
      required: true,
    },
    teachesAndFess: {
      type: Object,
      required: true,
      
    },
    lessonInclude: {
      type: Object,
      required: true,
      
    },
    exActivities: {
      type: Object,
      required: true,
      
    },
    aboutMe: {
      type: Object,
      required: true,
      
    },
    DocumentUpload: {
      type: Object,
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
