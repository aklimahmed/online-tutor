import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import axios from 'axios'
import { BsFillEyeFill } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'
// /${id}
const AllCourses = () => {

    const [fetchCourseDetails, setFetchCourseDetails] = useState([]);

    const id = useSelector((state) => state.userLogin.userInfo._id);
  
    useEffect(() => {
      axios
        .get(`http://localhost:5000/api/course/tutor/${id}`)
        .then((data) => setFetchCourseDetails(data.data.course));
    }, [id]);
  
    console.log(fetchCourseDetails);

    let serial = 1;

    return (
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
              {fetchCourseDetails? (fetchCourseDetails.map((data) => (
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
                  {data.courseByTutor.classStartDateAndTime.substring(7, data.courseByTutor.classStartDateAndTime.length)}
                  {" "+data.courseByTutor.classStartDateAndTime[2]+data.courseByTutor.classStartDateAndTime[3]+data.courseByTutor.classStartDateAndTime[4]+data.courseByTutor.classStartDateAndTime[5]+data.courseByTutor.classStartDateAndTime[6]}
                 </small>
                </td>
                <td data-label="End Time">
                <small>
                  {data.courseByTutor.classEndDateAndTime.substring(7, data.courseByTutor.classEndDateAndTime.length)}
                  {" "+data.courseByTutor.classEndDateAndTime[2]+data.courseByTutor.classEndDateAndTime[3]+data.courseByTutor.classEndDateAndTime[4]+data.courseByTutor.classEndDateAndTime[5]+data.courseByTutor.classEndDateAndTime[6]}
                 </small>
                </td>
                <td data-label="Fees in BDT">
                  <small>{data.courseByTutor.tutionFee} /{data.courseByTutor.feesTime}</small>
                </td>
                <td data-label="Action">
                  <small><BsFillEyeFill/> <FaEdit/> <AiFillDelete /></small>
                </td>
              </tr>) 
              )) : ''}
           
          </tbody>
        </table>
        </div>
    )
}

export default AllCourses
