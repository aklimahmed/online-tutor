import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    user:{
      type:String
    },
    studentBasic: {
      type: Object
    },
    studentAcademic: {
      type: Object
    }
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);
export default Student;