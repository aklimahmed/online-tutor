import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import "./BasicInfo.scss";

const presentdistrict = [
  {
    district: "Dhaka",
  },
  {
    district: "Chattogram",
  },
  {
    district: "Sylhet",
  },
  {
    district: "Khulna",
  },
];

const experience = [
  {
    year: 1,
  },
  {
    year: 2,
  },
  {
    year: 3,
  },
  {
    year: 4,
  },
  {
    year: 5,
  },
  {
    year: 6,
  },
  {
    year: 7,
  },
  {
    year: 8,
  },
  {
    year: 9,
  },
  {
    year: 10,
  },
];

const languages = [
  {
    languages: "Bangla",
    id: 1,
  },
  {
    languages: "English",
    id: 2,
  },
  {
    languages: "Hindi",
    id: 3,
  },
  {
    languages: "Arabic",
    id: 4,
  },
];

const locallanguage = [
  {
    locallanguage: "Chittagong local",
  },
  {
    locallanguage: "Sylhet local",
  },
  {
    locallanguage: "Noakhali local",
  },
  {
    locallanguage: "Rajshahi local",
  },
];

const BasicInfo = () => {

  const [tutorInfo, setTutorInfo] = useState({
    name: "",
    phone: "",
    gender: "",
    birthDate: "",
    presentDistrict: "",
    experience: 0,
    languages: '',
    locallanguage: '',
  });

  const handleBlur = (event) => {
    const newTutorInfo = { ...tutorInfo };
    newTutorInfo[event.target.name] = event.target.value;
    setTutorInfo(newTutorInfo);
    console.log(tutorInfo);
  };

  return (
    <div className="basic-info-body weeklyTime_div">
      <h6 className="time_heading">Basic info</h6>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name:</Form.Label>
            <br />
            <input
              onBlur={handleBlur}
              name="name"
              className="form-control"
              type="text"
              placeholder="Azizul Hakim Tareq"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone:</Form.Label>
            <br />
            <input
              onBlur={handleBlur}
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
              onBlur={handleBlur}
              className="form-select"
              name="gender"
              id="gender"
            >
              <option style={{ display: "none" }}>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDob">
            <Form.Label>Date of Birth:</Form.Label>
            <br />
            <input
              onBlur={handleBlur}
              className="form-control"
              type="date"
              id="start"
              name="birthDate"
              min="1901-01-01"
              max="2015-12-31"
            ></input>
          </Form.Group>
        </Col>

        <Col md={6}>
          <Form.Group className="mb-3" controlId="formBasicDistrict">
            <Form.Label>Present District:</Form.Label>
            <br />
            <select
              onBlur={handleBlur}
              className="form-select"
              name="presentDistrict"
              id="presentdistrict"
            >
              <option style={{ display: "none" }}>Select district name</option>
              {presentdistrict.map((d) => (
                <option value={d.district}>{d.district}</option>
              ))}
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicExperience">
            <Form.Label>Experience:</Form.Label>
            <br />
            <select
              onBlur={handleBlur}
              className="form-select"
              name="experience"
              id="experience"
            >
              <option style={{ display: "none" }}>
                Select total years of teaching experience
              </option>
              {experience.map((e) => (
                <option value={e.year}>{e.year}</option>
              ))}
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLanguage">
          <Form.Label>Can Speak?</Form.Label>
            <br />
            <select
              onBlur={handleBlur}
              className="form-select"
              name="languages"
              id="languages"
            >
                <option style={{ display: "none" }}>Select language</option>
              {languages.map((e) => (
                <option value={e.languages}>{e.languages}</option>
              ))}
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLocalLanguage">
            <Form.Label>Local languages:</Form.Label>
            <br />
            <select
              onBlur={handleBlur}
              className="form-select"
              name="localLanguage"
              id="locallanguage"
            >
              <option style={{ display: "none" }}>Select local language</option>
              {locallanguage.map((e) => (
                <option value={e.locallanguage}>{e.locallanguage}</option>
              ))}
            </select>
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default BasicInfo;