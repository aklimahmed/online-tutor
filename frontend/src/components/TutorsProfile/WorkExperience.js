import { React, useState, useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { WorkExperienceForm } from "../../actions/tutorActions";
const WorkExperience = () => {
  const dispatch = useDispatch();

  const [WorkExperience, setWorkExperience] = useState([
    {
      id: uuidv4(),
      institute: "",
      designation: "",
      period: "",
      status: "",
    },
  ]);

  const handleChangeInput = (id, event) => {
    const newWorkExperience = WorkExperience.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setWorkExperience(newWorkExperience);
  };

  const handleAddFields = (e) => {
    e.preventDefault();
    setWorkExperience([
      ...WorkExperience,
      {
        id: uuidv4(),
        institute: "",
        designation: "",
        period: "",
        status: "",
      },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...WorkExperience];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setWorkExperience(values);
  };

  useEffect(() => {
    dispatch(WorkExperienceForm(WorkExperience));
  });

  return (
    <div className="weeklyTime_div">
      <h6 className="time_heading">Work Experience:</h6>
      {WorkExperience.map((inputField) => (
        <Row key={inputField.id}>
          <Col className="flex-col" md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Institute Name :</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g: Dhaka City College"
                name="institute"
                value={inputField.institute}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
            </Form.Group>
          </Col>
          <Col className="flex-col" md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Designation :</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g: Assistant Teacher"
                name="designation"
                value={inputField.designation}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
            </Form.Group>
          </Col>
          <Col className="flex-col" md={2}>
            <Form.Group className="mb-3">
              <Form.Label>Period :</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g: 2019 - 2021"
                name="period"
                value={inputField.period}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
            </Form.Group>
          </Col>
          <Col className="flex-col" md={2}>
            <div className="d-flex">
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Select status :</Form.Label>
                <select
                  className="form-select"
                  name="status"
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                >
                  <option style={{ display: "none", color: "white" }}>
                    Select status
                  </option>
                  <option>completed</option>
                  <option>on going</option>
                </select>
              </Form.Group>
              <button
                type="button"
                className="btn-close px-2 close_button"
                disabled={WorkExperience.length === 1}
                aria-label="Close"
                onClick={() => handleRemoveFields(inputField.id)}
              ></button>
            </div>
          </Col>
        </Row>
      ))}
      <button onClick={handleAddFields} className="addMore">
        + Add more
      </button>
    </div>
  );
};

export default WorkExperience;
