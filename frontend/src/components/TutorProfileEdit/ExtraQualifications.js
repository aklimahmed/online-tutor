import { React, useState, useEffect } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useDispatch} from "react-redux";
import "./ExtraQualifications.scss";
import { extraQualificationForm } from "../../actions/tutorActions";

const ExtraQualifications = (props) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.exQualification);
  }, [props]);

  useEffect(() => {
    data ? setInput(data): setInput([{
      id: uuidv4(),
      courseTitle: "",
      duration: 0,
      year: 0,
      institute: "",
      status: "",
    }])
  }, [data]);

  const [input, setInput] = useState([]);
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
        duration: 0,
        year: 0,
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
                placeholder="Teaching Strategies"
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
                type="number"
                placeholder="e.g: 10"
                name="duration"
                value={inputField.duration === 0 ? "" : inputField.duration}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
            </Form.Group>
          </Col>
          <Col className="flex-col2" md={2}>
            <Form.Group className="mb-3">
              <Form.Label>Year :</Form.Label>
              <Form.Control
                type="number"
                placeholder="e.g: 2021"
                name="year"
                value={inputField.year === 0 ? "" : inputField.year}
                onChange={(event) => handleChangeInput(inputField.id, event)}
              />
            </Form.Group>
          </Col>
          <Col className="flex-col" md={3}>
            <Form.Group className="mb-3">
              <Form.Label>Institute :</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g: Teachers' Training Institute"
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
                value={inputField.status}
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
