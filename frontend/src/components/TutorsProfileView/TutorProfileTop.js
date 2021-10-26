import React, { useEffect, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { FcAlarmClock } from "react-icons/fc";
import { GiShare } from "react-icons/gi";
import { FaUsers, FaHeart } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import { ImStarFull } from "react-icons/im";
import { MdOutlineVerifiedUser } from "react-icons/md";
import "./TutorProfileTop.scss";
import { Link } from "react-router-dom";

const TutorProfileTop = (props) => {
  const [basicData, setBasicData] = useState({});
  const [academic, setAcademic] = useState({});
  const [videoUpload, setVideoUpload] = useState({});

  useEffect(() => {
    setBasicData(props.tutorInfo.basic);
    setAcademic(props.tutorInfo.academic);
    setVideoUpload(props.tutorInfo.videoUpload);
  }, [props]);


  const getDegree = () => {
    if(academic){
    if(academic.hscDegree === ""){
      return {
        degree: "SSC",
        major: academic ? academic.sscDegree : "",
        institute: academic ? academic.sscInstitution : ""
      }
    }
    else if(academic.graduationDegree === ""){
      return {
        degree: "HSC",
        major: academic ? academic.hscDegree : "",
        institute: academic ? academic.hscInstitution : ""
      }
    }
    else if(academic.postGraduationDegree === ""){
      return {
        degree: "Graduate",
        major: academic.graduationDegree ? academic.graduationDegree : "",
        institute: academic ? academic.graduationInstitution : ""
      }
    }
    else if(academic.doctorateDegree === ""){
        return {
          degree: "Post Graduate",
          major: academic ? academic.postGraduationDegree : "",
          institute: academic ? academic.postGraduationInstitution : ""
        }
      }
      else {
        return {
          degree: "Doctorate",
          major: academic ? academic.doctorateDegree : "",
          institute: academic ? academic.doctorateInstitution : ""
        }
      }
    }
  }

  return (
    <div className="d-flex tutor_profile_top_main">
      <div className="d-flex">
        <div className="image_div">
          <div className="teacher_image">
            <img
              src={videoUpload ? videoUpload.profilePhotoUrl : ""}
              alt="tutor_picture"
            />
            <div className="dot"></div>
          </div>
          <div className="text-center">
            <p className="heart">
              <FaHeart />
            </p>
            <small>1002 followers</small>
          </div>
        </div>
        <div>
          <h4 className="teacher_name">
            {basicData ? basicData.tutorsName + " " : ""}
            <small className="verify">
              <MdOutlineVerifiedUser />
            </small>
          </h4>
          <p className="tutor_top_secondary">
            <small>
              Profile URL: elearning.com/md-rasel-ud-jaman <IoCopyOutline />{" "}
              <GiShare />
            </small>
          </p>
          <p>
            <small>{academic ? getDegree().degree+ " ("+getDegree().major+") - "+getDegree().institute : ""}</small>
          </p>
          <p>
            <small>
              <span className="tutor_top_primary">
                {basicData ? basicData.experience + "+" : ""}
              </span>{" "}
              years teaching experience
            </small>
          </p>
          <div className="d-flex mt-3 mb-3">
            <div className="d-flex align-items-center lesson_bg">
              <div>
                <h5>
                  <FcAlarmClock />
                </h5>
              </div>
              <div className="px-3">
                <p className="tutor_top_secondary">Lessons</p>
                <p className="tutor_top_primary">123</p>
              </div>
            </div>
            <div className="d-flex align-items-center lesson_bg student_div">
              <div>
                <h5>
                  <FaUsers />
                </h5>
              </div>
              <div className="px-3">
                <p className="tutor_top_secondary">Students</p>
                <p className="tutor_top_primary">222</p>
              </div>
            </div>
            <div className="d-flex align-items-center lesson_bg">
              <div>
                <h5>
                  <BsCalendar3 />
                </h5>
              </div>
              <div className="px-3">
                <p className="tutor_top_secondary">Join here</p>
                <p className="tutor_top_primary">1y 6m</p>
              </div>
            </div>
          </div>
          <div>
            <p>
              <small>
                Speaks:{" "}
                <span className="tutor_top_secondary">
                  {basicData && basicData.languages
                    ? basicData.languages.map((item, i, arr) => (
                        <span key={i}>
                          {item}
                          {i !== arr.length - 1 ? ", " : ""}
                        </span>
                      ))
                    : ""}
                </span>
              </small>
            </p>
            <p>
              <small>
                Local language understandable:{" "}
                <span className="tutor_top_secondary">
                  {basicData && basicData.locallanguage
                    ? basicData.locallanguage.map((item, i, arr) => (
                        <span key={i}>
                          {item}
                          {i !== arr.length - 1 ? ", " : ""}
                        </span>
                      ))
                    : ""}
                </span>
              </small>
            </p>
            <p>
              <small>
                Current location:{" "}
                <span className="tutor_top_secondary">
                  {basicData ? basicData.presentDistrict : ""}
                </span>
              </small>
            </p>
          </div>
          <div className="mt-3">
            <Link to="/" className="btn btn-enroll">
              ENROLL NOW
            </Link>
            <Link to="/" className="btn btn-message mx-3">
              MESSAGE
            </Link>
          </div>
        </div>
      </div>
      <div className="rating_div">
        <div className="d-flex">
          <h1 className="tutor_rating">4.7</h1>
          <h2 className="tutor_top_secondary">|</h2>
          <div className="tutor_top_secondary">
            <p>
              <small>
                <ImStarFull />
                <ImStarFull />
                <ImStarFull />
                <ImStarFull />
                <ImStarFull />
              </small>
            </p>
            <p>
              <small>149 reviews</small>
            </p>
          </div>
        </div>
        <div>
          <p>
            <small className="tutor_top_primary pt-2">Ratings & reviews</small>
          </p>
          <div className="d-flex pt-2">
            <div>
              <p>
                <small>Subject knowledge</small>
              </p>
              <p>
                <small>Presentation Skills</small>
              </p>
              <p>
                <small>Problem solving attitude</small>
              </p>
              <p>
                <small>Time Management</small>
              </p>
              <p>
                <small>Student Care</small>
              </p>
            </div>
            <div className="px-5">
              <p>
                <small>
                  <span className="tutor_top_primary">5.0&emsp;</span>
                  <span className="stars">
                    <ImStarFull />
                    <ImStarFull />
                    <ImStarFull />
                    <ImStarFull />
                    <ImStarFull />
                  </span>
                  <span className="tutor_top_primary">&emsp;(149)</span>
                </small>
              </p>
              <p>
                <small>
                  <span className="tutor_top_primary">5.0&emsp;</span>
                  <span className="stars">
                    <ImStarFull />
                    <ImStarFull />
                    <ImStarFull />
                    <ImStarFull />
                    <ImStarFull />
                  </span>
                  <span className="tutor_top_primary">&emsp;(149)</span>
                </small>
              </p>
              <p>
                <small>
                  <span className="tutor_top_primary">5.0&emsp;</span>
                  <span className="stars">
                    <ImStarFull />
                    <ImStarFull />
                    <ImStarFull />
                    <ImStarFull />
                    <ImStarFull />
                  </span>
                  <span className="tutor_top_primary">&emsp;(149)</span>
                </small>
              </p>
              <p>
                <small>
                  <span className="tutor_top_primary">5.0&emsp;</span>
                  <span className="stars">
                    <ImStarFull />
                    <ImStarFull />
                    <ImStarFull />
                    <ImStarFull />
                    <ImStarFull />
                  </span>
                  <span className="tutor_top_primary">&emsp;(149)</span>
                </small>
              </p>
              <p>
                <small>
                  <span className="tutor_top_primary">5.0&emsp;</span>
                  <span className="stars">
                    <ImStarFull />
                    <ImStarFull />
                    <ImStarFull />
                    <ImStarFull />
                    <ImStarFull />
                  </span>
                  <span className="tutor_top_primary">&emsp;(149)</span>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorProfileTop;
