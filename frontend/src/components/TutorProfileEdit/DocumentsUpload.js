import { React, useState, useEffect } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { storage } from "../Firebase/FirebaseConfig";
import { documentsUploadForm } from "./../../actions/tutorActions";
import { deleteObject } from "firebase/storage";
import { TiDelete } from "react-icons/ti";

import "./DocumentUpload.scss";
import { useSelector, useDispatch } from "react-redux";

const DocumentsUpload = (props) => {
  const dispatch = useDispatch();

  const [data, setData] = useState({});

  useEffect(() => {
    setData(props.documentsUpload);
  }, [props]);

  useEffect(() => {
    data
      ? setDocumentsUpload(data)
      : setDocumentsUpload({
          certificate: "",
          certificateUrl: "",
          currentId: "",
          currentIdUrl: "",
          legalId: "",
          legalIdUrl: "",
        });
  }, [data]);

  const id = useSelector((state) => state.userLogin.userInfo._id);

  const [DocumentsUpload, setDocumentsUpload] = useState({});
  const [progress, setProgress] = useState({
    name: "",
    value: 0,
  });

  //set image information && firestore upload
  const handleChange = async (e) => {
    if (e.target.files[0] && e.target.files[0].size <= 400000) {
      const uploadTask = storage
        .ref(`${id}/${e.target.files[0].name}`)
        .put(e.target.files[0]);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          const newProgress = { ...progress };
          newProgress["name"] = e.target.name;
          newProgress["value"] = progress;
          setProgress(newProgress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref(id)
            .child(e.target.files[0].name)
            .getDownloadURL()
            .then((url) => {
              const newUpload = { ...DocumentsUpload };
              newUpload[e.target.name] = e.target.files[0].name;
              newUpload[e.target.name + "Url"] = url;
              setDocumentsUpload(newUpload);
            });
        }
      );
    } else {
      alert("File size should be less or equal 400kb");
    }
  };

  //delete firestore image
  const deleteImage = (name, file) => {
    const desertRef = storage.ref(`${id}/${name}`);

    deleteObject(desertRef)
      .then(() => {
        progress.value = 0;
        const newName = { ...DocumentsUpload };
        newName[file] = "";
        newName[file + "Url"] = "";
        setDocumentsUpload(newName);
      })
      .catch((error) => {
        progress.value = 0;
        const newName = { ...DocumentsUpload };
        newName[file] = "";
        newName[file + "Url"] = "";
        setDocumentsUpload(newName);
      });
  };

  useEffect(() => {
    dispatch(documentsUploadForm(DocumentsUpload));
  });

  return (
    <Container className="weeklyTime_div">
      <h6 className="time_heading">
        Documents Upload{" "}
        <small className="text-regular">
          (the documents only for verification purpose, will not share
          anywhere):
        </small>
      </h6>
      <Row>
        <Col md={4} className="card-align">
          <Card>
            <Card.Header className="card-header">
              Highest Academic Certificate
            </Card.Header>
            {DocumentsUpload && DocumentsUpload.certificateUrl !== "" ? (
              <div className="show_image">
                <img src={DocumentsUpload.certificateUrl} alt="Certificate" />
                <TiDelete
                  onClick={() =>
                    deleteImage(DocumentsUpload.certificate, "certificate")
                  }
                  className="image_delete"
                />
              </div>
            ) : progress.name === "certificate" && progress.value !== 0 ? (
              <div className="progress">
                <div className="spinner-border text-primary">
                  <span className="sr-only"></span>
                </div>
              </div>
            ) : (
              <Card.Body className="card_width">
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
                      <input
                        name="certificate"
                        type="file"
                        onChange={handleChange}
                      />
                      Click for select
                    </Card.Title>
                  </label>
                </Row>
              </Card.Body>
            )}
          </Card>
        </Col>

        <Col md={4} className="card-align">
          <Card>
            <Card.Header className="card-header">
              Current ID Card (Student/Job)
            </Card.Header>
            {DocumentsUpload && DocumentsUpload.currentIdUrl !== "" ? (
              <div className="show_image">
                <img src={DocumentsUpload.currentIdUrl} alt="currentId" />
                <TiDelete
                  onClick={() =>
                    deleteImage(DocumentsUpload.currentId, "currentId")
                  }
                  className="image_delete"
                />
              </div>
            ) : progress.name === "currentId" && progress.value !== 0 ? (
              <div className="progress">
                <div className="spinner-border text-primary">
                  <span className="sr-only"></span>
                </div>
              </div>
            ) : (
              <Card.Body className="card_width">
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
                      <input
                        name="currentId"
                        type="file"
                        onChange={handleChange}
                      />
                      Click for select
                    </Card.Title>
                  </label>
                </Row>
              </Card.Body>
            )}
          </Card>
        </Col>

        <Col md={4} className="card-align">
          <Card>
            <Card.Header className="card-header">
              Legal ID/Photo Validation
            </Card.Header>
            {DocumentsUpload && DocumentsUpload.legalIdUrl !== "" ? (
              <div className="show_image">
                <img src={DocumentsUpload.legalIdUrl} alt="legalId" />
                <TiDelete
                  onClick={() =>
                    deleteImage(DocumentsUpload.legalId, "legalId")
                  }
                  className="image_delete"
                />
              </div>
            ) : progress.name === "legalId" && progress.value !== 0 ? (
              <div className="progress">
                <div className="spinner-border text-primary">
                  <span className="sr-only"></span>
                </div>
              </div>
            ) : (
              <Card.Body className="card_width">
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
                      <input
                        name="legalId"
                        type="file"
                        onChange={handleChange}
                      />
                      Click for select
                    </Card.Title>
                  </label>
                </Row>
              </Card.Body>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DocumentsUpload;
