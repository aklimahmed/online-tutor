import React from "react";
import CreateNewCourse from "../../components/TutorsCourses/CreateNewCourse";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { createCourse } from "../../actions/courseActions";

const TutorsCourseAdd = () => {
  const dispatch = useDispatch();
  const courseByTutor = useSelector(
    (state) => state.courseByTutorForm.courseByTutor
  );

  const tutor = useSelector((state) => state.userLogin.userInfo);
  const handleCourseFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createCourse(tutor, courseByTutor));
  };

  return (
    <Container>
      <form onSubmit={handleCourseFormSubmit}>
        <CreateNewCourse />
        <div className="d-flex justify-content-center">
          <button
            className="form_button btn btn-primary mt-3 mb-5"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </Container>
  );
};

export default TutorsCourseAdd;