import { React, useState } from "react";
import { Row, Form, Container } from "react-bootstrap";

const AboutMe = () => {
  const [AboutMe, setAboutMe] = useState({
    aboutMe: "",
    aboutSession: "",
  });

  const handleChangeInput = (event) => {
    const inputs = { ...AboutMe };
    inputs[event.target.name] = event.target.value;
    setAboutMe(inputs);
  };

  console.log(AboutMe);

  return (
    <Container>
      <Row className="weeklyTime_div">
        <h6 className="time_heading">About me:</h6>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            type="text"
            as="textarea"
            rows={3}
            name="aboutMe"
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
            onBlur={handleChangeInput}
          />
        </Form.Group>
      </Row>
    </Container>
  );
};

export default AboutMe;
