import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

const StudentDocumentsUpload = () => {
  return (
    <Container className="weeklyTime_div">
      <h6 className="time_heading">
        Student's Documents <small className="text-regular">(the documents are only for verification purpose, will not
        share anywhere):</small>
      </h6>
      <Row>
        <Col md={4} className="card-align">
          <Card style={{ width: "100%" }}>
            <Card.Header className="card-header">
              Student ID Card (Front side)
            </Card.Header>
            <Card.Body>
              <br />
              <Row style={{ textAlign: "center" }}>
                <label for="files">
                  <Card.Title className="click-for-upload">
                    Click for upload
                  </Card.Title>
                </label>
                <input
                  id="files"
                  style={{ visibility: "hidden", textAlign: "center" }}
                  type="file"
                />
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="card-align">
          <Card style={{ width: "100%" }}>
            <Card.Header className="card-header">
            Student ID Card (back side)
            </Card.Header>
            <Card.Body>
              <br />
              <Row style={{ textAlign: "center" }}>
                <label for="files">
                  <Card.Title className="click-for-upload">
                    Click for upload
                  </Card.Title>
                </label>
                <input
                  id="files"
                  style={{ visibility: "hidden", textAlign: "center" }}
                  type="file"
                />
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="card-align">
          <Card style={{ width: "100%" }}>
            <Card.Header className="card-header">
              Birth Certificate
            </Card.Header>
            <Card.Body>
              <br />
              <Row style={{ textAlign: "center" }}>
                <label for="files">
                  <Card.Title className="click-for-upload">
                    Click for upload
                  </Card.Title>
                </label>
                <input
                  id="files"
                  style={{ visibility: "hidden", textAlign: "center" }}
                  type="file"
                />
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default StudentDocumentsUpload;
