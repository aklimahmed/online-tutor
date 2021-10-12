import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import { MultiSelect } from "react-multi-select-component";
import { presentdistrict } from "../../jsonData/PresentDistrict";

const StudentsBasicInfo = () => {
    return (
        <div className="basic-info-body weeklyTime_div">
      <h6 className="time_heading">Basic info:</h6>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name:</Form.Label> 
            <input
              name="name"
              className="form-control"
              type="text"
              placeholder="Aklim Ahmed"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone:</Form.Label>
            <br />
            <input
              name="phone"
              className="form-control"
              type="tel"
              placeholder="+8801836765672"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicGender">
            <Form.Label>Gender:</Form.Label>
            <br />
            <select
              className="form-select"
              name="gender"
            >
              <option value ="" selected disabled hidden>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDob">
            <Form.Label>Date of Birth:</Form.Label>
            <br />
            <input
              className="form-control"
              type="date"
              id="start"
              name="birthDate"
              min="1901-01-01"
              max="2015-12-31"
              required
            ></input>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3" controlId="formBasicDistrict">
            <Form.Label>Present District:</Form.Label>
            <select
              className="form-select"
              name="presentDistrict"
            >
            <option style={{ display: "none" }}>Select district name</option>
            {presentdistrict.map((d) => (
            <option value={d.name}>{d.name}</option>
            ))}
              
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Father's name:</Form.Label> 
            <input
              name="fathersName"
              className="form-control"
              type="text"
              placeholder="Enter your father name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Mother's name:</Form.Label> 
            <input
              name="mothersName"
              className="form-control"
              type="text"
              placeholder="Enter your mother name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Parents mobile number:</Form.Label>
            <br />
            <input
              name="parentsPhone"
              className="form-control"
              type="tel"
              placeholder="Enter your parents mobile number"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Parents email address:</Form.Label>
            <br />
            <input
              name="parentsEmail"
              className="form-control"
              type="email"
              placeholder="Enter your parents email address"
            />
          </Form.Group>


          
        </Col>
      </Row>
    </div>
    )
}

export default StudentsBasicInfo
