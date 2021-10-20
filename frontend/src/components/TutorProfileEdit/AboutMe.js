import { React, useState, useEffect } from "react";
import { Row, Form } from "react-bootstrap";
import { aboutMeForm } from "../../actions/tutorActions";
import { useDispatch } from "react-redux";

const AboutMe = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.aboutMe);
  }, [props]);

  useEffect(() => {
    data
      ? setAboutMe(data)
      : setAboutMe({
          aboutMe: "",
          aboutSession: "",
        });
  }, [data]);

  const dispatch = useDispatch();
  const [AboutMe, setAboutMe] = useState({});

  const handleChangeInput = (event) => {
    const inputs = { ...AboutMe };
    inputs[event.target.name] = event.target.value;
    setAboutMe(inputs);
  };

  useEffect(() => {
    dispatch(aboutMeForm(AboutMe));
  });

  return (
    <div>
      <Row className="weeklyTime_div">
        <h6 className="time_heading">About me:</h6>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            type="text"
            as="textarea"
            rows={3}
            name="aboutMe"
            defaultValue={data ? data.aboutMe : ""}
            onBlur={handleChangeInput}
          />
        </Form.Group>
      </Row>

      <Row className="weeklyTime_div">
        <h6 className="time_heading">About my session:</h6>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            type="text"
            as="textarea"
            rows={3}
            name="aboutSession"
            defaultValue={data ? data.aboutSession : ""}
            onBlur={handleChangeInput}
          />
        </Form.Group>
      </Row>
    </div>
  );
};

export default AboutMe;
