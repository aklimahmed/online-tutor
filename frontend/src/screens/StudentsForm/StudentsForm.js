import React from "react";
import StudentsBasicInfo from "../../components/StudentsForm/StudentsBasicInfo";
import AcademicInfo from "../../components/StudentsForm/AcademicInfo";
import StudentDocumentsUpload from "../../components/StudentsForm/StudentDocumentsUpload";
import { useDispatch, useSelector } from "react-redux";
import { createStudent } from "../../actions/studentActions";
import StudentsExtraActivities from "../../components/StudentsForm/StudentsExtraActivities";
import { useHistory } from 'react-router-dom'
const StudentsForm = () => {
  const dispatch = useDispatch();

  const studentBasicInfo = useSelector(
    (state) => state.studentBasicInfoForm.studentBasicInfo
  );

  const studentAcademicInfo = useSelector(
    (state) => state.studentAcademicInfoForm.studentAcademicInfo
  );

  const studentExtraActivities = useSelector(
    (state) => state.studentExtraActivitiesForm.studentExtraActivities
  );

  const user = useSelector((state) => state.userLogin.userInfo);
  const id = useSelector((state) => state.userLogin.userInfo._id);
  const history = useHistory()

  const handleStudentFormSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createStudent(
        user,
        studentBasicInfo,
        studentAcademicInfo,
        studentExtraActivities
      )
    );

    history.replace(`/student/form/edit/${id}`)
  };

  return (
    <form onSubmit={handleStudentFormSubmit}>
      <StudentsBasicInfo />
      <AcademicInfo />
      <StudentDocumentsUpload />
      <StudentsExtraActivities />
      <div className="d-flex justify-content-end">
        <button className="btn btn-secondary mt-3 mb-5" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default StudentsForm;
