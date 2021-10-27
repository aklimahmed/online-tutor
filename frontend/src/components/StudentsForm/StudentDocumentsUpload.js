import { React, useState} from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { storage } from "../Firebase/FirebaseConfig";
import { deleteObject } from "firebase/storage";
import { TiDelete } from "react-icons/ti";
import { useSelector} from "react-redux";

const StudentDocumentsUpload = () => {
  // const dispatch = useDispatch();

  const id = useSelector((state) => state.userLogin.userInfo._id);

  const [DocumentsUpload, setDocumentsUpload] = useState({
    idFront: "",
    idFrontUrl: "",
    idBack: "",
    idBackUrl: "",
    birthId: "",
    birthIdUrl: "",
  });
  
  console.log(DocumentsUpload);

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
        console.log(error);
      });
  };

  // useEffect(() => {
  //   dispatch(documentsUploadForm(DocumentsUpload));
  // });

  return (
    <Container className="weeklyTime_div">
      <h6 className="time_heading">
        Student ID Card{" "}
        <small className="text-regular">
          (the documents only for verification purpose, will not share
          anywhere):
        </small>
      </h6>
      <Row>
        <Col md={4} className="card-align">
          <Card>
            <Card.Header className="card-header">
              ID Card (Front side)
            </Card.Header>
            {DocumentsUpload && DocumentsUpload.idFrontUrl !== "" ? (
              <div className="show_image">
                <img src={DocumentsUpload.idFrontUrl} alt="idFront" />
                <TiDelete
                  onClick={() =>
                    deleteImage(DocumentsUpload.idFront, "idFront")
                  }
                  className="image_delete"
                />
              </div>
            ) : progress.name === "idFront" && progress.value !== 0 ? (
              <div className="progress">
                <div className="spinner-border text-primary">
                  <span className="sr-only"></span>
                </div>
              </div>
            ) : (
              <Card.Body className="card_width">
                <br />
                <Row style={{ textAlign: "center" }}>
                  <label>
                    <Card.Title className="click-for-upload text-center mt-5">
                      <input
                        name="idFront"
                        type="file"
                        accept="image/png, image/jpeg"
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
              ID Card (Back side)
            </Card.Header>
            {DocumentsUpload && DocumentsUpload.idBackUrl !== "" ? (
              <div className="show_image">
                <img src={DocumentsUpload.idBackUrl} alt="idBack" />
                <TiDelete
                  onClick={() => deleteImage(DocumentsUpload.idBack, "idBack")}
                  className="image_delete"
                />
              </div>
            ) : progress.name === "idBack" && progress.value !== 0 ? (
              <div className="progress">
                <div className="spinner-border text-primary">
                  <span className="sr-only"></span>
                </div>
              </div>
            ) : (
              <Card.Body className="card_width">
                <br />
                <Row style={{ textAlign: "center" }}>
                  <label>
                    <Card.Title className="click-for-upload text-center mt-5">
                      <input
                        name="idBack"
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
            <Card.Header className="card-header">Birth Certificate</Card.Header>
            {DocumentsUpload && DocumentsUpload.birthIdUrl !== "" ? (
              <div className="show_image">
                <img src={DocumentsUpload.birthIdUrl} alt="birthId" />
                <TiDelete
                  onClick={() =>
                    deleteImage(DocumentsUpload.birthId, "birthId")
                  }
                  className="image_delete"
                />
              </div>
            ) : progress.name === "birthId" && progress.value !== 0 ? (
              <div className="progress">
                <div className="spinner-border text-primary">
                  <span className="sr-only"></span>
                </div>
              </div>
            ) : (
              <Card.Body className="card_width">
                <br />
                <Row style={{ textAlign: "center" }}>
                  <label>
                    <Card.Title className="click-for-upload text-center mt-5">
                      <input
                        name="birthId"
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

export default StudentDocumentsUpload;
