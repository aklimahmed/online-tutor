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
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0
  let yyyy = String(today.getFullYear());

  today = yyyy + "-" + mm + "-" + dd;
  let todaySlashFormatDate = dd + "/" + mm + "/" + yyyy;
  let todaySlashYearFirstDate = yyyy + "/" + mm + "/" + dd;

  const daysArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const d = new Date();
  let dayNo = d.getDay();
  let day = daysArray[dayNo];

  d.getHours(); // => 9
  d.getMinutes(); // =>  30
  const nowTime = d.getHours() + ":" + d.getMinutes();

  const isDateBetweenStartAndEndDate = (dateFrom, dateTo, dateCheck) => {
    let d1 = dateFrom.split("/");
    let d2 = dateTo.split("/");
    let c = dateCheck.split("/");

    let from = new Date(d1[2], parseInt(d1[1]) - 1, d1[0]); // -1 because months are from 0 to 11
    let to = new Date(d2[2], parseInt(d2[1]) - 1, d2[0]);
    let check = new Date(c[2], parseInt(c[1]) - 1, c[0]);

    if (check >= from && check <= to) {
      return true;
    } else {
      return false;
    }
  };

  const timeRemaining = (presentTime, classStartTime) => {
    console.log(presentTime, classStartTime);
    var startTime = new Date(presentTime);
    var endTime = new Date(classStartTime);
    var difference = endTime.getTime() - startTime.getTime(); // This will give difference in milliseconds
    var resultInMinutes = Math.round(difference / 60000);

    let hours = resultInMinutes / 60;

    if (hours > 1) {
      return `${~~hours} h and ${resultInMinutes % 60} m remaining`;
    } else {
      return `${resultInMinutes} m remaining`;
    }
  };

  const getTime = (data) => {
    const [h, m] = data.split(":");
    const time = `${(h % 12) + 12 * (h % 12 === 0)}:${m} ${
      h >= 12 ? "pm" : "am"
    }`;
    return `${time}`;
  };

  const getClassEndTime = (startTime, classDuration) => {
    let hours = (startTime[0]+startTime[1])*1;
    let minutes = (startTime[3]+startTime[4])*1;
    let totalMinutes = hours*60 + minutes*60 + classDuration;
    let finalHour = ~~(totalMinutes/60) 
    let finalMinutes = totalMinutes - finalHour*60
    console.log(`Time after class duration: ${finalHour}:${finalMinutes}`)
  }

  getClassEndTime("16:00", 90)
  return (
    <div className="course_carousel">
      <h5 className="component_header">Today's Live Class</h5>
      {
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
        >
          {fetchCourseDetails
            .filter(
              (data) =>
                data.courseByTutor.courseStartDate ===
                  today &&
                isDateBetweenStartAndEndDate(
                  data.courseByTutor.courseStartDate.substring(8, 10) +
                    "/" +
                    data.courseByTutor.courseStartDate.substring(5, 7) +
                    "/" +
                    data.courseByTutor.courseStartDate.substring(0, 4),
                  data.courseByTutor.courseEndDate.substring(8, 10) +
                    "/" +
                    data.courseByTutor.courseEndDate.substring(5, 7) +
                    "/" +
                    data.courseByTutor.courseEndDate.substring(0, 4),
                  todaySlashFormatDate
                ) === true
            )
            .map(
              (data) =>
                (data.courseByTutor.classDay[0] === day ||
                  data.courseByTutor.classDay[1] === day ||
                  data.courseByTutor.classDay[2] === day ||
                  data.courseByTutor.classDay[3] === day ||
                  data.courseByTutor.classDay[4] === day ||
                  data.courseByTutor.classDay[5] === day ||
                  data.courseByTutor.classDay[6] === day) && (
                  <div key={data.createdAt}>
                    <Card
                      bg="light"
                      text="dark"
                      style={{ width: "90%" }}
                      className="mb-4"
                    >
                      <Card.Body
                        className={`card_${
                          data.courseByTutor.tutionFee === 0 ? `free` : `paid`
                        }`}
                      >
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
                          Batch: {data.courseByTutor.courseStartDate}{" "}
                          <br />
                          <br />
                        </Card.Text>
                        <Card.Text className="time_style">
                          {getTime(data.courseByTutor.classStartTime)} to{" "}
                          {getTime(data.courseByTutor.classStartTime)}
                        </Card.Text>
                        <Card.Text className="time_remaining_style">
                          {timeRemaining(
                            todaySlashYearFirstDate + " " + nowTime,
                            data.courseByTutor.courseStartDate.substring(
                              0,
                              4
                            ) +
                              "/" +
                              data.courseByTutor.courseStartDate.substring(
                                5,
                                7
                              ) +
                              "/" +
                              data.courseByTutor.courseStartDate.substring(
                                8,
                                10
                              ) +
                              " " +
                              data.courseByTutor.classStartTime
                          )}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                )
            )}
        </Carousel>
      }
    </div>
  );
};

export default CourseCarousel;
