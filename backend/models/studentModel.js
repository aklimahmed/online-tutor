import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    user:{
      type:String,
      required: true,
      unique: true
    },
    studentBasic: {
      type: Object
    },
    studentAcademic: {
      type: Object
    },
    studentExtraActivities: {
      type: Object
    },
    studentDocumentsUpload: {
      type: Object
    }
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);
export default Student;