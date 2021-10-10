import { React, useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import { Row, Col } from "react-bootstrap";
import { subjects } from "../../jsonData/Subjects";
import { useDispatch } from 'react-redux';
import { SubjectTeachesForm } from "../../actions/tutorActions";

const SubjectTeaches = () => {
 

  const dispatch = useDispatch();

  const [selected, setSelected] = useState([]);
  const [SubjectTeaches, setSubjectTeaches] = useState({
    primarySubject: "",
    secondarySubjects: [],
  });

  useEffect(() => {
    SubjectTeaches.secondarySubjects = [];
    const hold = [...selected];
    hold.map((data) => (
      SubjectTeaches.secondarySubjects.push(data.value)
    ));
  });

  const handleChangeSubjectTeaches = (event) => {
    const usereSubjectTeachess = { ...SubjectTeaches };
    usereSubjectTeachess[event.target.name] = event.target.value;
    setSubjectTeaches(usereSubjectTeachess);
  };

  useEffect(() => {
    dispatch(SubjectTeachesForm(SubjectTeaches));
  });

  return (
    <div className="weeklyTime_div">
      <h6 className="time_heading">Subject Teaches:</h6>
      <Row>
        <Col md={5} className="mb-3">
          <label for="Select" className="form-label">
            Primary Subject(One subject):
          </label>
          <select
            id="Select"
            className="form-select"
            name="primarySubject"
            onBlur={handleChangeSubjectTeaches}
          >
            <option style={{ display: "none" }}>
              Select primary subject of teaching
            </option>
            {subjects.map((sub) => (
              <option value={sub.value}>{sub.label}</option>
            ))}
          </select>
        </Col>
        <Col md={7}>
          <label for="Select" className="form-label">
            Secondary Subject(Multiple subjects):
          </label>
          <MultiSelect
            options={subjects}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
          />
        </Col>
      </Row>
    </div>
  );
};

export default SubjectTeaches;