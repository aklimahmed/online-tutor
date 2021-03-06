import { React, useEffect, useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import "./LessonInclude.scss";
import { useDispatch } from 'react-redux';
import { lessonIncludeForm } from "../../actions/tutorActions";

const LessonInclude = () => {

  const dispatch = useDispatch();

  const [LessonInclude, setLessonInclude] = useState({
    curriculum: false,
    proficiency: false,
    homework: false,
    quizzes: false,
    learningMaterial: false,
    readingExercise: false,
    writtingExercise: false,
    lessonPlans: false,
  });

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
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Proficiency Assesment"
              name="proficiency"
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
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={handleChangeInput}
              type="checkbox"
              label="Quizzes/Tests"
              name="quizzes"
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Learning Materials"
              name="learningMaterial"
              onChange={handleChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Reading Exercise"
              name="readingExercise"
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
              onChange={handleChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Writing Exercise"
              name="writtingExercise"
              onChange={handleChangeInput}
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default LessonInclude;
