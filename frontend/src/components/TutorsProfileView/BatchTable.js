import { React, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import "./BatchTable.scss";
import { useSelector } from "react-redux";
import axios from "axios";

const BatchTable = () => {
  const [fetchCourseDetails, setFetchCourseDetails] = useState([]);

  const id = useSelector((state) => state.userLogin.userInfo._id);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/course/tutor/view/${id}`)
      .then((data) => setFetchCourseDetails(data.data.course));
  }, [id]);

  const getTime = (data) => {
    const getDate = data.substring(0, data.length - 6);
    const [y, mo, d] = getDate.split("-");
    const date = d + "-" + mo + "-" + y;
    const getTimeData = data.slice(data.length - 5);
    const [h, m] = getTimeData.split(":");
    const time = `${(h % 12) + 12 * (h % 12 === 0)}:${m} ${
      h >= 12 ? "PM" : "AM"
    }`;
    return `${date} ${time}`;
  };

  let serial = 1;

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
            {fetchCourseDetails
              ? fetchCourseDetails.map((data, i) => (
                  <tr key={i}>
                    <td data-label="Sl">
                      <small>{serial++}</small>
                    </td>
                    <td data-label="Curriculum">
                      <small>{data.courseByTutor.curriculum}</small>
                    </td>
                    <td data-label="Batch Title">
                      <small>BTV12345</small>
                    </td>
                    <td data-label="Class">
                      <small>{data.courseByTutor.curriculum}</small>
                    </td>
                    <td data-label="Subjects">
                      <small>{data.courseByTutor.subject}</small>
                    </td>
                    <td data-label="No of Participants">
                      <small>{data.courseByTutor.noOfStudents}</small>
                    </td>
                    <td data-label="Vacant Seats">
                      <small>{data.courseByTutor.noOfStudents}</small>
                    </td>
                    <td data-label="Teacher's Rating">
                      <small>5.00</small>
                    </td>
                    <td data-label="Start Date & Time">
                      <small>
                        {getTime(data.courseByTutor.classStartDateAndTime)}
                      </small>
                    </td>
                    <td data-label="Fees">
                      <small>
                        {data.courseByTutor.tutionFee}{" "}
                        {data.courseByTutor.feesTime}
                      </small>
                    </td>
                    <td data-label="Action">
                      <small>enroll</small>
                    </td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BatchTable;
