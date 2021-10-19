import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Card, Container, Form } from "react-bootstrap";
import "./CreateNewCourse.scss";
import { MultiSelect } from "react-multi-select-component";
import { curriculum } from "../../jsonData/Curriculum";
import { classes } from "../../jsonData/Classes";
import { subjects} from "../../jsonData/Subjects";
import { numberOfStudents, numberOfStudentsInFreeClass } from "../../jsonData/NumberOfStudents"
import { classDays } from "../../jsonData/ClassDays"
import { classDuration } from "../../jsonData/classDuration";
import { courseByTutorForm } from "./../../actions/courseActions"

const CreateNewCourse = () => {

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

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
      courseVideoUrl: ""
  })

  console.log(courseByTutor)

  const formateDateAndTime = (value) => {
    const date = value.substring(0, 9)
    const d = new Date(date);
    let month = monthNames[d.getMonth()]
    let dateAndTime ="T "+value[11]+value[12]+":"+value[14]+value[15]+ value[8]+value[9]+" "+month+" "+value[0]+value[1]+value[2]+value[3];
    return dateAndTime;
  }

  const handleBlur = (event) => {
    const newCourseByTutor = { ...courseByTutor };

    if(event.target.name === "classStartDateAndTime" || event.target.name === "classEndDateAndTime"){
      newCourseByTutor[event.target.name] = formateDateAndTime(event.target.value);
      SetCourseByTutor(newCourseByTutor);
    }else{
    newCourseByTutor[event.target.name] = event.target.value;
    SetCourseByTutor(newCourseByTutor);
    }
  };

  useEffect(() => {
    courseByTutor.classDay = [];
    const hold = [...classDay];
    hold.map((data) => courseByTutor.classDay.push(data.value));
  });

  const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(courseByTutorForm(courseByTutor));
  });





  return (
    <Container className="course-add-container">
      
      <Row>
      <Col md={4} className="columns">
          <Form.Group className="mb-3 card-align" controlId="formBasicDistrict">
            <select className="form-select drop_down" 
            name="classTypes"
            onBlur={handleBlur}
            >
              <option style={{ display: "none" }}>Select Class Types</option>
                <option>Free Class</option>
                <option>Paid Class</option>
            </select>
          </Form.Group>
        </Col>
        <Col md={4} className="columns">
          <Form.Group className="mb-3 card-align" controlId="formBasicDistrict">
            <select className="form-select drop_down" 
            onBlur={handleBlur}
            name="curriculum">
              <option style={{ display: "none" }}>Select Curriculum</option>
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
            <select className="form-select drop_down" 
            onBlur={handleBlur}
            name="classLevel">
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
      <Col md={3} className="columns">
          <Form.Group className="mb-3 card-align" controlId="formBasicDistrict">
            <select className="form-select drop_down"
            onBlur={handleBlur}
            name="subject">
              <option style={{ display: "none" }}>Select Subject</option>
              {subjects.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
          </Form.Group>
        </Col>
        <Col md={3} className="columns">
          <Form.Group className="mb-3 card-align" controlId="formBasicDistrict" style={{width: "100%"}}>
            <select className="form-select drop_down" 
            onBlur={handleBlur}
            name="batchType">
              <option style={{ display: "none" }}>Select Batch Type</option>
                <option>Batch Class</option>
                <option>One-to-One Class</option>
            </select>
          </Form.Group>
        </Col>
        <Col md={3} className="columns">
        <Form.Group className="mb-3" controlId="formBasicDistrict">
            <select className="form-select drop_down" 
            onBlur={handleBlur}
            name="noOfStudents">

            
              <option style={{ display: "none" }}>No of Students</option>

              {courseByTutor.classTypes === "Free Class" ? 
            <>
            {numberOfStudentsInFreeClass.map((d) => (
              <option key={d.numberOfStudents} value={d.numberOfStudents}>
                {d.numberOfStudents}
              </option>
            ))} 
            </>
            :
            <>
            {numberOfStudents.map((d) => (
              <option key={d.numberOfStudents} value={d.numberOfStudents}>
                {d.numberOfStudents}
              </option>
            ))}
          </>
          }

              
            </select>
          </Form.Group>
        </Col>
        <Col md={3} className="columns">
          <Form.Group className="mb-3" controlId="formBasicDistrict">
            <select className="form-select drop_down" 
            onBlur={handleBlur}
            name="classDuration">
              <option style={{ display: "none" }}>Each Class Duration</option>
              {classDuration.map((d) => (
                <option key={classDuration.value} value={d.value}>
                  {d.value} Minutes
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
            <MultiSelect className="multiSelect"
              options={classDays}
              value={classDay}
              onChange={setClassDay}
              labelledBy={`Select Class Days`}
            />
          </Form.Group>
        </Col>
        <Col md={3} className="columns">
          <Form.Group>
            <Form.Label className="form_label">Class Start Date & Time</Form.Label>
            <input
              type="datetime-local"
              id="birthdaytime"
              name="classStartDateAndTime"
              onBlur={handleBlur}
              placeholder="enter date and time"
              className="form-control date-time-input"
            ></input>
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label className="form_label">Class End Date & Time</Form.Label>
            <input
              type="datetime-local"
              id="birthdaytime"
              name="classEndDateAndTime"
              onBlur={handleBlur}
              placeholder="enter date and time"
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
              onBlur={handleBlur}
              min="2021-10-10"
              max="2025-10-10"
            ></input>
          </Form.Group>
        </Col>
      </Row>
      {courseByTutor.classTypes === "Free Class" ? '' : 
      <Row style={{ paddingTop: "15px" }}>
      <Col md={1}><label style={{paddingTop: '11px', paddingRight: '10px'}}>Fee:</label></Col>
      <Col md={3}>
        <Form.Group className="mb-3" controlId="formBasicFee">
          <input
            className="form-control"
            name="tutionFee"
            onBlur={handleBlur}
            type="number"
            placeholder="Enter amount e.g 100"
          />
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group className="mb-3" controlId="formBasicDistrict">
          <select className="form-select drop_down"
          onBlur={handleBlur} 
          name="feesTime">
            <option>Per Hour</option>
            <option>Per Month</option>
            <option>Per Course</option>
          </select>
        </Form.Group>
      </Col>
    </Row>
      
      
      }
      
      <Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Enter course description if any:</Form.Label>
          <Form.Control as="textarea" 
          onBlur={handleBlur}
          name="courseDescription" rows={3} />
        </Form.Group>
      </Row>
      <Row>
        <Col md={6}>
        <Card style={{ width: "100%",height:"140px", border: '1px solid #B8B8B8'}}>
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
          <Card style={{ width: "100%",height:"140px", border: '1px solid #B8B8B8'}}>
        <Card.Header className="card-header">
        Add a video link:
            </Card.Header>
            <br />
          <input
            className="form-control"
            onBlur={handleBlur}
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
