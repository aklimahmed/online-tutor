import React, { useState } from "react";
import { Row, Col, Card, Container, Form, Button } from "react-bootstrap";
import "./CreateNewCourse.scss";
import { MultiSelect } from "react-multi-select-component";
import { curriculum } from "../../jsonData/Curriculum";
import { classes } from "../../jsonData/Classes";
import { subjects} from "../../jsonData/Subjects";
import { numberOfStudents } from "../../jsonData/NumberOfStudents"
import { classDays } from "../../jsonData/ClassDays"

const CreateNewCourse = () => {
  const [classDay, setClassDay] = useState([]);
  return (
    <Container className="course-add-container">
      <Row>
      <Col md={4} className="columns">
          <Form.Group className="mb-3 card-align" controlId="formBasicDistrict">
            <select className="form-select drop_down" name="presentDistrict">
              <option style={{ display: "none" }}>Select Class Types</option>
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
            <select className="form-select drop_down" name="presentDistrict">
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
            <select className="form-select drop_down" name="presentDistrict">
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
        
    
     
      

      <Row>
      <Col md={3} className="columns">
          <Form.Group className="mb-3 card-align" controlId="formBasicDistrict">
            <select className="form-select drop_down" name="presentDistrict">
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
            <select className="form-select drop_down" name="presentDistrict">
              <option style={{ display: "none" }}>Select Batch Type</option>
                <option>Batch Class</option>
                <option>One-to-One Class</option>
            </select>
          </Form.Group>
        </Col>
        <Col md={3} className="columns">
        <Form.Group className="mb-3" controlId="formBasicDistrict">
            <select className="form-select drop_down" name="presentDistrict">
              <option style={{ display: "none" }}>No of Students</option>
              {numberOfStudents.map((d) => (
                <option key={d.numberOfStudents} value={d.numberOfStudents}>
                  {d.numberOfStudents}
                </option>
              ))}
            </select>
          </Form.Group>
        
        </Col>
        <Col md={3} className="columns">
          <Form.Group className="mb-3" controlId="formBasicDistrict">
            <select className="form-select drop_down" name="presentDistrict">
              <option style={{ display: "none" }}>Each Class Duration</option>
              {curriculum.map((d) => (
                <option key={curriculum.name} value={d.curriculum}>
                  {d.curriculum}
                </option>
              ))}
            </select>
          </Form.Group>
        </Col>
        </Row>
        <Row>
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
              name="birthdaytime"
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
              name="birthdaytime"
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
              name="birthDate"
              min="2021-10-10"
              max="2025-10-10"
              required
            ></input>
          </Form.Group>
        </Col>
      </Row>
      <Row style={{ paddingTop: "15px" }}>
        <Col md={1}><label style={{paddingTop: '11px', paddingRight: '10px'}}>Fee:</label></Col>
        <Col md={3}>
          <Form.Group className="mb-3" controlId="formBasicFee">
            <input
              className="form-control"
              name="tutionFee"
              type="number"
              placeholder="Enter amount e.g 100"
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group className="mb-3" controlId="formBasicDistrict">
            <select className="form-select drop_down" name="presentDistrict">
              <option>Per Hour</option>
              <option>Per Month</option>
              <option>Per Course</option>
            </select>
          </Form.Group>
        </Col>
        <Col md={4}>
        <div className="d-flex">
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              className="check-class"
              type="checkbox"
            />
          </Form.Group>
          
          </div>
        </Col>
      </Row>
      <Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Enter course description if any:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Row>
      <Row>
        <Col md={6}>
        <Card style={{ width: "100%" }}>
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
        <Col md={6} >
        <Card.Header className="card-header">
        Add a video link:
            </Card.Header>
            <br />
          <input
            className="form-control"
            type="url"
            placeholder="eg. www.youtube.com/kxYsdjkd"
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <div className="button-2" style={{ paddingLeft: "20px" }}>
            <Button
              type="submit"
              style={{ float: "right", backgroundColor: "#008593" }}
            >
              SAVE
            </Button>
            <Button
              variant="info"
              type="submit"
              style={{ float: "right", color: "#fff", marginRight: '20px'}}
            >
              RESET
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateNewCourse;
