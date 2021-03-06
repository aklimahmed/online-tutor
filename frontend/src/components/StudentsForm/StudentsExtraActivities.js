import { React, useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { studentExtraActivitiesForm } from "../../actions/studentActions";

const StudentsExtraActivities = () => {

  const dispatch = useDispatch();
  const [ExtraActivities, setExtraActivities] = useState({
    foreignLanguages: false,
    Volunteering: false,
    studentCouncil: false,
    clubExercise: false,
    sports: false,
    arts: false,
    studyingAbroad: false,
    residentAdvisor: false,
  });

  const handleChangeInput = (event) => {
    const inputs = { ...ExtraActivities };
    inputs[event.target.name] = event.target.checked;
    setExtraActivities(inputs);
  };

  useEffect(() => {
    dispatch(studentExtraActivitiesForm(ExtraActivities));
  });

  return (
    <div className="weeklyTime_div">
      <h6 className="time_heading">Extra Activities:</h6>
      <Row className="lesson-body">
        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Foreign Languages"
              name="foreignLanguages"
              onChange={handleChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Volunteering & Fundraising"
              name="Volunteering"
              onChange={handleChangeInput}
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Student Council"
              name="studentCouncil"
              onChange={handleChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Club Exec Board Position"
              name="clubExercise"
              onChange={handleChangeInput}
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Sports"
              name="sports"
              onChange={handleChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Arts"
              name="arts"
              onChange={handleChangeInput}
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Studying Abroad"
              name="studyingAbroad"
              onChange={handleChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Resident Advisor (RA)"
              name="residentAdvisor"
              onChange={handleChangeInput}
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default StudentsExtraActivities;
