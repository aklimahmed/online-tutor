import React, { useState } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { storage } from "./firebase";
import "./DocumentUpload.scss";

const DocumentsUpload = () => {
  
  const [progress, setProgress] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadFiles(file);
  };

  const uploadFiles = (file) => {
    //
    const uploadTask = storage.mockUserToken(`files/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        storage
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
  };

  return (
    <Container className="weeklyTime_div">
      <h6 className="time_heading">Basic info</h6>
      <Row>
        <Col md={4}>
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
                <form onSubmit={formHandler}>
                  <input type="file" className="input" />
                  <button type="submit">Upload</button>
                </form>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card style={{ width: "100%" }}>
            <Card.Header className="card-header">
              Current ID Card (Student/job)
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

        <Col md={4}>
          <Card style={{ width: "100%" }}>
            <Card.Header className="card-header">
              Legal ID/Photo Validation
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
