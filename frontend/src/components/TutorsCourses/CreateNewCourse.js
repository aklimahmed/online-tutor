import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, Container, Form } from "react-bootstrap";
import "./CreateNewCourse.scss";
import { MultiSelect } from "react-multi-select-component";
import { curriculum } from "../../jsonData/Curriculum";
import { classes } from "../../jsonData/Classes";
import { subjects } from "../../jsonData/Subjects";
import {
  numberOfStudents,
  numberOfStudentsInFreeClass,
} from "../../jsonData/NumberOfStudents";
import { classDays } from "../../jsonData/ClassDays";
import { classDuration } from "../../jsonData/classDuration";
import { courseByTutorForm } from "./../../actions/courseActions";
import { storage } from "../Firebase/FirebaseConfig";
import { deleteObject } from "firebase/storage";
import { TiDelete } from "react-icons/ti";

const CreateNewCourse = () => {
  const id = useSelector((state) => state.userLogin.userInfo._id);

  const courseIdGenerator = (curriculum, classLevel) => {
    let uniqueCourseId = "";
    if (curriculum !== "" && classLevel !== "") {
      if (curriculum === "National Curriculum (Bangla Ver)") {
        uniqueCourseId += "NCB";
      } else if (curriculum === "National Curriculum (English Ver)") {
        uniqueCourseId += "NCE";
      } else if (curriculum === "English Medium (Cambridge)") {
        uniqueCourseId += "EMC";
      } else if (curriculum === "English Medium (Edexcel)") {
        uniqueCourseId += "EME";
      } else if (curriculum === "Vocational") {
        uniqueCourseId += "VOC";
      }

      if (
        classLevel !== "" &&
        (classLevel === "PSC" ||
          classLevel === "JSC" ||
          classLevel === "SSC" ||
          classLevel === "HSC")
      ) {
        uniqueCourseId += classLevel;
      } else if (classLevel === "O Level" || classLevel === "A Level") {
        uniqueCourseId += classLevel[0];
      }else if (classLevel === "Class-10" || classLevel === "Class-11" || classLevel === "Class-12") {
        uniqueCourseId += classLevel[6]+classLevel[7];
      } else {
        uniqueCourseId += classLevel[6];
      }

      const today = new Date();
      uniqueCourseId += today.getFullYear();
      uniqueCourseId += today.getMonth() + 1;
      uniqueCourseId += Math.floor(Math.random() * (10000 - 99999)) + 10000;

      const setCourseId = { ...courseByTutor };
      setCourseId["courseId"] = uniqueCourseId;
      SetCourseByTutor(setCourseId);
    }
  };

  let ddd = new Date()
  console.log(ddd.getMilliseconds())
  const courseTitleGenerator = (curriculum, classLevel, subject) => {
    let CourseTitle = "";
    if (curriculum !== "" && classLevel !== "" && subject !== "") {
      // subject
      CourseTitle += subject + "-";
      // class
      if (
        classLevel !== "" &&
        (classLevel === "PSC" ||
          classLevel === "JSC" ||
          classLevel === "SSC-" ||
          classLevel === "HSC-")
      ) {
        CourseTitle += classLevel;
      } else if (classLevel === "O-Level" || classLevel === "A-Level") {
        CourseTitle += classLevel;
      }else {
        CourseTitle += classLevel;
      }

      // curriculum

      if (curriculum === "National Curriculum (Bangla Ver)") {
        CourseTitle += "-NCB";
      } else if (curriculum === "National Curriculum (English Ver)") {
        CourseTitle += "-NCE";
      } else if (curriculum === "English Medium (Cambridge)") {
        CourseTitle += "-EMC";
      } else if (curriculum === "English Medium (Edexcel)") {
        CourseTitle += "-EME";
      } else if (curriculum === "Vocational") {
        CourseTitle += "-VOC";
      }
      const setCourseTitle = { ...courseByTutor };
      setCourseTitle["courseTitle"] = CourseTitle;
      SetCourseByTutor(setCourseTitle);
    }
  };

  const [classDay, setClassDay] = useState([]);

  const [courseByTutor, SetCourseByTutor] = useState({
    classTypes: "",
    curriculum: "",
    classLevel: "",
    subject: "",
    batchType: "",
    noOfStudents: "",
    classDuration: "",
    classDay: [],
    classStartDate: "",
    classEndDate: "",
    enrollDueDate: "",
    classStartTime: "",
    tutionFee: 0,
    feesTime: "Per Hour",
    courseDescription: "",
    courseVideoUrl: "",
    courseId: "",
    courseTitle: "",
    docName: "",
    docNameUrl: "",
  });

  console.log(courseByTutor);

  const handleBlur = (event) => {
    const newCourseByTutor = { ...courseByTutor };
    newCourseByTutor[event.target.name] = event.target.value;
    SetCourseByTutor(newCourseByTutor);

    if (event.target.name === "classTypes") {
      const newCourseByTutor = { ...courseByTutor };
      newCourseByTutor[event.target.name] = event.target.value;
      newCourseByTutor["tutionFee"] = 0;
      SetCourseByTutor(newCourseByTutor);
    }
  };

  const [progress, setProgress] = useState(0);

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
          setProgress(progress);
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
              const newUpload = { ...courseByTutor };
              newUpload[e.target.name] = e.target.files[0].name;
              newUpload[e.target.name + "Url"] = url;
              SetCourseByTutor(newUpload);
              setProgress(0);
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
        setProgress(0);
        const newName = { ...courseByTutor };
        newName[file] = "";
        newName[file + "Url"] = "";
        SetCourseByTutor(newName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    courseIdGenerator(courseByTutor.curriculum, courseByTutor.classLevel);
    // eslint-disable-next-line
  }, [courseByTutor.curriculum, courseByTutor.classLevel]);

  useEffect(() => {
    courseTitleGenerator(
      courseByTutor.curriculum,
      courseByTutor.classLevel,
      courseByTutor.subject
    );
    // eslint-disable-next-line
  }, [
    courseByTutor.curriculum,
    courseByTutor.classLevel,
    courseByTutor.subject,
  ]);

  useEffect(() => {
    courseByTutor.classDay = [];
    const hold = [...classDay];
    hold.map((data) => courseByTutor.classDay.push(data.value));
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(courseByTutorForm(courseByTutor));
  });

  const todayDate = new Date().toISOString().slice(0, 10);

  const da = new Date();

  let currentHour = da.getHours();
  let currentTime = "";
  if (da.getMinutes() < 10) {
    currentTime = currentHour + ":0" + da.getMinutes();
  } else {
    currentTime = currentHour + ":" + da.getMinutes();
  }

  return (
    <Container className="course-add-container mt-3">
      <Row>
        <Col md={4} className="columns">
          <Form.Group className="mb-3 card-align" controlId="formBasicDistrict">
            <select
              className="form-select drop_down"
              name="classTypes"
              onChange={handleBlur}
            >
              <option style={{ display: "none" }}>Select Class Types</option>
              <option>Free Class</option>
              <option>Paid Class</option>
            </select>
          </Form.Group>
        </Col>
        <Col md={4} className="columns">
          <Form.Group className="mb-3 card-align" controlId="formBasicDistrict">
            <select
              className="form-select drop_down"
              required
              onChange={handleBlur}
              name="curriculum"
            >
              <option style={{ display: "none" }}>Select Curriculum</option>
              {curriculum.map((d) => (
                <option key={d.curriculum} value={d.curriculum}>
                  {d.curriculum}
                </option>
              ))}
            </select>
          </Form.Group>
        </Col>
        <Col md={4} className="columns">
          <Form.Group className="mb-3 card-align" controlId="formBasicDistrict">
            <select
              className="form-select drop_down"
              onChange={handleBlur}
              name="classLevel"
            >
              <option style={{ display: "none" }}>Select Class</option>
              {classes.map((d) => (
                <option key={d.class} value={d.class}>
                  {d.class}
                </option>
              ))}
            </select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="d-flex justify-content-between">
        <Col md={4} className="columns">
          <Form.Group className="mb-3 card-align" controlId="formBasicDistrict">
            <select
              className="form-select drop_down"
              onChange={handleBlur}
              name="subject"
            >
              <option style={{ display: "none" }}>Select Subject</option>
              {subjects.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
          </Form.Group>
        </Col>
        <Col md={4} className="columns">
          <Form.Group
            className="mb-3 card-align"
            controlId="formBasicDistrict"
            style={{ width: "100%" }}
          >
            <select
              className="form-select drop_down"
              onChange={handleBlur}
              name="batchType"
            >
              <option style={{ display: "none" }}>Select Batch Type</option>
              <option>Batch Class</option>
              <option>One-to-One Class</option>
            </select>
          </Form.Group>
        </Col>
        <Col md={4} className="columns">
          <Form.Group className="mb-3" controlId="formBasicDistrict">
            <select
              className="form-select drop_down"
              onChange={handleBlur}
              name="noOfStudents"
            >
              <option style={{ display: "none" }}>No of Students</option>
              {courseByTutor.classTypes === "Free Class" &&
              courseByTutor.batchType === "Batch Class" ? (
                <>
                  {numberOfStudentsInFreeClass.map((d) => (
                    <option key={d.numberOfStudents} value={d.numberOfStudents}>
                      {d.numberOfStudents}
                    </option>
                  ))}
                </>
              ) : courseByTutor.classTypes === "Paid Class" &&
                courseByTutor.batchType === "Batch Class" ? (
                <>
                  {numberOfStudents.map((d) => (
                    <option key={d.numberOfStudents} value={d.numberOfStudents}>
                      {d.numberOfStudents}
                    </option>
                  ))}
                </>
              ) : (
                <>
                  <option value={1}>1 Student</option>
                </>
              )}
            </select>
          </Form.Group>
        </Col>
        
      </Row>
      <Row className="d-flex justify-content-between">
        
        <Col md={4} className="columns">
        <Form.Group className="mb-3" controlId="formBasicCourseStart">
            <Form.Label className="form_label">Course Start Date:</Form.Label>
            <br />
            <input
              onBlur={handleBlur}
              className="form-control"
              type="date"
              id="start"
              name="courseStartDate"
              min={todayDate}
              max="2015-12-31"
            ></input>
          </Form.Group>
        </Col>
        <Col md={4}>
        <Form.Group className="mb-3" controlId="formBasicCourseEnd">
            <Form.Label className="form_label">Course End Date:</Form.Label>
            <br />
            <input
              onBlur={handleBlur}
              className="form-control"
              type="date"
              id="start"
              name="courseEndDate"
              min={todayDate}
              max="2015-12-31"
            ></input>
          </Form.Group>
        </Col>
        <Col md={4} className="columns">
          <Form.Group className="mb-3" controlId="formBasicDob">
            <Form.Label className="form_label">Enroll Due Date:</Form.Label>
            <br />
            <input
              className="form-control"
              type="date"
              id="start"
              name="enrollDueDate"
              onChange={handleBlur}
              min={todayDate}
              max={courseByTutor.classStartDateAndTime.substring(0, 10)}
            ></input>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
        <Form.Group className="mb-3" controlId="formBasicDob">
            <Form.Label className="form_label">Select Class Start Time:</Form.Label>
            <br />
            <input 
             className="form-control"
             type="time"
             id="appt" 
             name="appt"></input>
            
          </Form.Group>
        </Col>
        <Col md={4} className="columns">
          <Form.Group className="mb-3 form_select_duration" controlId="formBasicDistrict">
            <select
              className="form-select drop_down"
              onChange={handleBlur}
              name="classDuration"
            >
              <option style={{ display: "none" }}>Each Class Duration</option>
              {classDuration.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.value} Minutes
                </option>
              ))}
            </select>
          </Form.Group>
        </Col>
        <Col md={4} className="columns">
          <Form.Group className="mb-3" controlId="formBasicLocalLanguage">
            <Form.Label className="form_label">Select Class Days</Form.Label>
            <MultiSelect
              className="multiSelect"
              options={classDays}
              value={classDay}
              onChange={setClassDay}
              labelledBy={`Select Class Days`}
            />
          </Form.Group>
        </Col>

      </Row>
    
      {courseByTutor.classTypes === "Free Class" ? (
        ""
      ) : (
        <Row style={{ paddingTop: "15px" }}>
          <Col md={1}>
            <label style={{ paddingTop: "11px", paddingRight: "10px" }}>
              Fee:
            </label>
          </Col>
          <Col md={3}>
            <Form.Group className="mb-3" controlId="formBasicFee">
              <input
                className="form-control"
                name="tutionFee"
                onChange={handleBlur}
                type="number"
                placeholder="Enter amount e.g 100"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formBasicDistrict">
              <select
                className="form-select drop_down"
                onChange={handleBlur}
                name="feesTime"
              >
                <option>Per Hour</option>
                <option>Per Month</option>
                <option>Per Course</option>
              </select>
            </Form.Group>
          </Col>
        </Row>
      )}

      <Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Enter course description if any:</Form.Label>
          <Form.Control
            as="textarea"
            onChange={handleBlur}
            name="courseDescription"
            rows={3}
          />
        </Form.Group>
      </Row>
      <Row>
        <Col md={6}>
          <Card
            style={{
              width: "100%",
              height: "140px",
              border: "1px solid #B8B8B8",
            }}
          >
            <Card.Header className="card-header">
              Attach a file (course plan/curriculum/syllabus)
            </Card.Header>
            {progress !== 0 ? (
              <div className="progress">
                <div className="spinner-border text-primary">
                  <span className="sr-only"></span>
                </div>
              </div>
            ) : (
              <Card.Body>
                <br />
                <Row style={{ textAlign: "center" }}>
                  {courseByTutor && courseByTutor.docName !== "" ? (
                    <TiDelete
                      onClick={() =>
                        deleteImage(courseByTutor.docName, "docName")
                      }
                      className="doc_delete"
                    />
                  ) : (
                    ""
                  )}
                  <label>
                    <Card.Title className="click-for-upload">
                      <input
                        name="docName"
                        type="file"
                        onChange={handleChange}
                      />
                      {courseByTutor && courseByTutor.docName !== ""
                        ? courseByTutor.docName
                        : "Click for select"}
                    </Card.Title>
                  </label>
                </Row>
              </Card.Body>
            )}
          </Card>
        </Col>
        <Col md={6}>
          <Card
            style={{
              width: "100%",
              height: "140px",
              border: "1px solid #B8B8B8",
            }}
          >
            <Card.Header className="card-header">Add a video link:</Card.Header>
            <br />
            <input
              className="form-control d-flex justify-content-center"
              style={{ width: "90%", margin: "auto auto" }}
              onChange={handleBlur}
              name="courseVideoUrl"
              type="url"
              placeholder="eg. www.youtube.com/kxYsdjkd"
            />
          </Card>
        </Col>
      </Row>
      <br />
    </Container>
  );
};

export default CreateNewCourse;
