import { React, useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import "./LessonInclude.scss";
import { useDispatch } from 'react-redux';
import { lessonIncludeForm } from "../../actions/tutorActions";

const LessonInclude = (props) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.lessonInclude);
  }, [props]);


  useEffect(() => {
    data ? setLessonInclude(data) : setLessonInclude({
      curriculum: false,
      proficiency: false,
      homework: false,
      quizzes: false,
      learningMaterial: false,
      readingExercise: false,
      writtingExercise: false,
      lessonPlans: false,
    })
  }, [data]);

  const dispatch = useDispatch();

  const [LessonInclude, setLessonInclude] = useState({});

  const handleChangeInput = (event) => {
    const inputs = { ...LessonInclude };
    inputs[event.target.name] = event.target.checked;
    setLessonInclude(inputs);
  };

  useEffect(() => {
    dispatch(lessonIncludeForm(LessonInclude));
  });

  return (
    <div className="weeklyTime_div">
      <h6 className="time_heading">Lesson Include:</h6>
      <Row className="lesson-body">
        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={handleChangeInput}
              type="checkbox"
              label="Curriculam"
              name="curriculum"
              checked={LessonInclude.curriculum === true}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Proficiency Assesment"
              name="proficiency"
              checked={LessonInclude.proficiency === true}
              onChange={handleChangeInput}
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={handleChangeInput}
              type="checkbox"
              label="Homework"
              name="homework"
              checked={LessonInclude.homework === true}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={handleChangeInput}
              type="checkbox"
              label="Quizzes/Tests"
              name="quizzes"
              checked={LessonInclude.quizzes === true}
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Learning Materials"
              name="learningMaterial"
              checked={LessonInclude.learningMaterial === true}
              onChange={handleChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Reading Exercise"
              name="readingExercise"
              checked={LessonInclude.readingExercise === true}
              onChange={handleChangeInput}
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Lesson Plans"
              name="lessonPlans"
              checked={LessonInclude.lessonPlans === true}
              onChange={handleChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Writing Exercise"
              name="writtingExercise"
              checked={LessonInclude.writtingExercise === true}
              onChange={handleChangeInput}
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default LessonInclude;
