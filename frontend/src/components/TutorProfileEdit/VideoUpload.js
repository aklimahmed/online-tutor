import { React, useState, useEffect } from "react";
import { Row, Col, Card, Container, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteObject } from "firebase/storage";
import { TiDelete } from "react-icons/ti";
import { storage } from "../Firebase/FirebaseConfig";
import { videoUploadForm } from "../../actions/tutorActions";

const VideoUpload = (props) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(props.videoUpload);
  }, [props]);

  useEffect(() => {
    data
      ? setVideoUpload(data)
      : setVideoUpload({
          profilePhoto: "",
          profilePhotoUrl: "",
          videoUrl: "",
        });
  }, [data]);

  const dispatch = useDispatch();
  const id = useSelector((state) => state.userLogin.userInfo._id);

  const [videoUpload, setVideoUpload] = useState({});

  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  //set image information
  const handleChange = (e) => {
    if (e.target.name === "profilePhoto" && e.target.files[0]) {
      setImage(e.target.files[0]);
      const newName = { ...videoUpload };
      newName[e.target.name] = e.target.files[0].name;
      setVideoUpload(newName);
    } else {
      const newName = { ...videoUpload };
      newName[e.target.name] = getUrl(e.target.value);
      setVideoUpload(newName);
    }
  };

  //youtube embed link
  const getUrl = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    const id = match && match[2].length === 11 ? match[2] : null;

    return( `https://www.youtube.com/embed/${id}`);
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
        const newName = { ...videoUpload };
        newName[file] = "";
        newName[file + "Url"] = "";
        setVideoUpload(newName);
      });
  };

  useEffect(() => {
    dispatch(videoUploadForm(videoUpload));
  });

  return (
    <div>
      <div className="weeklyTime_div">
        <h6 className="time_heading">
          YouTube Link{" "}
          <small className="text-regular">
            (upload your Youtube link which will appear on your profile):
          </small>
        </h6>
        <div className="form-group row ">
          <label className="col-md-2 col-form-label text-nowrap">
            <small> YouTube URL</small>
          </label>
          <div className="col-md-10">
            <input
              name="videoUrl"
              className="form-control"
              type="url"
              defaultValue={videoUpload.videoUrl}
              onChange={handleChange}
              placeholder="https://www.youtube.com/embed/J1yuU06Xkwk"
            />
          </div>
        </div>
      </div>

      <div className="weeklyTime_div">
        <h6 className="time_heading">
          Profile Photo{" "}
          <small className="text-regular">
            (upload your photo which will appear on your profile):
          </small>
        </h6>
        <Card className="profile_image">
          <Card.Header className="card-header">
            Upload Photo from computer:
          </Card.Header>
          {videoUpload && videoUpload.profilePhotoUrl !== "" ? (
            <div className="show_image">
              <img src={videoUpload.profilePhotoUrl} alt="Certificate" />
              <TiDelete
                onClick={() =>
                  deleteImage(videoUpload.profilePhoto, "profilePhoto")
                }
                className="image_delete"
              />
            </div>
          ) : progress !== 0 ? (
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
                </label>
              </Row>
            </Card.Body>
          )}
        </Card>
      </div>
    </div>
  );
};

export default VideoUpload;
