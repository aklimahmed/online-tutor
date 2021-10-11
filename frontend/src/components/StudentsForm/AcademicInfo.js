import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import { classes } from '../../jsonData/Classes'
import { curriculum } from '../../jsonData/Curriculum'
import { subjects } from '../../jsonData/Subjects'
import { MultiSelect } from "react-multi-select-component";

const AcademicInfo = () => {
    return (
        <div className="basic-info-body weeklyTime_div">
        <h6 className="time_heading">Basic info:</h6>
        <Row>
          <Col md={6}>
          <Form.Group className="mb-3" controlId="formBasicExperience">
            <Form.Label>Class</Form.Label>
            <select
              className="form-select"
              name="class"
            >
              <option style={{ display: "none" }}>
                Select your class
              </option>
              {classes.map((e) => (
                <option value={e.class}>{e.class}</option>
              ))}
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Section:</Form.Label> 
            <input
              name="section"
              className="form-control"
              type="text"
              placeholder="Enter your section (e.g. A)"
            />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicExperience">
            <Form.Label>curriculum:</Form.Label>
            <select
              className="form-select"
              name="curriculum"
            >
              <option style={{ display: "none" }}>
                Select your study curriculum
              </option>
              {curriculum.map((e) => (
                <option value={e.curriculum}>{e.curriculum}</option>
              ))}
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLocalLanguage">
            <Form.Label>Can Speak?</Form.Label>
            <MultiSelect
              className="multiSelect"
              options={subjects}
              value={subjects}
              labelledBy="Select"
            />
          </Form.Group>

            
          </Col>
  
          <Col md={6}>
            
          </Col>
        </Row>
      </div>
    )
}

export default AcademicInfo
