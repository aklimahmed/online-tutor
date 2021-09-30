import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./DocumentUpload.scss";

const DocumentsUpload = () => {
  return (
    <div className="weeklyTime_div">
             <h6 className="time_heading">Basic info</h6>
      <Row className="document1">
        <Col md={4} className="document-upload document">
          <Card style={{ width: "18rem" }}>
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

        <Col md={4} className="document-upload document1">
          <Card style={{ width: "18rem" }}>
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

        <Col md={4} className="document2">
          <Card style={{ width: "18rem" }}>
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
      </Row>
    </div>
  );
};

export default DocumentsUpload;
