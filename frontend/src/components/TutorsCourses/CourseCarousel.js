import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from 'axios'
import { Card, Badge } from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CCard.scss";

const responsive = {

  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};


const CourseCarousel = () => {

  
const [fetchCourseDetails, setFetchCourseDetails] = useState([]);
const [todaysCourse, setTodaysCourse] = useState([]);
 
const id = useSelector((state) => state.userLogin.userInfo._id);

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = String(today.getFullYear());

today = yyyy + '-' + mm + '-' + dd;
console.log(today)

useEffect(() => {
  axios
    .get(`http://localhost:5000/api/course/tutor/${id}`)
    .then((data) => setFetchCourseDetails(data.data.course) );
}, [id]);

  return (
    <div className="course_carousel">
      <h5 className="component_header">Live Class</h5>
      <Carousel 
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {fetchCourseDetails
        .filter(data => data.courseByTutor.classStartDateAndTime.substring(0, 10) === today)
        .map((data) => (
          <div>
          <Card bg="light" text="dark" style={{ width: "90%" }} className="mb-4">
          <Card.Body className="card_body">
            <Card.Title className="card_header">
              {data.courseByTutor.subject}, {data.courseByTutor.classLevel}{" "}
              <Badge className="badge_style" bg="secondary">
                Free
              </Badge>
            </Card.Title>
            <Card.Text className="batch_style">
              Batch: {data.courseByTutor.classStartDateAndTime} <br /><br />
            </Card.Text>
            <Card.Text className="time_style">
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
                       data.courseByTutor.classStartDateAndTime[11]+data.courseByTutor.classStartDateAndTime[12]+data.courseByTutor.classStartDateAndTime[13]+data.courseByTutor.classStartDateAndTime[14]+data.courseByTutor.classStartDateAndTime[15]+" AM"} to {data.courseByTutor.classEndDateAndTime[11]+data.courseByTutor.classEndDateAndTime[12] === "12" ?
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
            </Card.Text>
            <Card.Text className="time_remaining_style">
            10m remaining
            </Card.Text>
          </Card.Body>
        </Card> 
        </div>

        ))}

      </Carousel>
    </div>
  );
};

export default CourseCarousel;
