import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import "./AcademicQualification.scss";

const AcademicQualification = () => {

    const [tutorInfo, setTutorInfo] = useState({
      sscDegree: "",
      sscPassingYear: 0,
      sscResult: "",
      sscInstitution: "",
      hscDegree: "",
      hscPassingYear: 0,
      hscResult: "",
      hscInstitution: "",
      graduationDegree: "",
      graduationPassingYear: 0,
      graduationResult: "",
      graduationInstitution: "",
      postGraduationDegree: "",
      postGraduationPassingYear: 0,
      postGraduationResult: "",
      postGraduationInstitution: "",
    });
  
    const handleBlur = (event) => {
      const newTutorInfo = { ...tutorInfo };
      newTutorInfo[event.target.name] = event.target.value;
      setTutorInfo(newTutorInfo);
      console.log(tutorInfo);
    };


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
              name="sscDegree"
              className="form-control"
              type="text"
              placeholder="Enter degree and subject"
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <br />
            <input
              name="sscPassingYear"
              className="form-control"
              type="Number"
              placeholder="Passing year"
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <br />
            <input
              name="sscResult"
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
              name="sscInstitution"
              className="form-control"
              type="name"
              placeholder="Enter institute name"
            />
          </Form.Group>
        </Col>

        <Col md={2}>
        <Form.Group
              controlId="formBasicCheckbox"
              style={{ paddingTop: "20px" }}
              className="mb-3 container-step1"
            >
              <select
                id="select"
                name="status"
                className="form-select"
              >
                <option style={{ display: "none" }}>Select status</option>
                <option>Completed</option>
                <option>On going</option>
              </select>
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
        <Form.Group
              controlId="formBasicCheckbox"
              style={{ paddingTop: "20px" }}
              className="mb-3 container-step1"
            >
              <select
                id="select"
                name="status"
                className="form-select"
              >
                <option style={{ display: "none" }}>Select status</option>
                <option>Completed</option>
                <option>On going</option>
              </select>
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
        <Form.Group
              controlId="formBasicCheckbox"
              style={{ paddingTop: "20px" }}
              className="mb-3 container-step1"
            >
              <select
                id="select"
                name="status"
                className="form-select"
              >
                <option style={{ display: "none" }}>Select status</option>
                <option>Completed</option>
                <option>On going</option>
              </select>
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
        <Form.Group
              controlId="formBasicCheckbox"
              style={{ paddingTop: "20px" }}
              className="mb-3 container-step1"
            >
              <select
                id="select"
                name="status"
                className="form-select"
              >
                <option style={{ display: "none" }}>Select status</option>
                <option>Completed</option>
                <option>On going</option>
              </select>
            </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default AcademicQualification;
