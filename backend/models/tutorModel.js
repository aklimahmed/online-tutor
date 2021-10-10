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
    },
  },
  {
    timestamps: true,
  }
);

const Tutor = mongoose.model("Tutor", tutorSchema);

export default Tutor;
