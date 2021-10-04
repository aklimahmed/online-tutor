import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

const AcademicQualification = () => {
  const [tutorInfo, setTutorInfo] = useState({
    sscDegree: "",
    sscPassingYear: 0,
    sscResult: "",
    sscInstitution: "",
    sscStatus: "",
    hscDegree: "",
    hscPassingYear: 0,
    hscResult: "",
    hscInstitution: "",
    hscStatus: "",
    graduationDegree: "",
    graduationPassingYear: 0,
    graduationResult: "",
    graduationInstitution: "",
    graduationStatus: "",
    postGraduationDegree: "",
    postGraduationPassingYear: 0,
    postGraduationResult: "",
    postGraduationInstitution: "",
    postGraduationStatus: "",
    doctorateDegree: "",
    doctoratePassingYear: 0,
    doctorateResult: "",
    doctorateInstitution: "",
    doctorateStatus: "",
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
      <Row Row className="mb-3">
        <Form.Label>
          SSC or equivalent info:
        </Form.Label>
        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              name="sscDegree"
              className="form-control"
              type="text"
              placeholder="Enter degree and subject"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              name="sscPassingYear"
              className="form-control"
              type="Number"
              placeholder="Passing year"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              name="sscResult"
              className="form-control"
              type="name"
              placeholder="Enter result or grade"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              name="sscInstitution"
              className="form-control"
              type="name"
              placeholder="Enter institute name"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group
            controlId="formBasicCheckbox"
            className="mb-3"
          >
            <select
              name="sscStatus"
              id="select"
              className="form-select"
              onBlur={handleBlur}
            >
              <option style={{ display: "none" }}>Select status</option>
              <option>Completed</option>
              <option>On going</option>
            </select>
          </Form.Group>
        </Col>
      </Row>

      <Row Row className="mb-3">
        <Form.Label>HSC or equivalent info:</Form.Label>
        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              name="hscDegree"
              className="form-control"
              type="text"
              placeholder="Enter degree and subject"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              name="hscPassingYear"
              className="form-control"
              type="number"
              placeholder="Passing year"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="hscResult"
              type="number"
              placeholder="Enter result or grade"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="hscInstitution"
              type="text"
              placeholder="Enter institute name"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group
            controlId="formBasicCheckbox"
            className="mb-3"
          >
            <select
              name="hscStatus"
              className="form-select"
              onBlur={handleBlur}
            >
              <option style={{ display: "none" }}>Select status</option>
              <option>Completed</option>
              <option>On going</option>
            </select>
          </Form.Group>
        </Col>
      </Row>

      <Row Row className="mb-3">
        <Form.Label>Graduation info:</Form.Label>
        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="graduationDegree"
              type="text"
              placeholder="Enter degree and subject"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="graduationPassingYear"
              type="number"
              placeholder="Passing year"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="graduationResult"
              type="number"
              placeholder="Enter result or grade"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="graduationInstitution"
              type="text"
              placeholder="Enter institute name"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group
            controlId="formBasicCheckbox"
            className="mb-3"
          >
            <select
              id="select"
              name="graduationStatus"
              className="form-select"
              onBlur={handleBlur}
            >
              <option style={{ display: "none" }}>Select status</option>
              <option>Completed</option>
              <option>On going</option>
            </select>
          </Form.Group>
        </Col>
      </Row>

      <Row Row className="mb-3">
        <Form.Label>Post-Graduation info:</Form.Label>
        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              type="text"
              name="postGraduationDegree"
              placeholder="Enter degree and subject"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="postGraduationPassingYear"
              type="number"
              placeholder="Passing year"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="postGraduationResult"
              type="number"
              placeholder="Enter result or grade"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="postGraduationInstitution"
              type="text"
              placeholder="Enter institute name"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group
            controlId="formBasicCheckbox"
            className="mb-3"
          >
            <select
              name="postGraduationStatus"
              type="text"
              className="form-select"
              onBlur={handleBlur}
            >
              <option style={{ display: "none" }}>Select status</option>
              <option>Completed</option>
              <option>On going</option>
            </select>
          </Form.Group>
        </Col>
      </Row>

      <Row Row className="mb-3">
        <Form.Label>Doctorate info:</Form.Label>
        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="doctorateDegree"
              type="text"
              placeholder="Enter degree and subject"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="doctoratePassingYear"
              type="number"
              placeholder="Passing year"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="doctorateResult"
              type="number"
              placeholder="Enter result or grade"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="doctorateInstitution"
              type="text"
              placeholder="Enter institute name"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col md={2}>
          <Form.Group
            controlId="formBasicCheckbox"
            className="mb-3"
          >
            <select
              id="select"
              name="doctorateStatus"
              className="form-select"
              onBlur={handleBlur}
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
