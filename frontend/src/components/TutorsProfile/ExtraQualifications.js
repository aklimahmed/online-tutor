import { React, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import "./ExtraQualifications.scss";

const ExtraQualifications = () => {
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      courseTitle: "",
      duration: "",
      year: "",
      institute: "",
      status: "",
    },
  ]);
  console.log(inputFields);
  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        id: uuidv4(),
        courseTitle: "",
        duration: "",
        year: "",
        institute: "",
        status: "",
      },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  return (
    <div className="weeklyTime_div">
      <h6 className="time_heading">Extra Qualification or Trainings:</h6>
      {inputFields.map((inputField) => (
        <Row key={inputField.id}>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Course Title :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter course title"
                name="courseTitle"
                value={inputField.courseTitle}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3">
              <Form.Label>Duration (in days) :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter duration"
                name="duration"
                value={inputField.duration}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3">
              <Form.Label>Year :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Year"
                name="year"
                value={inputField.year}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Institute :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Institute Name"
                name="institute"
                value={inputField.institute}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
            </Form.Group>
          </Col>
          <Col md={2} className="d-flex">
            <Form.Group
              className="mb-3 justify-content-end"
              controlId="formBasicCheckbox"
            >
              <Form.Label>Select status :</Form.Label>
              <select
                id="Select"
                className="form-select"
                name="status"
                onChange={(event) => handleChangeInput(inputField.id, event)}
              >
                <option style={{ display: "none" }}>status</option>
                <option>completed</option>
                <option>on going</option>
              </select>
            </Form.Group>
            <button
              type="button"
              class="btn-close px-2 close_button"
              disabled={inputFields.length === 1}
              aria-label="Close"
              onClick={() => handleRemoveFields(inputField.id)}
            ></button>
          </Col>
        </Row>
      ))}
      <button onClick={handleAddFields} className="addMore">
        + Add more
      </button>
    </div>
  );
};

export default ExtraQualifications;
