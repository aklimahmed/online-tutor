import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { BsFillEyeFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import CourseCarousel from "../../components/TutorsCourses/CourseCarousel";
import Calender from "./../../components/TutorsCourses/Calender";
import "./TutorsCoursesView.scss";

const TutorsCoursesView = () => {
  const [fetchCourseDetails, setFetchCourseDetails] = useState([]);

  const id = useSelector((state) => state.userLogin.userInfo._id);

  const getData = () => {
    axios
      .get(`http://localhost:5000/api/course/tutor/view/${id}`)
      .then((data) => setFetchCourseDetails(data.data.course));
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

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

  const deleteCourseHandler = async (id) => {
    axios
      .delete(`http://localhost:5000/api/course/tutor/delete/${id}`, id)
      .then((data) => {
        if (data) {
          getData();
        }
      });
  };

  const history = useHistory();
  const onCreateNewCourseClick = () => {
    history.replace(`/course/tutor/${id}`);
  };

  return (
    <div>
     <CourseCarousel />
      {/* <Calender /> */}
      <div className="course_view_main">
        <h4 className="header_class">
          All Courses |{" "}
          <span
            className="card_header create_new_course"
            onClick={onCreateNewCourseClick}
          >
            Create New Course +
          </span>
        </h4>

        <table className="mt-2 batch_table">
          <thead>
            <tr>
              <th>
                <small>Sl</small>
              </th>
              <th>
                <small>Course Title</small>
              </th>
              <th>
                <small>Course ID</small>
              </th>
              <th>
                <small>Curriculum</small>
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
                <small>Course Start Date</small>
              </th>
              <th>
                <small>Course End Date</small>
              </th>
              <th>
                <small>Class Time</small>
              </th>
              <th>
                <small>Fees in BDT</small>
              </th>
              <th>
                <small>Action</small>
              </th>
            </tr>
          </thead>
          <tbody>
            {fetchCourseDetails
              ? fetchCourseDetails.map((data) => (
                  <tr key={serial++}>
                    <td data-label="Sl">
                      <small>{serial++}</small>
                    </td>
                    <td data-label="Course Title">
                      <small>{data.courseByTutor.courseTitle}</small>
                    </td>
                    <td data-label="Course ID">
                      <small>{data.courseByTutor.courseId}</small>
                    </td>
                    <td data-label="Curriculum">
                      <small>{data.courseByTutor.curriculum}</small>
                    </td>
                    <td data-label="Class">
                      <small>{data.courseByTutor.classLevel}</small>
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
                    <td data-label="Course Start Date">
                      <small>
                        {data.courseByTutor.courseStartDate}
                      </small>
                    </td>
                    <td data-label="Course End Date">
                      <small>
                        {data.courseByTutor.courseEndDate}
                      </small>
                    </td>
                    <td data-label="Class Time">
                      <small>
                        {data.courseByTutor.classStartTime}
                      </small>
                    </td>
                    <td data-label="Fees in BDT">
                      <small>
                        {data.courseByTutor.tutionFee} /
                        {data.courseByTutor.feesTime}
                      </small>
                    </td>
                    <td data-label="Action">
                      <small>
                        <Link to={`/course/tutor/singlecourse/${data._id}`}>
                          <BsFillEyeFill className="view_icon" />
                        </Link>

                        <Link to={`/course/tutor/edit/${data._id}`}>
                          <FaEdit className="edit_icon" />
                        </Link>

                        <AiFillDelete
                          className="delete_icon"
                          onClick={() => deleteCourseHandler(data._id)}
                        />
                      </small>
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

export default TutorsCoursesView;
