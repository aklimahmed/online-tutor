import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

import "./DocumentUpload.scss";

const DocumentsUpload = () => {

  return (
    <Container className="weeklyTime_div">
             <h6 className="time_heading">Basic info</h6>
      <Row>
        <Col md={4} className="card-align">
          <Card style={{ width: "100%" }}>
          <Card.Header className="card-header">Highest Academic Certificate</Card.Header>
            <Card.Body>
              <Card.Text className="instruction-text">
                Upload the highest academic certificate. <br />
                <br />
                If you are a student of Post-graduation, upload the graduation
                certificate.
              </Card.Text>
              <br />
              <Row style={{ textAlign: "center" }}>
                <label for="files">
                  <Card.Title className="click-for-upload"
                  >
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
          <Card.Header className="card-header">Current ID Card (Student/job)</Card.Header>
            <Card.Body>
              <Card.Text className="instruction-text">
                Upload the highest academic certificate. <br />
                <br />
                If you are a student of Post-graduation, upload the graduation
                certificate.
              </Card.Text>
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
          <Card.Header className="card-header">Legal ID/Photo Validation</Card.Header>
            <Card.Body>
              <Card.Text className="instruction-text">
                Upload the highest academic certificate. <br />
                <br/>
                If you are a student of Post-graduation, upload the graduation
                certificate.
              </Card.Text>
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

export default DocumentsUpload;