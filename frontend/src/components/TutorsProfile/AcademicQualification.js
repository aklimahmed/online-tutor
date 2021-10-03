import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import "./AcademicQualification.scss";

const AcademicQualification = () => {
  return (
    <div className="basic-info-body weeklyTime_div">
      <h6 className="time_heading">Academic Qualification</h6>
      <Row>
        <Form.Label style={{ paddingBottom: "0px" }}>
          SSC or equivalent info:
        </Form.Label>
        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <br />
            <input
              className="form-control"
              type="name"
              placeholder="Enter degree and subject"
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <br />
            <input
              className="form-control"
              type="name"
              placeholder="Passing year"
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <br />
            <input
              className="form-control"
              type="name"
              placeholder="Enter result or grade"
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <br />
            <input
              className="form-control"
              type="name"
              placeholder="Enter institute name"
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              style={{ paddingTop: "40px" }}
              className="container-step1"
              type="checkbox"
              label="Studying now"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Form.Label>HSC or equivalent info:</Form.Label>
        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <br />
            <input
              className="form-control"
              type="name"
              placeholder="Enter degree and subject"
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <br />
            <input
              className="form-control"
              type="name"
              placeholder="Passing year"
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <br />
            <input className="form-control" type="name" placeholder="Enter result or grade" />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <br />
            <input className="form-control" type="name" placeholder="Enter institute name" />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              style={{ paddingTop: "40px" }}
              className="container-step1"
              type="checkbox"
              label="Studying now"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Form.Label>Graduation info:</Form.Label>
        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <br />
            <input className="form-control" type="name" placeholder="Enter degree and subject" />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <br />
            <input className="form-control" type="name" placeholder="Passing year" />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <br />
            <input className="form-control" type="name" placeholder="Enter result or grade" />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <br />
            <input className="form-control" type="name" placeholder="Enter institute name" />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              style={{ paddingTop: "30px" }}
              className="container-step1"
              type="checkbox"
              label="Studying now"
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Form.Label>Post-Graduation info:</Form.Label>
        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <br />
            <input className="form-control" type="name" placeholder="Enter degree and subject" />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <br />
            <input className="form-control" type="name" placeholder="Passing year" />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <br />
            <input className="form-control" type="name" placeholder="Enter result or grade" />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <br />
            <input className="form-control" type="name" placeholder="Enter institute name" />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              style={{ paddingTop: "30px" }}
              className="container-step1"
              type="checkbox"
              label="Studying now"
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default AcademicQualification;
