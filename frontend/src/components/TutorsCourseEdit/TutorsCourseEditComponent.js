import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Card, Container, Form } from "react-bootstrap";
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
import { courseByTutorForm } from "../../actions/courseActions";

// data = fetchCourseDetails
// basicInfo = courseByTutor
const TutorsCourseEditComponent = (props) => {
  const [fetchCourseDetails, setFetchCourseDetails] = useState([]);

  useEffect(() => {
    setFetchCourseDetails(props.singleCourse.courseByTutor);
  }, [props]);

  useEffect(() => {
    fetchCourseDetails
      ? setClassDay(muliselectFetch(fetchCourseDetails.classDay))
      : setClassDay([]);
    fetchCourseDetails
      ? SetCourseByTutor(fetchCourseDetails)
      : SetCourseByTutor({
          classTypes: "",
          curriculum: "",
          classLevel: "",
          subject: "",
          batchType: "",
          noOfStudents: "",
          classDuration: "",
          classDay: [],
          classStartDateAndTime: "",
          classEndDateAndTime: "",
          enrollDueDate: "",
          tutionFee: 0,
          feesTime: "Per Hour",
          courseDescription: "",
          courseVideoUrl: "",
          courseId: "",
        });
  }, [fetchCourseDetails]);

  console.log(fetchCourseDetails)

  const muliselectFetch = (data) => {
    const arr = [];
    if (data) {
      data.map((data) =>
        arr.push({
          value: data,
          label: data,
        })
      );
    }

    return arr;
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
    classStartDateAndTime: "",
    classEndDateAndTime: "",
    enrollDueDate: "",
    tutionFee: 0,
    feesTime: "Per Hour",
    courseDescription: "",
    courseVideoUrl: "",
    courseId: "",
  });

  const handleBlur = (event) => {
    const newCourseByTutor = { ...courseByTutor };
    newCourseByTutor[event.target.name] = event.target.value;
    SetCourseByTutor(newCourseByTutor);
  };

  // const changeFre

  useEffect(() => {
    courseByTutor.classDay = [];
    const hold = [...classDay];
    hold.map((data) => courseByTutor.classDay.push(data.value));
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(courseByTutorForm(courseByTutor));
  });

  var todayDate = new Date().toISOString().slice(0, 10);

  var da = new Date();

  let currentHour = da.getHours();
  let currentTime = "";
  if (da.getMinutes() < 10) {
    currentTime = currentHour + ":0" + da.getMinutes();
  } else {
    currentTime = currentHour + ":" + da.getMinutes();
  }

  return (
    <Container className="course-add-container">
      <Row>
        <Col md={4} className="columns">
          <Form.Group className="mb-3 card-align" controlId="formBasicDistrict">
            <select
              className="form-select drop_down"
              name="classTypes"
              onChange={handleBlur}
            >
              <option style={{ display: "none" }}
              
              >
                {fetchCourseDetails
                  ? fetchCourseDetails.classTypes
                  : "Select Class Types"}
              </option>
              <option disabled>Free Class</option>
              <option disabled>Paid Class</option>
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
              <option style={{ display: "none" }}>
                {fetchCourseDetails
                  ? fetchCourseDetails.curriculum
                  : "Select Curriculum"}
              </option>
              {curriculum.map((d) => (
                <option key={curriculum.name} value={d.curriculum}>
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
              <option style={{ display: "none" }}>
                {fetchCourseDetails
                  ? fetchCourseDetails.classLevel
                  : "Select Class"}
              </option>
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
        <Col md={3} className="columns">
          <Form.Group className="mb-3 card-align" controlId="formBasicDistrict">
            <select
              className="form-select drop_down"
              onChange={handleBlur}
              name="subject"
            >
              <option style={{ display: "none" }}>
                {fetchCourseDetails
                  ? fetchCourseDetails.subject
                  : "Select Subject"}
              </option>
              {subjects.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
          </Form.Group>
        </Col>
        <Col md={3} className="columns">
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
              <option style={{ display: "none" }}>
                {fetchCourseDetails
                  ? fetchCourseDetails.batchType
                  : "Batch Type"}
              </option>
              <option>Batch Class</option>
              <option>One-to-One Class</option>
            </select>
          </Form.Group>
        </Col>
        <Col md={3} className="columns">
          <Form.Group className="mb-3" controlId="formBasicDistrict">
            <select
              className="form-select drop_down"
              onChange={handleBlur}
              name="noOfStudents"
            >
              <option style={{ display: "none" }}>
                {fetchCourseDetails
                  ? fetchCourseDetails.noOfStudents
                  : "No of Students"}
              </option>
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
        <Col md={3} className="columns">
          <Form.Group className="mb-3" controlId="formBasicDistrict">
            <select
              className="form-select drop_down"
              onChange={handleBlur}
              name="classDuration"
            >
              <option style={{ display: "none" }}>
                {fetchCourseDetails
                  ? `${fetchCourseDetails.classDuration} minutes`
                  : "Each Class Duration"}
              </option>
              {classDuration.map((d) => (
                <option key={classDuration.value} value={d.value}>
                  {d.value} minutes
                </option>
              ))}
            </select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="d-flex justify-content-between">
        <Col md={3} className="columns">
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
        <Col md={3} className="columns">
          <Form.Group>
            <Form.Label className="form_label">
              Class Start Date & Time
            </Form.Label>
            <input
              type="datetime-local"
              id="birthdaytime"
              name="classStartDateAndTime"
              onChange={handleBlur}
              placeholder="enter date and time"
              min={todayDate + "T" + currentTime}
              defaultValue={
                fetchCourseDetails
                  ? fetchCourseDetails.classStartDateAndTime
                  : ""
              }
              className="form-control date-time-input"
            ></input>
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label className="form_label">
              Class End Date & Time
            </Form.Label>
            <input
              type="datetime-local"
              id="birthdaytime"
              name="classEndDateAndTime"
              onChange={handleBlur}
              placeholder="enter date and time"
              min={courseByTutor.classStartDateAndTime}
              defaultValue={
                fetchCourseDetails ? fetchCourseDetails.classEndDateAndTime : ""
              }
              className="form-control date-time-input"
            ></input>
          </Form.Group>
        </Col>
        <Col md={3} className="columns">
          <Form.Group className="mb-3" controlId="formBasicDob">
            <Form.Label className="form_label">Enroll Due Date:</Form.Label>
            <br />
            <input
              className="form-control"
              type="date"
              id="start"
              name="enrollDueDate"
              onChange={handleBlur}
              defaultValue={
                fetchCourseDetails ? fetchCourseDetails.enrollDueDate : ""
              }
              min="2021-10-10"
              max="2025-10-10"
            ></input>
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
                defaultValue={
                  fetchCourseDetails && courseByTutor.classTypes === "Paid Class" ? fetchCourseDetails.tutionFee : ""
                }
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
                <option style={{ display: "none" }}>
                {fetchCourseDetails
                  ? fetchCourseDetails.feesTime
                  : "Select Payment Time"}
              </option>
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
            defaultValue={
              fetchCourseDetails ? fetchCourseDetails.courseDescription : ""
            }
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
            <Card.Body>
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
              defaultValue={
                fetchCourseDetails ? fetchCourseDetails.courseVideoUrl : ""
              }
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

export default TutorsCourseEditComponent;
