import React from "react";
import FormContainer from "../common/FormContainer";
import { Row, Col, Form } from "react-bootstrap";

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
  return (
    <div style={{border: '1px solid rgba(153, 150, 150, 0.671)', paddingTop: '60px', paddingBottom: '20px', backgroundColor: '#E8E8E8'}}>
        <FormContainer>
        <Form>
      <Row style={{padding: '0px', display: 'flex', justifyContent: 'space-between'}}>
        <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  style={{
                    backgroundColor: "white",
                    border: "1px solid grey",
                    borderRadius: "5px",
                    width: '100%',
                    height: '50px',
                    color: '#B8B8B8'
                  }}
                  type="name"
                  placeholder="eg. Mr. Tareq"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhone">
                <Form.Label>Phone:</Form.Label>
                <Form.Control
                  style={{
                    backgroundColor: "white",
                    border: "1px solid grey",
                    borderRadius: "5px",
                    width: '100%',
                    height: '50px',
                    color: '#B8B8B8'
                  }}
                  type="tel"
                  placeholder="+8801836765672"
                />
              </Form.Group>

              <Form.Group>
                <label for="gender">Select gender</label>
                <br />
                <select style={{
                    backgroundColor: "white",
                    border: "1px solid grey",
                    borderRadius: "5px",
                    width: '100%',
                    height: '50px',
                    padding: '15px',
                    color: '#B8B8B8'
                  }} name="gender" id="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </Form.Group>

              <Form.Group>
              <label for="start">Start date:</label>

            <input style={{
                    backgroundColor: "white",
                    border: "1px solid grey",
                    borderRadius: "5px",
                    width: '100%',
                    height: '50px',
                    padding: '15px',
                    color: '#B8B8B8'
                  }} type="date" id="start" name="trip-start"
            value="2001-07-22"
            min="2001-01-01" max="2001-12-31"></input>
            </Form.Group>
        </Col>
        

        <Col md={6}>
        <Form.Group>
                <label for="presentdistrict">Present</label>
                <br />
                <select style={{
                    backgroundColor: "white",
                    border: "1px solid grey",
                    borderRadius: "5px",
                    width: '100%',
                    height: '50px',
                    padding: '15px',
                    color: '#B8B8B8'
                  }} name="presentdistrict" id="presentdistrict">
                    {presentdistrict.map(d => (
                        <option value={d.district}>{d.district}</option>
                    )) }
                </select>
              </Form.Group>

              <Form.Group>
                <label for="experience">Teaching</label>
                <br />
                <select style={{
                    backgroundColor: "white",
                    border: "1px solid grey",
                    borderRadius: "5px",
                    width: '100%',
                    height: '50px',
                    padding: '15px',
                    color: '#B8B8B8'
                  }} name="experience" id="experience">
                    {experience.map(e => (
                        <option value={e.year}>{e.year}</option>
                    )) }
                </select>
              </Form.Group>

              <Form.Group>
                <label for="languages">Can Speak?</label>
                <br />
                <select style={{
                    backgroundColor: "white",
                    border: "1px solid grey",
                    borderRadius: "5px",
                    width: '100%',
                    height: '50px',
                    padding: '15px',
                    color: '#B8B8B8'
                  }} name="languages" id="languages">
                    {languages.map(e => (
                        <option value={e.languages}>{e.languages}</option>
                    )) }
                </select>
              </Form.Group>

              <Form.Group>
                <label for="locallanguage">Understand</label>
                <br />
                <select style={{
                    backgroundColor: "white",
                    border: "1px solid grey",
                    borderRadius: "5px",
                    width: '100%',
                    height: '50px',
                    padding: '15px',
                    color: '#B8B8B8'
                  }} name="locallanguage" id="locallanguage">
                    {locallanguage.map(e => (
                        <option value={e.locallanguage}>{e.locallanguage}</option>
                    )) }
                </select>
              </Form.Group>
        </Col>
       
      </Row>
      </Form>
        </FormContainer>
    </div>
  );
};

export default BasicInfo;
