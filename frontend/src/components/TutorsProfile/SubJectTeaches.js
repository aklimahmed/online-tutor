import { React, useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import { Row, Col } from "react-bootstrap";

const SubjectTeaches = () => {
  const subjects = [
    { value: "Accounting", label: "Accounting" },
    { value: "Art", label: "Art" },
    { value: "Art & Design", label: "Art & Design" },
    { value: "Bangla", label: "Bangla" },
    {
      value: "Bangladesh and Global Studies",
      label: "Bangladesh and Global Studies",
    },
    { value: "Bangladesh Studies", label: "Bangladesh Studies" },
    { value: "Physics", label: "Physics" },
    { value: "Math", label: "Math" },
    { value: "English", label: "English" },
    { value: "Biology", label: "Biology" },
    { value: "Business Entrepreneurship", label: "Business Entrepreneurship" },
    { value: "Business Studies", label: "Business Studies" },
    { value: "Chemistry", label: "Chemistry" },
    { value: "Combined Science", label: "Combined Science" },
    { value: "Computer Science", label: "Computer Science" },
    { value: "Economics", label: "Economics" },
    { value: "English Language", label: "English Language" },
    { value: "English Literature", label: "English Literature" },
    { value: "Environment Management", label: "Environment Management" },
    { value: "Ethics and Religions", label: "Ethics and Religions" },
    { value: "inance and Banking", label: "inance and Banking" },
    { value: "General Science", label: "General Science" },
    { value: "Higher Math", label: "Higher Math" },
    { value: "History", label: "History" },
    { value: "Law", label: "Law" },
    { value: "Music and Drama", label: "Music and Drama" },
    { value: "Psychology", label: "Psychology" },
    { value: "Religion", label: "Religion" },
    { value: "Science", label: "Science" },
    { value: "Sociology", label: "Sociology" },
    { value: "Statistics", label: "Statistics" },
  ];

  const [selected, setSelected] = useState([]);
  const [input, setinput] = useState({
    primarySubject: "",
    secondarySubjects: [],
  });

  useEffect(() => {
    input.secondarySubjects = [];
    const hold = [...selected];
    hold.map((data) => {
      input.secondarySubjects.push(data.value);
    });
  }, [selected]);

  const handleChangeInput = (event) => {
    const usereInputs = { ...input };
    usereInputs[event.target.name] = event.target.value;
    setinput(usereInputs);
  };

  console.log(input);

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
            onBlur={handleChangeInput}
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