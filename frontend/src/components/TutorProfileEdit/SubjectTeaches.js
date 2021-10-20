import { React, useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import { Row, Col } from "react-bootstrap";
import { subjects } from "../../jsonData/Subjects";
import { useDispatch } from "react-redux";
import { subjectTeachesForm } from "../../actions/tutorActions";

const SubjectTeaches = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(props.subjectTeaches);
  }, [props]);

  useEffect(() => {
    data
      ? setSelected(muliselectFetch(data.secondarySubjects))
      : setSelected([]);
    data
      ? setSubjectTeaches(data)
      : setSubjectTeaches({
          primarySubject: "",
          secondarySubjects: [],
        });
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

    return arr;
  };

  const dispatch = useDispatch();

  const [selected, setSelected] = useState([]);
  const [SubjectTeaches, setSubjectTeaches] = useState({});

  useEffect(() => {
    SubjectTeaches.secondarySubjects = [];
    const hold = [...selected];
    hold.map((data) => SubjectTeaches.secondarySubjects.push(data.value));
  });

  const handleChangeSubjectTeaches = (event) => {
    const usereSubjectTeachess = { ...SubjectTeaches };
    usereSubjectTeachess[event.target.name] = event.target.value;
    setSubjectTeaches(usereSubjectTeachess);
  };

  useEffect(() => {
    dispatch(subjectTeachesForm(SubjectTeaches));
  });

  return (
    <div className="weeklyTime_div">
      <h6 className="time_heading">Subject Teaches:</h6>
      <Row>
        <Col md={5} className="mb-3">
          <label className="form-label">Primary Subject(One subject):</label>
          <select
            className="form-select"
            name="primarySubject"
            onBlur={handleChangeSubjectTeaches}
          >
            <option style={{ display: "none" }}>
            {data
                  ? SubjectTeaches.primarySubject === ""
                    ? "Select primary subject of teaching"
                    : SubjectTeaches.primarySubject
                  : ""}
            </option>
            {subjects.map((sub) => (
              <option key={sub.value} value={sub.value}>
                {sub.label}
              </option>
            ))}
          </select>
        </Col>
        <Col md={7}>
          <label className="form-label">
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
