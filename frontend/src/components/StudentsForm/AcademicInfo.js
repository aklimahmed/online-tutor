import React, { useState, useEffect } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import { classes } from '../../jsonData/Classes'
import { curriculum } from '../../jsonData/Curriculum'
import { subjects } from '../../jsonData/Subjects'
import { languages } from '../../jsonData/Language'
import { MultiSelect } from "react-multi-select-component";
import { educationboard } from '../../jsonData/EducationBoard'
import { useDispatch } from 'react-redux'
import { studentsAcademicInfoForm } from '../../actions/studentActions'

const AcademicInfo = () => {

  const [SubjectValue, setSubjectValue] = useState([]);
  const [LanguageValue, setLanguageValue] = useState([]);

  const [StudentAcademicInfo, setStudentAcademicInfo] = useState({
    studentClass: "",
    section: "",
    curriculum: "",
    studentSubjects: [],
    institutionName: "",
    studentLanguages: []
  });

  console.log(StudentAcademicInfo)

  const handleBlur = (event) => {
    const newBasicInfo = { ...StudentAcademicInfo };
    newBasicInfo[event.target.name] = event.target.value;
    setStudentAcademicInfo(newBasicInfo);
  };

  useEffect(() => {
    StudentAcademicInfo.studentSubjects = [];
    const hold = [...SubjectValue];
    hold.map((data) => StudentAcademicInfo.studentSubjects.push(data.value));
  });

  useEffect(() => {
    StudentAcademicInfo.studentLanguages = [];
    const hold = [...LanguageValue];
    hold.map((data) => StudentAcademicInfo.studentLanguages.push(data.value));
  });

  const dispatch = useDispatch();
  dispatch(studentsAcademicInfoForm(StudentAcademicInfo));

    return (
        <div className="basic-info-body weeklyTime_div">
        <h6 className="time_heading">Academic information:</h6>
        <Row>
          <Col md={6}>
          <Form.Group className="mb-3" controlId="formBasicExperience">
            <Form.Label>Class</Form.Label>
            <select
              className="form-select"
              name="studentClass"
              onBlur={handleBlur}
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
              onBlur={handleBlur}
            />
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicExperience">
            <Form.Label>curriculum:</Form.Label>
            <select
              className="form-select"
              name="curriculum"
              onBlur={handleBlur}
            >
              <option style={{ display: "none" }}>
                Select your study curriculum
              </option>
              {curriculum.map((e) => (
                <option value={e.curriculum}>{e.curriculum}</option>
              ))}
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSubject">
            <Form.Label>Subjects to learn:</Form.Label>
            <MultiSelect
              options={subjects}
              value={SubjectValue}
              onChange={setSubjectValue}
              labelledBy="Select"
            />
          </Form.Group> 
          </Col>
  
          <Col md={6}>
          <Form.Group className="mb-3" controlId="formBasicInstitution">
            <Form.Label>School / Institution Name:</Form.Label> 
            <input
              name="institutionName"
              className="form-control"
              type="text"
              placeholder="Enter your school / institution full name"
              onBlur={handleBlur}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicExperience">
            <Form.Label>Education Board:</Form.Label>
            <select
              className="form-select"
              name="curriculum"
              onBlur={handleBlur}
            >
              <option style={{ display: "none" }}>
              Select educational board
              </option>
              {educationboard.map((e) => (
                <option value={e.board}>{e.board}</option>
              ))}
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicSubject">
            <Form.Label>Preferred teaching language:</Form.Label>
            <MultiSelect
              options={languages}
              value={LanguageValue}
              onChange={setLanguageValue}
              labelledBy="Select"
            />
          </Form.Group> 
            
          </Col>
        </Row>
      </div>
    )
}

export default AcademicInfo
