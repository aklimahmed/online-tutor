import React from "react";
import { Row, Col, Card, Container, Form } from "react-bootstrap";

const VideoUpload = () => {
  return (
    <Container className="weeklyTime_div">
      <h6 className="time_heading">
        Video{" "}
        <small small className="text-regular">
          (upload your introductory video for better appearance to students and
          parents):
        </small>
      </h6>
      <Row>
        <Col md={6} className="card-align">
          <Card style={{ width: "100%", height: "100%" }}>
            <Card.Header className="card-header">
              Upload video from computer
            </Card.Header>
            <Card.Body>
              <Card.Text className="instruction-text">
                Max. video length 1 min
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

        <Col md={6} className="card-align">
          <Card style={{ width: "100%", height: "100%" }}>
            <Card.Header className="card-header">
              Upload video from YouTube or others
            </Card.Header>
            <Card.Body>
              <Card.Text className="instruction-text">Input URL:</Card.Text>
              <Form.Group className="mb-3" controlId="formBasicName">
                <br />
                <input className="form-control" type="url" />
              </Form.Group>

              <br />
              <Row style={{ textAlign: "center" }}>
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

export default VideoUpload;
