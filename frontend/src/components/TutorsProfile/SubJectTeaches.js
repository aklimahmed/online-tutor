import React from "react";
import { Row, Col } from "react-bootstrap";

const subject = [{ sub: "Physics" }, { sub: "Math" }, { sub: "English" }];

const SubJectTeaches = () => {
  return (
    <div className="weeklyTime_div">
      <h6 className="time_heading">Subject Teaches:</h6>
      <Row>
        <Col md={5} className="mb-3">
          <label for="Select" className="form-label">
            Primary Subject(One subject):
          </label>
          <select id="Select" className="form-select">
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
          <select id="Select" className="form-select">
            <option style={{ display: "none" }}>
              Select secondary subject of teaching
            </option>
            {subject.map((sub) => (
              <option value={sub.sub}>{sub.sub}</option>
            ))}
          </select>
        </Col>
      </Row>
    </div>
  );
};

export default SubJectTeaches;
