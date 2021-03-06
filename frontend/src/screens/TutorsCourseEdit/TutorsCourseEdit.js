import React, { useState, useEffect } from "react";
import TutorsCourseEditComponent from '../../components/TutorsCourseEdit/TutorsCourseEditComponent'
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import { editCourse } from "../../actions/courseActions";
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const TutorsCourseEdit = () => {

  const history = useHistory();
  
  const { id } = useParams();

  const [singleCourse, setSingleCourse] = useState({})

  useEffect(() => {
      axios
      .get(`http://localhost:5000/api/course/tutor/singlecourse/${id}`)
      .then((data) => setSingleCourse(data.data.course));
  },[id]);

  const dispatch = useDispatch();

  const courseByTutor = useSelector (
    (state) => state.courseByTutorForm.courseByTutor
  );

  const handleCourseFormUpdate = (e) => {
    e.preventDefault();
    dispatch(
      editCourse(
        id, 
        courseByTutor
        )
      );

      history.replace(`/course/tutor/singlecourse/${id}`)
  };

  return (
    <Container>
      <form onSubmit={handleCourseFormUpdate}>
        <TutorsCourseEditComponent singleCourse={singleCourse} />
        <div className="d-flex justify-content-center">
          <button
            className="update_button form_button btn btn-primary mt-3 mb-5"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </Container>
  );
};

export default TutorsCourseEdit;
