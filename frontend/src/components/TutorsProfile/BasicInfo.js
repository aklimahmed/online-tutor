import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
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
    value: "Bangla",
    label: "Bangla",
  },
  {
    value: "English",
    label: "English",
  },
  {
    value: "Hindi",
    label: "Hindi",
  },
  {
    value: "Arabic",
    label: "Arabic",
  },
  {
    value: "Chinese",
    label: "Chinese",
  },
  {
    value: "Spanish",
    label: "Spanish",
  },
  {
    value: "French",
    label: "French",
  },
];

const locallanguage = [
  {
    value: "Chittagonian",
    label: "Chittagonian",
  },
  {
    value: "Sylheti",
    label: "Sylheti",
  },
  {
    value: "Rangpuri",
    label: "Rangpuri",
  },
  {
    value: "Noakhailla",
    label: "Noakhailla",
  },
  {
    value: "Chakma",
    label: "Chakma",
  },
  {
    value: "Bishnupriya",
    label: "Bishnupriya",
  },
  {
    value: "Hajong",
    label: "Hajong",
  },
  {
    value: "Rohingya",
    label: "Rohingya",
  },
];

const BasicInfo = () => {
  const [local, setLocal] = useState([]);

  const [language, setLanguage] = useState([]);

  const [tutorInfo, setTutorInfo] = useState({
    name: "",
    phone: "",
    gender: "",
    birthDate: "",
    presentDistrict: "",
    experience: 0,
    languages: [],
    locallanguage: [],
  });

  const handleBlur = (event) => {
    const newTutorInfo = { ...tutorInfo };
    newTutorInfo[event.target.name] = event.target.value;
    setTutorInfo(newTutorInfo);
    console.log(tutorInfo);
  };
  

  useEffect(() => {
    tutorInfo.locallanguage = [];
    const hold = [...local];
    hold.map((data) => {
      tutorInfo.locallanguage.push(data.value);
    });
  }, [local]);

  useEffect(() => {
    tutorInfo.languages = [];
    const hold = [...language];
    hold.map((data) => {
      tutorInfo.languages.push(data.value);
    });
  }, [language]);

  console.log(tutorInfo);

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
              placeholder="Aklim Ahmed"
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

          <Form.Group className="mb-3" controlId="formBasicLocalLanguage">
            <Form.Label>Can Speak?</Form.Label>
            <br />
<<<<<<< HEAD
            <Select
              name="locallanguage"
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={languages}
              value={languages.value}
              
=======
            <MultiSelect
              options={languages}
              value={language}
              onChange={setLanguage}
              labelledBy="Select"
>>>>>>> b4418e4ae597e9f9edeab1450a2d68223125d50c
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLocalLanguage">
            <Form.Label>Understand local language:</Form.Label>
            <br />
<<<<<<< HEAD
            <Select
              name="locallanguage"
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={locallanguage}
              value={locallanguage.value}
=======
            <MultiSelect
              className="multiSelect"
              options={locallanguage}
              value={local}
              onChange={setLocal}
              labelledBy="Select"
>>>>>>> b4418e4ae597e9f9edeab1450a2d68223125d50c
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default BasicInfo;
