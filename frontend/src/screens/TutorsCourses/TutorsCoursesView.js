import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { BsFillEyeFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import CourseCarousel from "../../components/TutorsCourses/CourseCarousel";
import "./TutorsCoursesView.scss";

const TutorsCoursesView = () => {
  const [fetchCourseDetails, setFetchCourseDetails] = useState([]);

  const id = useSelector((state) => state.userLogin.userInfo._id);

  useEffect(() => {
    const getCourseDetails = () => {
      axios
      .get(`http://localhost:5000/api/course/tutor/view/${id}`)
      .then((data) => setFetchCourseDetails(data.data.course));
    }
    getCourseDetails();
  }, [fetchCourseDetails]);

  const getTime = (data) => {
    const getDate = data.substring(0, data.length - 6);
    const [y, mo, d] = getDate.split("-");
    const date = d+"-"+mo+"-"+y;
    const getTimeData = data.slice(data.length - 5);
    const [h, m] = getTimeData.split(":");
    const time = `${(h % 12) + 12 * (h % 12 === 0)}:${m} ${
      h >= 12 ? "PM" : "AM"
    }`;
    return `${date} ${time}`;
  };

  let serial = 1;

const deleteCourseHandler = async (id) => {
  console.log(id)
  axios.delete(`http://localhost:5000/api/course/tutor/delete/${id}`, id)
}

  return (
    <div>
      <CourseCarousel />
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
              <small>Start Date & Time</small>
            </th>
            <th>
              <small>End Time</small>
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
                <tr>
                  <td data-label="Sl">
                    <small>{serial++}</small>
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
                  <td data-label="Start Date & Time">
                    <small>
                      {getTime(data.courseByTutor.classStartDateAndTime)}
                    </small>
                  </td>
                  <td data-label="End Time">
                    <small>
                      {getTime(data.courseByTutor.classEndDateAndTime)}
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
                      <BsFillEyeFill className="view_icon" /> 
                      <FaEdit className="edit_icon" /> 
                      <AiFillDelete
                        className="delete_icon"
                       onClick={() => deleteCourseHandler(data._id)} />
                    </small>
                  </td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default TutorsCoursesView;
