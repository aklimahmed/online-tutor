import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

import "./DocumentUpload.scss";

const DocumentsUpload = () => {
  return (
    <Container className="weeklyTime_div">
      <h6 className="time_heading">
        Documents Upload <small className="text-regular">(the documents only for verification purpose, will not
        share anywhere):</small>
      </h6>
      <Row>
        <Col md={4} className="card-align">
          <Card style={{ width: "100%" }}>
            <Card.Header className="card-header">
              Highest Academic Certificate
            </Card.Header>
            <Card.Body>
              <Card.Text className="instruction-text">
                Upload the highest academic certificate. <br />
                <br />
                If you are a student of Post-graduation, upload the graduation
                certificate.
              </Card.Text>
              <br />
              <Row style={{ textAlign: "center" }}>
                <label>
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
              Current ID Card (Student/Job)
            </Card.Header>
            <Card.Body>
              <Card.Text className="instruction-text">
                Upload the current institutional ID card.
                <br />
                <br />
                e.g. If you are student of Post-graduation, upload the
                Post-graduation ID Card.
              </Card.Text>
              <br />
              <Row style={{ textAlign: "center" }}>
                <label>
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
              Legal ID/Photo Validation
            </Card.Header>
            <Card.Body>
              <Card.Text className="instruction-text">
                {" "}
                <br />
                <br />
                Upload the Voter ID Card / Passport / Driving License / Birth
                Certificated.
              </Card.Text>
              <br />
              <Row style={{ textAlign: "center" }}>
                <label>
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