import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Row, Col, Form, Card } from "react-bootstrap";
import "./TutorsSingleCourse.scss"

const TutorsSingleCourse = () => {
  const { id } = useParams()
  const history = useHistory()

  const [singleCourse, setSingleCourse] = useState({})

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/course/tutor/singlecourse/${id}`)
      .then((data) => setSingleCourse(data.data.course));
  }, [id]);

  const onUpdateSubmit = () => {
      history.replace(`/course/tutor/edit/${id}`)
  }

  const onCloseSubmit = () => {
    history.replace(`/course/tutor/view/${id}`)
  }

  const getTime = (data) => {
    if (data.length === 10) {
      const getDate = data.substring(8,10)+"-"+data.substring(5,7)+"-"+data.substring(0,4)
      return getDate;
    } else {
      const getDate = data.substring(0, data.length - 6);
      const [y, mo, d] = getDate.split("-");
      const date = d + "-" + mo + "-" + y;
      const getTimeData = data.slice(data.length - 5);
      const [h, m] = getTimeData.split(":");
      const time = `${(h % 12) + 12 * (h % 12 === 0)}:${m} ${
        h >= 12 ? "PM" : "AM"
      }`;
      return `${date} ${time}`;
    }
  };

  return (
    <Row>
      <h4 style={{marginBottom: '20px', marginTop: '20px'}} className="card_header">Course ID: BMC52021101234</h4>
      <Col>
        <Row>
          <Col md={4}><span className="course_info_label">Class Type</span></Col>
          <Col md={8} className="info_col">
          <Card.Header className="single_course_info">{singleCourse.courseByTutor && singleCourse.courseByTutor.classTypes}</Card.Header>
          </Col>
        </Row>
        <Row>
          <Col md={4}><span className="course_info_label">Curriculum</span></Col>
          <Col md={8} className="info_col">
            <Card.Header className="single_course_info">{singleCourse.courseByTutor && singleCourse.courseByTutor.curriculum}</Card.Header>
          </Col>
        </Row>
        <Row>
          <Col md={4}><span className="course_info_label">Class</span></Col>
          <Col md={8} className="info_col">
            <Card.Header className="single_course_info">{singleCourse.courseByTutor && singleCourse.courseByTutor.classLevel}</Card.Header>
          </Col>
        </Row>
        <Row>
          <Col md={4}><span className="course_info_label">Subject</span></Col>
          <Col md={8} className="info_col">
            <Card.Header className="single_course_info">{singleCourse.courseByTutor && singleCourse.courseByTutor.subject}</Card.Header>
          </Col>
        </Row>
        <Row>
          <Col md={4}><span className="course_info_label">Batch Type</span></Col>
          <Col md={8} className="info_col">
            <Card.Header className="single_course_info">{singleCourse.courseByTutor && singleCourse.courseByTutor.batchType}</Card.Header>
          </Col>
        </Row>
        <Row>
          <Col md={4}><span className="course_info_label">No of Students</span></Col>
          <Col md={8} className="info_col">
            <Card.Header className="single_course_info">{singleCourse.courseByTutor && singleCourse.courseByTutor.noOfStudents}</Card.Header>
          </Col>
        </Row>
        <Row>
          <Col md={4}><span className="course_info_label">Class Days</span></Col>
          <Col md={8} className="info_col">
            <Card.Header className="single_course_info">
              {singleCourse && singleCourse.courseByTutor &&
                singleCourse.courseByTutor.classDay &&
                singleCourse.courseByTutor.classDay.map((d) => <>{d} </>)}
            </Card.Header>
          </Col>
        </Row>
        <Row>
          <Col md={4}><span className="course_info_label">Class Duration</span></Col>
          <Col md={8} className="info_col">
            <Card.Header className="single_course_info">{singleCourse.courseByTutor && singleCourse.courseByTutor.classDuration} minutes</Card.Header>
          </Col>
        </Row>
        <Row>
          <Col md={4}><span className="course_info_label">Course Description</span></Col>
          <Col md={8} className="info_col">
            <Card.Header className="single_course_info">{singleCourse.courseByTutor && singleCourse.courseByTutor.courseDescription}</Card.Header>
          </Col>
        </Row>
      </Col>

      <Col>
        <Row>
          <Col md={4}><span className="course_info_label">Class Start Date & Time</span></Col>
          <Col md={8} className="info_col">
            <Card.Header className="single_course_info">
              {singleCourse && singleCourse.courseByTutor &&
                singleCourse.courseByTutor.classStartDateAndTime &&
                getTime(singleCourse.courseByTutor.classStartDateAndTime)}
            </Card.Header>
          </Col>
        </Row>
        <Row>
          <Col md={4}><span className="course_info_label">Class End Date & Time</span></Col>
          <Col md={8} className="info_col">
            <Card.Header className="single_course_info">
              {singleCourse && singleCourse.courseByTutor &&
                singleCourse.courseByTutor.classEndDateAndTime &&
                getTime(singleCourse.courseByTutor.classEndDateAndTime)}
            </Card.Header>
          </Col>
        </Row>
        <Row>
          <Col md={4}><span className="course_info_label">Enroll Due Date</span></Col>
          <Col md={8} className="info_col">
            <Card.Header className="single_course_info">
              {singleCourse && singleCourse.courseByTutor &&
                singleCourse.courseByTutor.enrollDueDate &&
                getTime(singleCourse.courseByTutor.enrollDueDate)}
            </Card.Header>
          </Col>
        </Row>
        <Row>
          <Col md={4}><span className="course_info_label">Fees</span></Col>
          <Col md={8} className="info_col">
            <Card.Header className="single_course_info">{singleCourse.courseByTutor && singleCourse.courseByTutor.tutionFee} /{singleCourse.courseByTutor && singleCourse.courseByTutor.feesTime}</Card.Header>
          </Col>
        </Row>
        <Row>
          <Col md={4}><span className="course_info_label">Course Create Date & Time</span></Col>
          <Col md={8} className="info_col">
            <Card.Header className="single_course_info">{singleCourse && singleCourse.createdAt && getTime(singleCourse.createdAt.substring(0, 16))}</Card.Header>
          </Col>
        </Row>
        <Row>
          <Col md={4}><span className="course_info_label">Last Update Date & Time</span></Col>
          <Col md={8} className="info_col">
            <Card.Header className="single_course_info">{singleCourse && singleCourse.createdAt && getTime(singleCourse.updatedAt.substring(0, 16))}</Card.Header>
          </Col>
        </Row>
        <Row>
          <Col md={4}><span className="course_info_label">YouTube URL</span></Col>
          <Col md={8} className="info_col"> 
            <Card.Header className="single_course_info">{singleCourse && singleCourse.courseByTutor && singleCourse.courseByTutor.courseVideoUrl}</Card.Header>
          </Col>
        </Row>
        <Row>
          <Col md={4}><span className="course_info_label">Course File</span></Col>
          <Col md={8} className="info_col">
            <Card.Header className="single_course_info">{singleCourse && singleCourse.courseByTutor && singleCourse.courseByTutor.file ? singleCourse.courseByTutor.file : "No file attached"}</Card.Header>
          </Col>
        </Row>
      </Col>
      <div className="d-flex justify-content-center">
      <button onClick={onCloseSubmit}
            className="close_button_course_view form_button btn btn-primary mt-3 mb-5"
            type="submit"
          >
            Close
          </button>
          <button onClick={onUpdateSubmit}
            className="update_button form_button btn btn-primary mt-3 mb-5"
            type="submit"
          >
            Update
          </button>
        </div>
    </Row>
  );
};

export default TutorsSingleCourse;
