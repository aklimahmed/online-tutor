import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import { Row, Col, Form } from "react-bootstrap";
import "./BasicInfo.scss";
import { useDispatch, useSelector } from "react-redux";
import { languages } from "./../../jsonData/Language";
import { presentdistrict } from "../../jsonData/PresentDistrict";
import { experience } from "../../jsonData/Experience";
import { locallanguage } from "../../jsonData/LocalLanguage";
import { createTutor } from '../../actions/tutorActions'

const BasicInfo = () => {
  const [local, setLocal] = useState([]);

  const [language, setLanguage] = useState([]);
  const [BasicInfo, setBasicInfo] = useState({
    name: "",
    phone: "",
    gender: "",
    birthDate: "",
    presentDistrict: "",
    experience: 0,
    languages: [],
    locallanguage: [],
  });

  const dispatch = useDispatch();
  // const tutorInfo = useSelector((state) => state.tutorForm);
  // const { loading, error, tutorInfo } = tutorForm;

  useEffect(() => {
    dispatch(createTutor(BasicInfo));
  }, [BasicInfo]);

  const handleBlur = (event) => {
    const newBasicInfo = { ...BasicInfo };
    newBasicInfo[event.target.name] = event.target.value;
    setBasicInfo(newBasicInfo);
  };

  useEffect(() => {
    BasicInfo.locallanguage = [];
    const hold = [...local];
    hold.map((data) => BasicInfo.locallanguage.push(data.value));
  });

  useEffect(() => {
    BasicInfo.languages = [];
    const hold = [...language];
    hold.map((data) => BasicInfo.languages.push(data.value));
  });

  return (
    <div className="basic-info-body weeklyTime_div">
      <h6 className="time_heading">Basic info:</h6>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name:</Form.Label> 
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
                <option value={d.name}>{d.name}</option>
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
            <MultiSelect
              options={languages}
              value={language}
              onChange={setLanguage}
              labelledBy="Select"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLocalLanguage">
            <Form.Label>Understand local language:</Form.Label>
            <br />
            <MultiSelect
              className="multiSelect"
              options={locallanguage}
              value={local}
              onChange={setLocal}
              labelledBy="Select"
            />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default BasicInfo;
