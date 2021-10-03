import React from "react";
import { Row, Form, Container } from "react-bootstrap";

const AboutMe = () => {
  return (
    <Container>
      <Row className="weeklyTime_div">
      <h6 className="time_heading">About me:</h6>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Row>

      <Row className="weeklyTime_div">
      <h6 className="time_heading">About my session</h6>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Row>
    </Container>
  );
};

export default AboutMe;
