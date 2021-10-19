import { React, useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { extraActivitiesForm } from "../../actions/tutorActions";

const ExtraActivities = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.exActivities);
  }, [props]);

  useEffect(() => {
    data
      ? setExtraActivities(data)
      : setExtraActivities({
          foreignLanguages: false,
          Volunteering: false,
          studentCouncil: false,
          clubExercise: false,
          sports: false,
          arts: false,
          studyingAbroad: false,
          residentAdvisor: false,
        });
  }, [data]);

  const dispatch = useDispatch();
  const [ExtraActivities, setExtraActivities] = useState({});

  const handleChangeInput = (event) => {
    const inputs = { ...ExtraActivities };
    inputs[event.target.name] = event.target.checked;
    setExtraActivities(inputs);
  };

  useEffect(() => {
    dispatch(extraActivitiesForm(ExtraActivities));
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
              checked={ExtraActivities.foreignLanguages === true}
              onChange={handleChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Volunteering & Fundraising"
              name="Volunteering"
              checked={ExtraActivities.Volunteering === true}
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
              checked={ExtraActivities.studentCouncil === true}
              onChange={handleChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Club Exec Board Position"
              name="clubExercise"
              checked={ExtraActivities.clubExercise === true}
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
              checked={ExtraActivities.sports === true}
              onChange={handleChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Arts"
              name="arts"
              checked={ExtraActivities.arts === true}
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
              checked={ExtraActivities.studyingAbroad === true}
              onChange={handleChangeInput}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Resident Advisor (RA)"
              name="residentAdvisor"
              checked={ExtraActivities.residentAdvisor === true}
              onChange={handleChangeInput}
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default ExtraActivities;
