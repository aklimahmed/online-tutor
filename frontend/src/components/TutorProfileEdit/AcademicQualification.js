import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { academicQualificationForm } from "./../../actions/tutorActions";

const AcademicQualification = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.academic);
  }, [props]);

  useEffect(() => {
    data
      ? setAcademicQualification(data)
      : setAcademicQualification({
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
  }, [data]);

  const dispatch = useDispatch();

  const [AcademicQualification, setAcademicQualification] = useState({});

  const handleBlur = (event) => {
    const newAcademicQualification = { ...AcademicQualification };
    newAcademicQualification[event.target.name] = event.target.value;
    setAcademicQualification(newAcademicQualification);
  };

  useEffect(() => {
    dispatch(academicQualificationForm(AcademicQualification));
  });

  return (
    <div className="basic-info-body weeklyTime_div">
      <h6 className="time_heading">Academic Qualification:</h6>
      <Row className="mb-3">
        <Form.Label>SSC or equivalent info:</Form.Label>
        <Col className="flex-col1" md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              name="sscDegree"
              className="form-control"
              type="text"
              defaultValue={data ? data.sscDegree : ""}
              placeholder="Enter your major / group"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col className="flex-col2" md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              name="sscPassingYear"
              defaultValue={
                data
                  ? data.sscPassingYear === 0
                    ? ""
                    : data.sscPassingYear
                  : ""
              }
              className="form-control"
              type="Number"
              placeholder="Passing year"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col className="flex-col2" md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              name="sscResult"
              defaultValue={data ? data.sscResult : ""}
              className="form-control"
              type="number"
              step="0.01"
              placeholder="Enter result or grade"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col className="flex-col" md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              name="sscInstitution"
              defaultValue={data ? data.sscInstitution : ""}
              className="form-control"
              type="text"
              placeholder="Enter institute name"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col className="flex-col" md={2}>
          <Form.Group controlId="formBasicCheckbox" className="mb-3">
            <select
              name="sscStatus"
              className="form-select"
              onBlur={handleBlur}
            >
              <option style={{ display: "none" }}>
                {data
                  ? data.sscStatus === ""
                    ? "Select Status"
                    : data.sscStatus
                  : ""}
              </option>
              <option>Completed</option>
              <option>On going</option>
            </select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Label>HSC or equivalent info:</Form.Label>
        <Col className="flex-col1" md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              name="hscDegree"
              defaultValue={data ? data.hscDegree : ""}
              className="form-control"
              type="text"
              placeholder="Enter your major / group"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col className="flex-col2" md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              name="hscPassingYear"
              defaultValue={
                data
                  ? data.hscPassingYear === 0
                    ? ""
                    : data.hscPassingYear
                  : ""
              }
              className="form-control"
              type="number"
              placeholder="Passing year"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col className="flex-col2" md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="hscResult"
              defaultValue={data ? data.hscResult : ""}
              type="number"
              step="0.01"
              placeholder="Enter result or grade"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col className="flex-col" md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="hscInstitution"
              defaultValue={data ? data.hscInstitution : ""}
              type="text"
              placeholder="Enter institute name"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col className="flex-col" md={2}>
          <Form.Group controlId="formBasicCheckbox" className="mb-3">
            <select
              name="hscStatus"
              className="form-select"
              onBlur={handleBlur}
            >
              <option style={{ display: "none" }}>
                {data
                  ? data.hscStatus === ""
                    ? "Select Status"
                    : data.hscStatus
                  : ""}
              </option>
              <option>Completed</option>
              <option>On going</option>
            </select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Label>Graduation info:</Form.Label>
        <Col className="flex-col1" md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="graduationDegree"
              defaultValue={data ? data.graduationDegree : ""}
              type="text"
              placeholder="Enter your major / group"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col className="flex-col2" md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="graduationPassingYear"
              defaultValue={
                data
                  ? data.graduationPassingYear === 0
                    ? ""
                    : data.graduationPassingYear
                  : ""
              }
              type="number"
              placeholder="Passing year"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col className="flex-col2" md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="graduationResult"
              defaultValue={data ? data.graduationResult : ""}
              type="number"
              step="0.01"
              placeholder="Enter result or grade"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col className="flex-col" md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="graduationInstitution"
              defaultValue={data ? data.graduationInstitution : ""}
              type="text"
              placeholder="Enter institute name"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col className="flex-col" md={2}>
          <Form.Group controlId="formBasicCheckbox" className="mb-3">
            <select
              name="graduationStatus"
              className="form-select"
              onBlur={handleBlur}
            >
              <option style={{ display: "none" }}>
                {data
                  ? data.graduationStatus === ""
                    ? "Select Status"
                    : data.graduationStatus
                  : ""}
              </option>
              <option>Completed</option>
              <option>On going</option>
            </select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Label>Post-Graduation info:</Form.Label>
        <Col className="flex-col1" md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              type="text"
              name="postGraduationDegree"
              defaultValue={data ? data.postGraduationDegree : ""}
              placeholder="Enter your major / group"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col className="flex-col2" md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="postGraduationPassingYear"
              defaultValue={
                data
                  ? data.postGraduationPassingYear === 0
                    ? ""
                    : data.postGraduationPassingYear
                  : ""
              }
              type="number"
              placeholder="Passing year"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col className="flex-col2" md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="postGraduationResult"
              defaultValue={data ? data.postGraduationResult : ""}
              type="number"
              step="0.01"
              placeholder="Enter result or grade"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col className="flex-col" md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="postGraduationInstitution"
              defaultValue={data ? data.postGraduationInstitution : ""}
              type="text"
              placeholder="Enter institute name"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col className="flex-col" md={2}>
          <Form.Group controlId="formBasicCheckbox" className="mb-3">
            <select
              name="postGraduationStatus"
              type="text"
              className="form-select"
              onBlur={handleBlur}
            >
              <option style={{ display: "none" }}>
                {data
                  ? data.postGraduationStatus === ""
                    ? "Select status"
                    : data.postGraduationStatus
                  : ""}
              </option>
              <option>Completed</option>
              <option>On going</option>
            </select>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Form.Label>Doctorate info:</Form.Label>
        <Col className="flex-col1" md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="doctorateDegree"
              defaultValue={data ? data.doctorateDegree : ""}
              type="text"
              placeholder="Enter your major / group"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col className="flex-col2" md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="doctoratePassingYear"
              defaultValue={
                data
                  ? data.doctoratePassingYear === 0
                    ? ""
                    : data.doctoratePassingYear
                  : ""
              }
              type="number"
              placeholder="Passing year"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col className="flex-col2" md={2}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="doctorateResult"
              defaultValue={data ? data.doctorateResult : ""}
              type="number"
              step="0.01"
              placeholder="Enter result or grade"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col className="flex-col" md={3}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <input
              className="form-control"
              name="doctorateInstitution"
              defaultValue={data ? data.doctorateInstitution : ""}
              type="text"
              placeholder="Enter institute name"
              onBlur={handleBlur}
            />
          </Form.Group>
        </Col>

        <Col className="flex-col" md={2}>
          <Form.Group controlId="formBasicCheckbox" className="mb-3">
            <select
              id="select"
              name="doctorateStatus"
              className="form-select"
              onBlur={handleBlur}
            >
              <option style={{ display: "none" }}>
                {data
                  ? data.doctorateStatus === ""
                    ? "Select status"
                    : data.doctorateStatus
                  : ""}
              </option>
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
