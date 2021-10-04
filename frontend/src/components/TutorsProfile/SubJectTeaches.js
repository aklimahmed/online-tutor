import { React, useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
import { Row, Col } from "react-bootstrap";

const SubJectTeaches = () => {
  const subject = [{ sub: "Physics" }, { sub: "Math" }, { sub: "English" }];
  const options = [
    { value: "Physics", label: "Physics" },
    { value: "Math", label: "Math" },
    { value: "English", label: "English" },
  ];

  const [selected, setSelected] = useState([]);
  const [input, setinput] = useState({
    primarySubject: "",
    secondarySubjects: [],
  });

  useEffect(() => {
    input.secondarySubjects=[]
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
            {subject.map((sub) => (
              <option value={sub.sub}>{sub.sub}</option>
            ))}
          </select>
        </Col>
        <Col md={7}>
          <label for="Select" className="form-label">
            Secondary Subject(Multiple subjects):
          </label>
          <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy="Select"
          />
        </Col>
      </Row>
    </div>
  );
};

export default SubJectTeaches;
