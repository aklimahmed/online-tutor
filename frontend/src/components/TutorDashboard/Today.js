import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./Today.scss"

const Today = () => {
  return (
    <div>
        <Row>
            <Col>
            <Card bg="light" text="dark" className="mb-2 today-card">
        <Card.Body className="d-flex justify-content-between align-items-center">
          <Card.Text className="mt-2 todays-text">Todays Income</Card.Text>
          <Card.Text className="todays-number">4150</Card.Text>
        </Card.Body>
      </Card>
      <Card bg="light" text="dark" className="mb-2 today-card">
        <Card.Body className="d-flex justify-content-between align-items-center">
          <Card.Text className="mt-2 todays-text">Total Income</Card.Text>
          <Card.Text className="todays-number">4150</Card.Text>
        </Card.Body>
      </Card>
            </Col>
            <Col>
            <Card bg="light" text="dark" className="mb-2 today-card">
        <Card.Body className="d-flex justify-content-between align-items-center">
          <Card.Text className="mt-2 todays-text">Todays Class</Card.Text>
          <Card.Text className="todays-number">7</Card.Text>
        </Card.Body>
      </Card>
      <Card bg="light" text="dark" className="mb-2 today-card">
        <Card.Body className="d-flex justify-content-between align-items-center">
          <Card.Text className="mt-2 todays-text">Tomorrow Class</Card.Text>
          <Card.Text className="todays-number">8</Card.Text>
        </Card.Body>
      </Card>
            </Col>
        </Row>
        </div>
  )
}

export default Today