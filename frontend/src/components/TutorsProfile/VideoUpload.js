import { React, useState, useEffect } from "react";
import { Row, Col, Card, Container, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { deleteObject } from "firebase/storage";
import { TiDelete } from "react-icons/ti";
import { storage } from "../Firebase/FirebaseConfig";

const VideoUpload = () => {
  const id = useSelector((state) => state.userLogin.userInfo._id);

  const [videoUpload, setVideoUpload] = useState({
    profilePhoto: "",
    profilePhotoUrl: "",
    videoUrl: "",
  });

  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  console.log(videoUpload);

  //set image information
  const handleChange = (e) => {
    if (e.target.name === "profilePhoto" && e.target.files[0]) {
      setImage(e.target.files[0]);
      const newName = { ...videoUpload };
      newName[e.target.name] = e.target.files[0].name;
      setVideoUpload(newName);
    } else {
      const newName = { ...videoUpload };
      newName[e.target.name] = e.target.value;
      setVideoUpload(newName);
    }
  };

  //image upload
  const handleUpload = (e) => {
    if (image) {
      if (image.size <= 400000) {
        const uploadTask = storage.ref(`${id}/${image.name}`).put(image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          (error) => {
            console.log(error);
          },
          () => {
            storage
              .ref(id)
              .child(image.name)
              .getDownloadURL()
              .then((url) => {
                const newUpload = { ...videoUpload };
                newUpload[e] = url;
                setVideoUpload(newUpload);
                setProgress(0);
                setImage(null);
              });
          }
        );
      } else {
        alert("File size should be less or equal 400kb");
      }
    } else {
      alert("Select your document first");
    }
  };

  //delete firestore image
  const deleteImage = (name, file) => {
    const desertRef = storage.ref(`${id}/${name}`);

    deleteObject(desertRef)
      .then(() => {
        const newName = { ...videoUpload };
        newName[file] = "";
        newName[file + "Url"] = "";
        setVideoUpload(newName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="weeklyTime_div">
      <h6 className="time_heading">
        Profile Photo{" "}
        <small className="text-regular">
          (upload your photo which will appear on your profile):
        </small>
      </h6>
      <Row>
        <Col md={6} className="card-align">
          <Card>
            <Card.Header className="card-header">
              Upload Photo from computer:
            </Card.Header>
            <Card.Body className="card_width">
              <Card.Text className="instruction-text">
                Max. photo size 400kb
                <br />
                <br />
              </Card.Text>
              <br />
              <Row style={{ textAlign: "center" }}>
                <label>
                  <Card.Title className="click-for-upload">
                    <input
                      name="profilePhoto"
                      type="file"
                      onChange={handleChange}
                    />
                    Click for select
                  </Card.Title>
                  <button className="pic_upload" type="button">
                    Upload
                  </button>
                </label>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="card-align">
          <Card>
            <Card.Header className="card-header">
              Upload video from YouTube or others
            </Card.Header>
            <Card.Body className="card_width">
              <Card.Text className="instruction-text">Input URL:</Card.Text>
              <Form.Group className="mb-3" controlId="formBasicName">
                <br />
                <br />
                <input
                  name="videoUrl"
                  className="form-control"
                  type="url"
                  onChange={handleChange}
                  placeholder="https://youtu.be/8r1Pb6Ja90o"
                />
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
