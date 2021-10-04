import { React, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
const WorkExperience = () => {
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      institute: "",
      designation: "",
      period: "",
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
        institute: "",
        designation: "",
        period: "",
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

  const handleCheck = () => {
    console.log("trur");
  };

  return (
    <div className="weeklyTime_div">
      <h6 className="time_heading">Work Experience:</h6>
      {inputFields.map((inputField) => (
        <Row key={inputField.id}>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Institute Name :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Institute Name"
                name="institute"
                value={inputField.institute}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Designation :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Designation"
                name="designation"
                value={inputField.designation}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Form.Group className="mb-3">
              <Form.Label>Period :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Year"
                name="period"
                value={inputField.period}
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
                <option style={{ display: "none", color: "white" }}>Status</option>
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

export default WorkExperience;