import React from "react";
import { Form } from "react-bootstrap";
import "./WeeklyTime.scss";

const WeeklyTime = () => {
  return (
    <div>
      <h6 className="time_heading">Weekly Time Avilablity for Teaching</h6>
      <div>
        <table>
          <thead>
            <tr>
              <th scope="col">Time</th>
              <th scope="col">Sat</th>
              <th scope="col">Sun</th>
              <th scope="col">Mon</th>
              <th scope="col">Tue</th>
              <th scope="col">Wed</th>
              <th scope="col">Thu</th>
              <th scope="col">Fri</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Time"></td>
              <td data-label="Sat">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" />
                </Form.Group>
              </td>
              <td data-label="Sun">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" />
                </Form.Group>
              </td>
              <td data-label="Mon">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" />
                </Form.Group>
              </td>
              <td data-label="Tue">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" />
                </Form.Group>
              </td>
              <td data-label="Wed">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" />
                </Form.Group>
              </td>
              <td data-label="Thu">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" />
                </Form.Group>
              </td>
              <td data-label="Fri">
                <input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeeklyTime;
