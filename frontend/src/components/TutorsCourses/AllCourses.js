import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import axios from 'axios'
import { BsFillEyeFill } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'
import { AiFillDelete } from 'react-icons/ai'

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
                  {data.courseByTutor.classStartDateAndTime[8]+data.courseByTutor.classStartDateAndTime[9]+"/"+data.courseByTutor.classStartDateAndTime[5]+data.courseByTutor.classStartDateAndTime[6]+"/"+data.courseByTutor.classStartDateAndTime.substring(0,4)+" "}
                  {data.courseByTutor.classStartDateAndTime[11]+data.courseByTutor.classStartDateAndTime[12] === "12" ?
                   "12:"+data.courseByTutor.classStartDateAndTime[14]+data.courseByTutor.classStartDateAndTime[15]+" PM" : 
                   data.courseByTutor.classStartDateAndTime[11]+data.courseByTutor.classStartDateAndTime[12] === "13" ? 
                   "01:"+data.courseByTutor.classStartDateAndTime[14]+data.courseByTutor.classStartDateAndTime[15]+" PM" : 
                   data.courseByTutor.classStartDateAndTime[11]+data.courseByTutor.classStartDateAndTime[12] === "14" ? 
                   "02:"+data.courseByTutor.classStartDateAndTime[14]+data.courseByTutor.classStartDateAndTime[15]+" PM" :
                   data.courseByTutor.classStartDateAndTime[11]+data.courseByTutor.classStartDateAndTime[12] === "15" ?
                    "03:"+data.courseByTutor.classStartDateAndTime[14]+data.courseByTutor.classStartDateAndTime[15]+" PM" :
                    data.courseByTutor.classStartDateAndTime[11]+data.courseByTutor.classStartDateAndTime[12] === "16" ?
                     "04:"+data.courseByTutor.classStartDateAndTime[14]+data.courseByTutor.classStartDateAndTime[15]+" PM" :
                     data.courseByTutor.classStartDateAndTime[11]+data.courseByTutor.classStartDateAndTime[12] === "17" ?
                      "05:"+data.courseByTutor.classStartDateAndTime[14]+data.courseByTutor.classStartDateAndTime[15]+" PM" :
                      data.courseByTutor.classStartDateAndTime[11]+data.courseByTutor.classStartDateAndTime[12] === "18" ?
                       "06:"+data.courseByTutor.classStartDateAndTime[14]+data.courseByTutor.classStartDateAndTime[15]+" PM" :
                       data.courseByTutor.classStartDateAndTime[11]+data.courseByTutor.classStartDateAndTime[12] === "19" ?
                       "07:"+data.courseByTutor.classStartDateAndTime[14]+data.courseByTutor.classStartDateAndTime[15]+" PM" :
                       data.courseByTutor.classStartDateAndTime[11]+data.courseByTutor.classStartDateAndTime[12] === "20" ?
                       "08:"+data.courseByTutor.classStartDateAndTime[14]+data.courseByTutor.classStartDateAndTime[15]+" PM" :
                       data.courseByTutor.classStartDateAndTime[11]+data.courseByTutor.classStartDateAndTime[12] === "21" ?
                       "09:"+data.courseByTutor.classStartDateAndTime[14]+data.courseByTutor.classStartDateAndTime[15]+" PM" :
                       data.courseByTutor.classStartDateAndTime[11]+data.courseByTutor.classStartDateAndTime[12] === "22" ?
                       "10:"+data.courseByTutor.classStartDateAndTime[14]+data.courseByTutor.classStartDateAndTime[15]+" PM":
                       data.courseByTutor.classStartDateAndTime[11]+data.courseByTutor.classStartDateAndTime[12] === "23" ?
                       "11:"+data.courseByTutor.classStartDateAndTime[14]+data.courseByTutor.classStartDateAndTime[15]+" PM":
                       data.courseByTutor.classStartDateAndTime[11]+data.courseByTutor.classStartDateAndTime[12] === "00" ?
                       "12:"+data.courseByTutor.classStartDateAndTime[14]+data.courseByTutor.classStartDateAndTime[15]+" AM": 
                       data.courseByTutor.classStartDateAndTime[11]+data.courseByTutor.classStartDateAndTime[12]+data.courseByTutor.classStartDateAndTime[13]+data.courseByTutor.classStartDateAndTime[14]+data.courseByTutor.classStartDateAndTime[15]+" AM"}

                 </small>
                </td>
                <td data-label="End Time">
                <small>
      
                {data.courseByTutor.classEndDateAndTime[8]+data.courseByTutor.classEndDateAndTime[9]+"/"+data.courseByTutor.classEndDateAndTime[5]+data.courseByTutor.classEndDateAndTime[6]+"/"+data.courseByTutor.classEndDateAndTime.substring(0,4)+" "}
                  {data.courseByTutor.classEndDateAndTime[11]+data.courseByTutor.classEndDateAndTime[12] === "12" ?
                   "12:"+data.courseByTutor.classEndDateAndTime[14]+data.courseByTutor.classEndDateAndTime[15]+" PM" : 
                   data.courseByTutor.classEndDateAndTime[11]+data.courseByTutor.classEndDateAndTime[12] === "13" ? 
                   "01:"+data.courseByTutor.classEndDateAndTime[14]+data.courseByTutor.classEndDateAndTime[15]+" PM" : 
                   data.courseByTutor.classEndDateAndTime[11]+data.courseByTutor.classEndDateAndTime[12] === "14" ? 
                   "02:"+data.courseByTutor.classEndDateAndTime[14]+data.courseByTutor.classEndDateAndTime[15]+" PM" :
                   data.courseByTutor.classEndDateAndTime[11]+data.courseByTutor.classEndDateAndTime[12] === "15" ?
                    "03:"+data.courseByTutor.classEndDateAndTime[14]+data.courseByTutor.classEndDateAndTime[15]+" PM" :
                    data.courseByTutor.classEndDateAndTime[11]+data.courseByTutor.classEndDateAndTime[12] === "16" ?
                     "04:"+data.courseByTutor.classEndDateAndTime[14]+data.courseByTutor.classEndDateAndTime[15]+" PM" :
                     data.courseByTutor.classEndDateAndTime[11]+data.courseByTutor.classEndDateAndTime[12] === "17" ?
                      "05:"+data.courseByTutor.classEndDateAndTime[14]+data.courseByTutor.classEndDateAndTime[15]+" PM" :
                      data.courseByTutor.classEndDateAndTime[11]+data.courseByTutor.classEndDateAndTime[12] === "18" ?
                       "06:"+data.courseByTutor.classEndDateAndTime[14]+data.courseByTutor.classEndDateAndTime[15]+" PM" :
                       data.courseByTutor.classEndDateAndTime[11]+data.courseByTutor.classEndDateAndTime[12] === "19" ?
                       "07:"+data.courseByTutor.classEndDateAndTime[14]+data.courseByTutor.classEndDateAndTime[15]+" PM" :
                       data.courseByTutor.classEndDateAndTime[11]+data.courseByTutor.classEndDateAndTime[12] === "20" ?
                       "08:"+data.courseByTutor.classEndDateAndTime[14]+data.courseByTutor.classEndDateAndTime[15]+" PM" :
                       data.courseByTutor.classEndDateAndTime[11]+data.courseByTutor.classEndDateAndTime[12] === "21" ?
                       "09:"+data.courseByTutor.classEndDateAndTime[14]+data.courseByTutor.classEndDateAndTime[15]+" PM" :
                       data.courseByTutor.classEndDateAndTime[11]+data.courseByTutor.classEndDateAndTime[12] === "22" ?
                       "10:"+data.courseByTutor.classEndDateAndTime[14]+data.courseByTutor.classEndDateAndTime[15]+" PM":
                       data.courseByTutor.classEndDateAndTime[11]+data.courseByTutor.classEndDateAndTime[12] === "23" ?
                       "11:"+data.courseByTutor.classEndDateAndTime[14]+data.courseByTutor.classEndDateAndTime[15]+" PM":
                       data.courseByTutor.classEndDateAndTime[11]+data.courseByTutor.classEndDateAndTime[12] === "00" ?
                       "12:"+data.courseByTutor.classEndDateAndTime[14]+data.courseByTutor.classEndDateAndTime[15]+" AM": 
                       data.courseByTutor.classEndDateAndTime[11]+data.courseByTutor.classEndDateAndTime[12]+data.courseByTutor.classEndDateAndTime[13]+data.courseByTutor.classEndDateAndTime[14]+data.courseByTutor.classEndDateAndTime[15]+" AM"}
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
