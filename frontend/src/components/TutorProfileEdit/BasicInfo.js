import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import { Row, Col, Form } from "react-bootstrap";
import "./BasicInfo.scss";
import { useDispatch} from "react-redux";
import { languages } from "./../../jsonData/Language";
import { presentdistrict } from "../../jsonData/PresentDistrict";
import { experience } from "../../jsonData/Experience";
import { locallanguage } from "../../jsonData/LocalLanguage";
import { basicInfoForm } from "./../../actions/tutorActions";

const BasicInfo = (props) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.basic);
  }, [props]);


  useEffect(() => {
    data ? setLanguage(muliselectFetch(data.languages)) : setLanguage([]);
    data ? setLocal(muliselectFetch(data.locallanguage)) : setLocal([]);
  }, [data]);

  const muliselectFetch = (data) => {
    const arr = [];
    if (data) {
      data.map((data) =>
        arr.push({
          value: data,
          label: data,
        })
      );
    }

    return(arr);
  };

  const [local, setLocal] = useState([]);

  const [language, setLanguage] = useState([]);

  const [BasicInfo, setBasicInfo] = useState({
    tutorsName: "",
    phone: "",
    gender: "",
    birthDate: "",
    presentDistrict: "",
    experience: 0,
    languages: [],
    locallanguage: [],
  });

  const dispatch = useDispatch();


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

  useEffect(() => {
    dispatch(basicInfoForm(BasicInfo));
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
              name="tutorsName"
              defaultValue={data ? data.tutorsName : ""}
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
              defaultValue={data ? data.phone : ""}
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
            >
              <option style={{ display: "none" }}>{data ? data.gender : "Select Gender"}</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDob">
            <Form.Label>Date of Birth:</Form.Label>
            <br />
            <input
              onBlur={handleBlur}
              className="form-control"
              type="date"
              name="birthDate"
              defaultValue={data ? data.birthDate : ""}
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
              onBlur={handleBlur}
              className="form-select"
              name="presentDistrict"
            >
              <option style={{ display: "none" }}>{data ? data.presentDistrict : "Select district name"}</option>
              {presentdistrict.map((d) => (
                <option key={d.name} value={d.name}>{d.name}</option>
              ))}
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicExperience">
            <Form.Label>Experience:</Form.Label>
            <select
              onBlur={handleBlur}
              className="form-select"
              name="experience"
            >
              <option style={{ display: "none" }}>
              {data ? data.experience : "Select total years of teaching experience"}
              </option>
              {experience.map((e) => (
                <option key={e.year} value={e.year}>{e.year}</option>
              ))}
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLocalLanguage">
            <Form.Label>Can Speak?</Form.Label>
            <MultiSelect
              options={languages}
              value={language}
              onChange={setLanguage}
              labelledBy="Select"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLocalLanguage">
            <Form.Label>Understand local language:</Form.Label>
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
