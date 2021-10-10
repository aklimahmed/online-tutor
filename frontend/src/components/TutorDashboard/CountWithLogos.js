import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./CountWithLogos.scss";
import { MdPeopleOutline } from 'react-icons/md'
import { FcAlarmClock } from 'react-icons/fc'
import { GiTeacher } from 'react-icons/gi'
import { FaChalkboardTeacher } from 'react-icons/fa'

const CountWithLogos = () => {
  return (
    <div className="weeklyTime_div_2">
      <Row className="count-card">
        <Col md={3} className="column-class">
          <Card className="text-center count-logo-card">
            <Card.Body>
            <MdPeopleOutline className="logo"/>
              <Card.Text className="text-center count-number">5400</Card.Text>
              <Card.Text className="text-center count-text">Total Students</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="column-class">
        <Card className="text-center count-logo-card">
            <Card.Body>
             <FcAlarmClock className="logo"/>
              <Card.Text className="text-center count-number">5400</Card.Text>
              <Card.Text className="text-center count-text">Total Lesson/Hrs</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="column-class">
        <Card className="text-center count-logo-card">
            <Card.Body>
            <GiTeacher className="logo"/>
              <Card.Text className="text-center count-number">5400</Card.Text>
              <Card.Text className="text-center count-text">Total Batch</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3} className="column-class">
        <Card className="text-center count-logo-card">
            <Card.Body>
            <FaChalkboardTeacher className="logo"/>
              <Card.Text className="text-center count-number">5400</Card.Text>
              <Card.Text className="text-center count-text">Total One-to-One</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CountWithLogos;
