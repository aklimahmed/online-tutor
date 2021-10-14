import React from "react";
import { Row, Col, Dropdown, Container, Form, Button } from "react-bootstrap";
import "./CreateNewCourse.scss";
import { curriculum } from "../../jsonData/Curriculum";

const CreateNewCourse = () => {
  return (
    <Container className="course-add-container">
      <Row>
        <Col md={3} className="columns">
          <Form.Group className="mb-3" controlId="formBasicDistrict">
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
        <Col md={3} className="columns">
          <Form.Group className="mb-3" controlId="formBasicDistrict">
            <select className="form-select drop_down" name="presentDistrict">
              <option style={{ display: "none" }}>Select Class</option>
              {curriculum.map((d) => (
                <option key={curriculum.name} value={d.curriculum}>
                  {d.curriculum}
                </option>
              ))}
            </select>
          </Form.Group>
        </Col>
        <Col md={3} className="columns">
          <Form.Group className="mb-3" controlId="formBasicDistrict">
            <select className="form-select drop_down" name="presentDistrict">
              <option style={{ display: "none" }}>Select Subject</option>
              {curriculum.map((d) => (
                <option key={curriculum.name} value={d.curriculum}>
                  {d.curriculum}
                </option>
              ))}
            </select>
          </Form.Group>
        </Col>
        <Col md={3} className="columns">
          <Form.Group className="mb-3" controlId="formBasicDistrict">
            <select className="form-select drop_down" name="presentDistrict">
              <option style={{ display: "none" }}>Select Batch Type</option>
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
        <Col md={4} className="columns">
          <Form.Group className="mb-3" controlId="formBasicDistrict">
            <select className="form-select drop_down" name="presentDistrict">
              <option style={{ display: "none" }}>No of Students</option>
              {curriculum.map((d) => (
                <option key={curriculum.name} value={d.curriculum}>
                  {d.curriculum}
                </option>
              ))}
            </select>
          </Form.Group>
        </Col>
        <Col md={4} className="columns">
          <Form.Group className="mb-3" controlId="formBasicDistrict">
            <select className="form-select drop_down" name="presentDistrict">
              <option style={{ display: "none" }}>Select Class Days</option>
              {curriculum.map((d) => (
                <option key={curriculum.name} value={d.curriculum}>
                  {d.curriculum}
                </option>
              ))}
            </select>
          </Form.Group>
        </Col>
        <Col md={4} className="columns">
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
        <Col md={4} className="columns">
          <Form.Group>
            <Form.Label>Class Start Date & Time</Form.Label>
            <input
              type="datetime-local"
              id="birthdaytime"
              name="birthdaytime"
              placeholder="enter date and time"
              className="form-control date-time-input"
            ></input>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Class Start Date & Time</Form.Label>
            <input
              type="datetime-local"
              id="birthdaytime"
              name="birthdaytime"
              placeholder="enter date and time"
              className="form-control date-time-input"
            ></input>
          </Form.Group>
        </Col>
        <Col md={4} className="columns">
          <Form.Group>
            <Form.Label>Enroll Due Date</Form.Label>
            <input
              type="datetime-local"
              id="birthdaytime"
              name="birthdaytime"
              className="form-control date-time-input"
            ></input>
          </Form.Group>
        </Col>
      </Row>
      <Row style={{ paddingTop: "15px" }}>
        <Col md={1}>Fee:</Col>
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
        <Col md={2}>
          <Form.Group className="mb-3" controlId="formBasicDistrict">
            <select className="form-select drop_down" name="presentDistrict">
              <option>Per Hour</option>
              <option>Per Week</option>
              <option>Per Month</option>
            </select>
          </Form.Group>
        </Col>
        <Col md={1}>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check style={{float: 'right'}}
              className="check-class"
              type="checkbox"
            />
          </Form.Group>
        </Col>
        <Col md={3}>
        <label for="vehicle1"> FREE Class</label>
        </Col>
      </Row>
      <Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Enter course description if any:</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Row>
      <Row>
        <Col md={4}>
          <label for="myfile">Select a file:</label>
          <input type="file" id="myfile" name="myfile"></input>
        </Col>
        <Col md={4}>
        <label for="myfile">Add a video URL from youtube:</label>
        </Col>
        <Col md={4}>
        <input className="form-control" type="url"
        placeholder="eg. www.youtube.com/kxYsdjkd"
        />
        </Col>
      </Row>
      <br />
      <Row>
          
          <Col>
          <div className="button-2" style={{paddingLeft: '20px'}}>
        <Button type="submit" style={{float: 'right', backgroundColor: '#008593'}}>
          SAVE
        </Button>
      </div>
      <div className="button-1">
        <Button variant="info" type="submit" style={{float: 'right', color: '#fff'}}>
          RESET
        </Button>
      </div>
      
      
      </Col>
      </Row>
    </Container>
  );
};

export default CreateNewCourse;
