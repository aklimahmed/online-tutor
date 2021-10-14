import { React, useState, useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useDispatch} from "react-redux";
import "./ExtraQualifications.scss";
import { extraQualificationForm } from "../../actions/tutorActions";

const ExtraQualifications = () => {

  const [input, setInput] = useState([
    {
      id: uuidv4(),
      courseTitle: "",
      duration: "",
      year: "",
      institute: "",
      status: "",
    },
  ]);
  const handleChangeInput = (id, event) => {
    const newinput = input.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInput(newinput);
  };

  const handleAddFields = (e) => {
    e.preventDefault();
    setInput([
      ...input,
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
    const values = [...input];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInput(values);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(extraQualificationForm(input));
  });


  return (
    <div className="weeklyTime_div">
      <h6 className="time_heading">Extra Qualification or Trainings:</h6>
      {input.map((inputField) => (
        <Row key={inputField.id}>
          <Col className="flex-col1" md={3}>
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
          <Col className="flex-col2" md={2}>
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
          <Col className="flex-col2" md={2}>
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
          <Col className="flex-col" md={3}>
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
          <Col className="flex-col" md={2}>
          <div className="d-flex">
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            >
              <Form.Label>Select status :</Form.Label>
              <select
                className="form-select"
                name="status"
                onChange={(event) => handleChangeInput(inputField.id, event)}
              >
                <option style={{ display: "none" }}>Select status</option>
                <option>completed</option>
                <option>on going</option>
              </select>
            </Form.Group>
            <button
              type="button"
              className="btn-close px-2 close_button"
              disabled={input.length === 1}
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

export default ExtraQualifications;
