import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import "./LastSevenDays.scss"

const LastSevenDays = () => {
  return (
    <div>
      <Row className="mt-4">
      <Col>
      <h5>Last 7 Days</h5>
        <Card bg="light" text="dark" className="mb-2 three-card">
        <Card.Body className="seven-days-card d-flex justify-content-between align-items-center card1 height-width">
          <Card.Text className="mt-2 seven-text"><span className="free-class-2">FREE Class</span> <br />  <span className="small-text">New Students Enrolled</span></Card.Text>
          <Card.Text className="seven-number1">10</Card.Text>
        </Card.Body>
      </Card>
      <Card bg="light" text="dark" className="mb-2 three-card">
        <Card.Body className="d-flex justify-content-between align-items-center card2 height-width">
        <Card.Text className="mt-2 seven-text"><span className="free-class-2">Batch Class</span> <br />  <span className="small-text">New Students Enrolled</span></Card.Text>
          <Card.Text className="seven-number2">10</Card.Text>
        </Card.Body>
      </Card>
      <Card bg="light" text="dark" className="mb-2 three-card">
        <Card.Body className="d-flex justify-content-between align-items-center card3 height-width">
        <Card.Text className="mt-2 seven-text"><span className="free-class-2">One-to-One Class</span> <br />  <span className="small-text">New Students Enrolled</span></Card.Text>
          <Card.Text className="seven-number3">10</Card.Text>
        </Card.Body>
      </Card>
            </Col>

            <Col>
            <h5>Running Class/Course:</h5>
            <Card bg="light" text="dark" className="mb-2 three-card">
        <Card.Body className="seven-days-card d-flex justify-content-between align-items-center card4 height-width">
        <Card.Text className="mt-2 seven-text"><span className="free-class-2">FREE Class</span></Card.Text>
          <Card.Text className="seven-number4">10</Card.Text>
        </Card.Body>
      </Card>
      <Card bg="light" text="dark" className="mb-2 three-card">
        <Card.Body className="d-flex justify-content-between align-items-center card5 height-width">
        <Card.Text className="mt-2 seven-text"><span className="free-class-2">Batch Class</span></Card.Text>
          <Card.Text className="seven-number5">10</Card.Text>
        </Card.Body>
      </Card>
      <Card bg="light" text="dark" className="mb-2 three-card">
        <Card.Body className="d-flex justify-content-between align-items-center card6 height-width">
        <Card.Text className="mt-2 seven-text"><span className="free-class-2">One-to-One Class</span></Card.Text>
          <Card.Text className="seven-number6">10</Card.Text>
        </Card.Body>
      </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LastSevenDays;
