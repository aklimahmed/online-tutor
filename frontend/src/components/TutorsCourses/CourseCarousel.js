import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Card, Badge } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CourseCarousel.scss";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
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

  const id = useSelector((state) => state.userLogin.userInfo._id);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/course/tutor/view/${id}`)
      .then((data) => setFetchCourseDetails(data.data.course));
  }, [id]);

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = String(today.getFullYear());

  today = yyyy + "-" + mm + "-" + dd;
  let todaySlashFormatDate = dd + "/" + mm + "/" + yyyy;
  let todaySlashYearFirstDate = yyyy+"/"+mm+"/"+dd
  console.log(today);

  const daysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] 
  const d = new Date();
  let dayNo = d.getDay();
  let day = daysArray[dayNo]

  d.getHours(); // => 9
  d.getMinutes(); // =>  30
  const nowTime = d.getHours()+":"+d.getMinutes();
  
const isDateBetweenStartAndEndDate = (dateFrom, dateTo, dateCheck) => {

    let d1 = dateFrom.split("/");
    let d2 = dateTo.split("/");
    let c = dateCheck.split("/");

    let from = new Date(d1[2], parseInt(d1[1])-1, d1[0]);  // -1 because months are from 0 to 11
    let to   = new Date(d2[2], parseInt(d2[1])-1, d2[0]);
    let check = new Date(c[2], parseInt(c[1])-1, c[0]);

    if(check >= from && check <= to){
        return true
    } else {
      return false
    }
}

const timeRemaining = (presentTime, classStartTime) => {
  console.log(presentTime, classStartTime)
  var startTime = new Date(presentTime); 
  var endTime = new Date(classStartTime);
  var difference = endTime.getTime() - startTime.getTime(); // This will give difference in milliseconds
  var resultInMinutes = Math.round(difference / 60000);

  let hours = (resultInMinutes / 60);

  if(hours > 1){
    return `${~~hours} h and ${resultInMinutes%60} m remaining`
  }else {
    return `${resultInMinutes} m remaining`
  }
}

console.log(new Date())
  return (
    <div className="course_carousel">
      <h5 className="component_header">Today's Live Class</h5>
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {fetchCourseDetails    
        .filter(
            (data) =>( data.courseByTutor.classStartDateAndTime.substring(0, 10) === today &&
            isDateBetweenStartAndEndDate(data.courseByTutor.classStartDateAndTime.substring(8,10)+"/"+data.courseByTutor.classStartDateAndTime.substring(5,7)+"/"+data.courseByTutor.classStartDateAndTime.substring(0,4), 
            data.courseByTutor.classEndDateAndTime.substring(8,10)+"/"+data.courseByTutor.classEndDateAndTime.substring(5,7)+"/"+data.courseByTutor.classEndDateAndTime.substring(0,4), todaySlashFormatDate) === true
          ))
          .map((data) => (
                (data.courseByTutor.classDay[0] === day || data.courseByTutor.classDay[1] === day || data.courseByTutor.classDay[2] === day || 
                 data.courseByTutor.classDay[3] === day || data.courseByTutor.classDay[4] === day ||         
                 data.courseByTutor.classDay[5] === day || data.courseByTutor.classDay[6] === day) &&
                 
                 <div>
                  <Card
            bg="light"
            text="dark"
            style={{ width: "90%" }}
            className="mb-4"
          >
            <Card.Body className={`card_${data.courseByTutor.tutionFee === 0 ? `free` : `paid`}`}>
              <Card.Title className="card_header">
                {data.courseByTutor.subject},{" "}
                {data.courseByTutor.classLevel}{" "}
                {data.courseByTutor.tutionFee === 0 ? (
                  <Badge className="badge_free" bg="secondary">
                    Free
                  </Badge>
                ) : (
                  <Badge className="badge_paid" bg="secondary">
                    Paid
                  </Badge>
                )}
              </Card.Title>
              <Card.Text className="batch_style">
                Batch: {data.courseByTutor.classStartDateAndTime} <br />
                <br />
              </Card.Text>
              <Card.Text className="time_style">
                {data.courseByTutor.classStartDateAndTime[11] +
                  data.courseByTutor.classStartDateAndTime[12] ===
                "12"
                  ? "12:" +
                    data.courseByTutor.classStartDateAndTime[14] +
                    data.courseByTutor.classStartDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classStartDateAndTime[11] +
                      data.courseByTutor.classStartDateAndTime[12] ===
                    "13"
                  ? "01:" +
                    data.courseByTutor.classStartDateAndTime[14] +
                    data.courseByTutor.classStartDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classStartDateAndTime[11] +
                      data.courseByTutor.classStartDateAndTime[12] ===
                    "14"
                  ? "02:" +
                    data.courseByTutor.classStartDateAndTime[14] +
                    data.courseByTutor.classStartDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classStartDateAndTime[11] +
                      data.courseByTutor.classStartDateAndTime[12] ===
                    "15"
                  ? "03:" +
                    data.courseByTutor.classStartDateAndTime[14] +
                    data.courseByTutor.classStartDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classStartDateAndTime[11] +
                      data.courseByTutor.classStartDateAndTime[12] ===
                    "16"
                  ? "04:" +
                    data.courseByTutor.classStartDateAndTime[14] +
                    data.courseByTutor.classStartDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classStartDateAndTime[11] +
                      data.courseByTutor.classStartDateAndTime[12] ===
                    "17"
                  ? "05:" +
                    data.courseByTutor.classStartDateAndTime[14] +
                    data.courseByTutor.classStartDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classStartDateAndTime[11] +
                      data.courseByTutor.classStartDateAndTime[12] ===
                    "18"
                  ? "06:" +
                    data.courseByTutor.classStartDateAndTime[14] +
                    data.courseByTutor.classStartDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classStartDateAndTime[11] +
                      data.courseByTutor.classStartDateAndTime[12] ===
                    "19"
                  ? "07:" +
                    data.courseByTutor.classStartDateAndTime[14] +
                    data.courseByTutor.classStartDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classStartDateAndTime[11] +
                      data.courseByTutor.classStartDateAndTime[12] ===
                    "20"
                  ? "08:" +
                    data.courseByTutor.classStartDateAndTime[14] +
                    data.courseByTutor.classStartDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classStartDateAndTime[11] +
                      data.courseByTutor.classStartDateAndTime[12] ===
                    "21"
                  ? "09:" +
                    data.courseByTutor.classStartDateAndTime[14] +
                    data.courseByTutor.classStartDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classStartDateAndTime[11] +
                      data.courseByTutor.classStartDateAndTime[12] ===
                    "22"
                  ? "10:" +
                    data.courseByTutor.classStartDateAndTime[14] +
                    data.courseByTutor.classStartDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classStartDateAndTime[11] +
                      data.courseByTutor.classStartDateAndTime[12] ===
                    "23"
                  ? "11:" +
                    data.courseByTutor.classStartDateAndTime[14] +
                    data.courseByTutor.classStartDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classStartDateAndTime[11] +
                      data.courseByTutor.classStartDateAndTime[12] ===
                    "00"
                  ? "12:" +
                    data.courseByTutor.classStartDateAndTime[14] +
                    data.courseByTutor.classStartDateAndTime[15] +
                    " AM"
                  : data.courseByTutor.classStartDateAndTime[11] +
                    data.courseByTutor.classStartDateAndTime[12] +
                    data.courseByTutor.classStartDateAndTime[13] +
                    data.courseByTutor.classStartDateAndTime[14] +
                    data.courseByTutor.classStartDateAndTime[15] +
                    " AM"}{" "}
                to{" "}
                {data.courseByTutor.classEndDateAndTime[11] +
                  data.courseByTutor.classEndDateAndTime[12] ===
                "12"
                  ? "12:" +
                    data.courseByTutor.classEndDateAndTime[14] +
                    data.courseByTutor.classEndDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classEndDateAndTime[11] +
                      data.courseByTutor.classEndDateAndTime[12] ===
                    "13"
                  ? "01:" +
                    data.courseByTutor.classEndDateAndTime[14] +
                    data.courseByTutor.classEndDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classEndDateAndTime[11] +
                      data.courseByTutor.classEndDateAndTime[12] ===
                    "14"
                  ? "02:" +
                    data.courseByTutor.classEndDateAndTime[14] +
                    data.courseByTutor.classEndDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classEndDateAndTime[11] +
                      data.courseByTutor.classEndDateAndTime[12] ===
                    "15"
                  ? "03:" +
                    data.courseByTutor.classEndDateAndTime[14] +
                    data.courseByTutor.classEndDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classEndDateAndTime[11] +
                      data.courseByTutor.classEndDateAndTime[12] ===
                    "16"
                  ? "04:" +
                    data.courseByTutor.classEndDateAndTime[14] +
                    data.courseByTutor.classEndDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classEndDateAndTime[11] +
                      data.courseByTutor.classEndDateAndTime[12] ===
                    "17"
                  ? "05:" +
                    data.courseByTutor.classEndDateAndTime[14] +
                    data.courseByTutor.classEndDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classEndDateAndTime[11] +
                      data.courseByTutor.classEndDateAndTime[12] ===
                    "18"
                  ? "06:" +
                    data.courseByTutor.classEndDateAndTime[14] +
                    data.courseByTutor.classEndDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classEndDateAndTime[11] +
                      data.courseByTutor.classEndDateAndTime[12] ===
                    "19"
                  ? "07:" +
                    data.courseByTutor.classEndDateAndTime[14] +
                    data.courseByTutor.classEndDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classEndDateAndTime[11] +
                      data.courseByTutor.classEndDateAndTime[12] ===
                    "20"
                  ? "08:" +
                    data.courseByTutor.classEndDateAndTime[14] +
                    data.courseByTutor.classEndDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classEndDateAndTime[11] +
                      data.courseByTutor.classEndDateAndTime[12] ===
                    "21"
                  ? "09:" +
                    data.courseByTutor.classEndDateAndTime[14] +
                    data.courseByTutor.classEndDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classEndDateAndTime[11] +
                      data.courseByTutor.classEndDateAndTime[12] ===
                    "22"
                  ? "10:" +
                    data.courseByTutor.classEndDateAndTime[14] +
                    data.courseByTutor.classEndDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classEndDateAndTime[11] +
                      data.courseByTutor.classEndDateAndTime[12] ===
                    "23"
                  ? "11:" +
                    data.courseByTutor.classEndDateAndTime[14] +
                    data.courseByTutor.classEndDateAndTime[15] +
                    " PM"
                  : data.courseByTutor.classEndDateAndTime[11] +
                      data.courseByTutor.classEndDateAndTime[12] ===
                    "00"
                  ? "12:" +
                    data.courseByTutor.classEndDateAndTime[14] +
                    data.courseByTutor.classEndDateAndTime[15] +
                    " AM"
                  : data.courseByTutor.classEndDateAndTime[11] +
                    data.courseByTutor.classEndDateAndTime[12] +
                    data.courseByTutor.classEndDateAndTime[13] +
                    data.courseByTutor.classEndDateAndTime[14] +
                    data.courseByTutor.classEndDateAndTime[15] +
                    " AM"}
              </Card.Text>
              <Card.Text className="time_remaining_style">
                {timeRemaining(todaySlashYearFirstDate+" "+nowTime, data.courseByTutor.classStartDateAndTime.substring(0,4)+"/"+data.courseByTutor.classStartDateAndTime.substring(5,7)+"/"+data.courseByTutor.classStartDateAndTime.substring(8,10)+" "+data.courseByTutor.classStartDateAndTime.substring(11,16))}
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