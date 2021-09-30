import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import "./BasicInfo.scss"
//  style={{border: '1px solid rgba(153, 150, 150, 0.671)', paddingTop: '60px', paddingBottom: '20px', backgroundColor: '#F9F9F9', paddingLeft: '100px', paddingRight: '100px', borderRadius: '10px'}}

const presentdistrict = [
    {
        "district": "Select District"
    },
    {
        "district": "Dhaka"
    },
    {
        "district": "Chattogram"
    },
    {
        "district": "Sylhet"
    },
    {
        "district": "Khulna"
    }
]

const experience = [
    {
      "year": "Select years of experience"
    },
    {
        "year": 1
    },
    {
        "year": 2
    },
    {
        "year": 3
    },
    {
        "year": 4
    },
    {
        "year": 5
    },
    {
        "year": 6
    },
    {
        "year": 7
    },
    {
        "year": 8
    },
    {
        "year": 9
    },
    {
        "year": 10
    }
]

const languages = [
    {
        "languages": "Bangla"
    },
    {
        "languages": "English"
    },
    {
        "languages": "Hindi"
    },
    {
        "district": "Arabic"
    }
]

const locallanguage = [
    {
        "locallanguage": "Chittagong local"
    },
    {
        "locallanguage": "Sylhet local"
    },
    {
        "locallanguage": "Noakhali local"
    },
    {
        "locallanguage": "Rajshahi local"
    }
]

const BasicInfo = () => {

  const dateInput = event => {
      event.preventDefault();
  }
  return (
    <div className="basic-info-body weeklyTime_div">
        <h6 className="time_heading">Basic info</h6>
      <Row>
        <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name:</Form.Label>
                <br />
                <input
                className="input-field"
                type="name"
               placeholder="eg. Mr. Tareq"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone:</Form.Label>
                <br />
                <input
                  className="input-field"
                  type="tel"
                  placeholder="+8801836765672"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicGender">
              <Form.Label>Gender:</Form.Label>
              <br />
                <select 
                className="input-field"
                name="gender" id="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicDob">
              <Form.Label>Date of Birth:</Form.Label>
              <br />
            <input 
            className="input-field"
            type="date" id="start" name="trip-start"
            onChange={dateInput}
            min="1901-01-01" max="2015-12-31"></input>
            </Form.Group>
        </Col>
        

        <Col md={6}>
        <Form.Group className="mb-3" controlId="formBasicDistrict">
                <Form.Label>Present District:</Form.Label>
                <br />
                <select 
                className="input-field"
                name="presentdistrict" id="presentdistrict">
                    {presentdistrict.map(d => (
                        <option value={d.district}>{d.district}</option>
                    )) }
                </select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicExperience">
               <Form.Label>Experience:</Form.Label>
               <br />
                <select 
                className="input-field"
                name="experience" id="experience">
                    {experience.map(e => (
                        <option value={e.year}>{e.year}</option>
                    )) }
                </select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLanguage">
                <Form.Label>Can Speak?</Form.Label>
                <br />
                <select 
                className="input-field"
                name="languages" id="languages">
                    {languages.map(e => (
                        <option value={e.languages}>{e.languages}</option>
                    )) }
                </select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLocalLanguage">
              <Form.Label>Local languages:</Form.Label>
              <br />
                <select 
                className="input-field"
                name="locallanguage" id="locallanguage">
                    {locallanguage.map(e => (
                        <option value={e.locallanguage}>{e.locallanguage}</option>
                    )) }
                </select>
              </Form.Group>
        </Col>
      </Row>

     
    </div>
  );
};

export default BasicInfo;
