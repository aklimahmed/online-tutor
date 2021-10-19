import React from 'react'
import CreateNewCourse from '../../components/TutorsCourses/CreateNewCourse'
import { useDispatch, useSelector } from "react-redux";
import { Button, Container } from 'react-bootstrap'
import { createCourse } from "../../actions/courseActions";
import AllCourses from '../../components/TutorsCourses/AllCourses';

const TutorsCourses = () => {

    const dispatch = useDispatch();
    const courseByTutor = useSelector (
        (state) => state.courseByTutorForm.courseByTutor
      );

      const tutor = useSelector((state) => state.userLogin.userInfo);
      const handleCourseFormSubmit = (e) => {
        e.preventDefault();
        dispatch(
          createCourse(
            tutor,
            courseByTutor
          )
        );
      };
    

    return (
        <Container>
          <AllCourses />  
            <form onSubmit={handleCourseFormSubmit}>
            <CreateNewCourse />
            <div className="button-2" style={{ paddingLeft: "20px" }}>
            <Button
              type="submit"
              style={{ float: "right", backgroundColor: "#008593" }}
            >
              SAVE
            </Button>
          </div>
            </form>
        </Container>
    )
}

export default TutorsCourses
