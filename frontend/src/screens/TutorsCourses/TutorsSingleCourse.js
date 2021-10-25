import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Row, Col, Form, Card } from "react-bootstrap";

const TutorsSingleCourse = () => {
  const { id } = useParams();

  const [singleCourse, setSingleCourse] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/course/tutor/singlecourse/${id}`)
      .then((data) => setSingleCourse(data.data.course));
  }, [id]);

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
      <Col>
        <Row>
          <Col>Class Type</Col>
          <Col>
            <Card.Header>{singleCourse.courseByTutor && singleCourse.courseByTutor.classTypes}</Card.Header>
          </Col>
        </Row>
        <Row>
          <Col>Curriculum</Col>
          <Col>
            <Card.Header>{singleCourse.courseByTutor && singleCourse.courseByTutor.curriculum}</Card.Header>
          </Col>
        </Row>
        <Row>
          <Col>Class</Col>
          <Col>
            <Card.Header>{singleCourse.courseByTutor && singleCourse.courseByTutor.classLevel}</Card.Header>
          </Col>
        </Row>
        <Row>
          <Col>Subject</Col>
          <Col>
            <Card.Header>{singleCourse.courseByTutor && singleCourse.courseByTutor.subject}</Card.Header>
          </Col>
        </Row>
        <Row>
          <Col>Batch Type</Col>
          <Col>
            <Card.Header>{singleCourse.courseByTutor && singleCourse.courseByTutor.batchType}</Card.Header>
          </Col>
        </Row>
        <Row>
          <Col>No of Students</Col>
          <Col>
            <Card.Header>{singleCourse.courseByTutor && singleCourse.courseByTutor.noOfStudents}</Card.Header>
          </Col>
        </Row>
        <Row>
          <Col>Class Days</Col>
          <Col>
            <Card.Header>
              {singleCourse && singleCourse.courseByTutor &&
                singleCourse.courseByTutor.classDay &&
                singleCourse.courseByTutor.classDay.map((d) => <>{d} </>)}
            </Card.Header>
          </Col>
        </Row>
        <Row>
          <Col>Class Duration</Col>
          <Col>
            <Card.Header>{singleCourse.courseByTutor && singleCourse.courseByTutor.classDuration} minutes</Card.Header>
          </Col>
        </Row>
        <Row>
          <Col>Course Description</Col>
          <Col>
            <Card.Header>{singleCourse.courseByTutor && singleCourse.courseByTutor.courseDescription}</Card.Header>
          </Col>
        </Row>
      </Col>

      <Col>
        <Row>
          <Col>Class Start Date & Time</Col>
          <Col>
            <Card.Header>
              {singleCourse && singleCourse.courseByTutor &&
                singleCourse.courseByTutor.classStartDateAndTime &&
                getTime(singleCourse.courseByTutor.classStartDateAndTime)}
            </Card.Header>
          </Col>
        </Row>
        <Row>
          <Col>Class End Date & Time</Col>
          <Col>
            <Card.Header>
              {singleCourse && singleCourse.courseByTutor &&
                singleCourse.courseByTutor.classEndDateAndTime &&
                getTime(singleCourse.courseByTutor.classEndDateAndTime)}
            </Card.Header>
          </Col>
        </Row>
        <Row>
          <Col>Enroll Due Date</Col>
          <Col>
            <Card.Header>
              {singleCourse && singleCourse.courseByTutor &&
                singleCourse.courseByTutor.enrollDueDate &&
                getTime(singleCourse.courseByTutor.enrollDueDate)}
            </Card.Header>
          </Col>
        </Row>
        <Row>
          <Col>Fees</Col>
          <Col>
            <Card.Header>{singleCourse.courseByTutor && singleCourse.courseByTutor.tutionFee} /{singleCourse.courseByTutor && singleCourse.courseByTutor.feesTime}</Card.Header>
          </Col>
        </Row>
        <Row>
          <Col>Course Create Date & Time</Col>
          <Col>
            <Card.Header>{singleCourse && singleCourse.createdAt && getTime(singleCourse.createdAt.substring(0, 16))}</Card.Header>
          </Col>
        </Row>
        <Row>
          <Col>Last Update Date & Time</Col>
          <Col>
            <Card.Header>{singleCourse && singleCourse.createdAt && getTime(singleCourse.updatedAt.substring(0, 16))}</Card.Header>
          </Col>
        </Row>
        <Row>
          <Col>YouTube URL</Col>
          <Col>
            <Card.Header>{singleCourse && singleCourse.courseByTutor && singleCourse.courseByTutor.courseVideoUrl}</Card.Header>
          </Col>
        </Row>
        <Row>
          <Col>Course Image</Col>
          <Col>
            <Card.Header></Card.Header>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default TutorsSingleCourse;
