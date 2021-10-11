import React from "react";
import { Col, Row } from "react-bootstrap";
import "./BatchTable.scss";
import { tutorTable } from "./../../jsonData/TutorTable";

const BatchTable = () => {
  return (
    <div>
      <Row className="mt-2 d-flex justify-content-between">
        <Col md={3} className="d-flex justify-content-between free_class mb-3">
          <div>
            <h4 className="classText mt-2">FREE</h4>
            <h6 className="classText">Classes</h6>
          </div>
          <div className="d-flex align-items-center">
            <h4 className="total_class mt-2">11</h4>
          </div>
        </Col>
        <Col
          md={3}
          className="d-flex justify-content-between upcomingClass mb-3"
        >
          <div>
            <h4 className="upcomingText mt-2">Upcoming</h4>
            <h6 className="upcomingText">Batches</h6>
          </div>
          <div className="d-flex align-items-center">
            <h4 className="upcoming_class mt-2">11</h4>
          </div>
        </Col>
        <Col
          md={3}
          className="d-flex justify-content-between upcomingClass mb-3"
        >
          <div>
            <h4 className="upcomingText mt-2">Today's</h4>
            <h6 className="upcomingText">Classes</h6>
          </div>
          <div className="d-flex align-items-center">
            <h4 className="upcoming_class mt-2">11</h4>
          </div>
        </Col>
        <Col
          md={3}
          className="d-flex justify-content-between upcomingClass mb-3"
        >
          <div>
            <h4 className="upcomingText mt-2">Tomorrow’s</h4>
            <h6 className="upcomingText">Classes</h6>
          </div>
          <div className="d-flex align-items-center">
            <h4 className="upcoming_class mt-2">11</h4>
          </div>
        </Col>
      </Row>
      <div>
        <table className="mt-2 batch_table">
          <thead>
            <tr>
              <th>
                <small>Sl</small>
              </th>
              <th>
                <small>Curriculum</small>
              </th>
              <th>
                <small>Batch Title</small>
              </th>
              <th>
                <small>Class</small>
              </th>
              <th>
                <small>Subjects</small>
              </th>
              <th>
                <small>No of Participants</small>
              </th>
              <th>
                <small>Vacant Seats</small>
              </th>
              <th>
                <small>Teachers Rating</small>
              </th>
              <th>
                <small>Start Date & Time</small>
              </th>
              <th>
                <small>Fees</small>
              </th>
              <th>
                <small>Action</small>
              </th>
            </tr>
          </thead>
          <tbody>
            {tutorTable.map((data) => (
              <tr key={data.sl}>
                <td data-label="Sl">
                  <small>{data.sl}</small>
                </td>
                <td data-label="Curriculum">
                  <small>{data.curriculum}</small>
                </td>
                <td data-label="Batch Title">
                  <small>{data.bTitle}</small>
                </td>
                <td data-label="Class">
                  <small>{data.class}</small>
                </td>
                <td data-label="Subjects">
                  <small>{data.subject}</small>
                </td>
                <td data-label="No of Participants">
                  <small>{data.totalParticipant}</small>
                </td>
                <td data-label="Vacant Seats">
                  <small>{data.vSeat}</small>
                </td>
                <td data-label="Teacher's Rating">
                  <small>{data.tRating}</small>
                </td>
                <td data-label="Start Date & Time">
                  <small>{data.dateTime}</small>
                </td>
                <td data-label="Fees">
                  <small>{data.fees}</small>
                </td>
                <td data-label="Action">
                  <small>{data.action}</small>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BatchTable;
