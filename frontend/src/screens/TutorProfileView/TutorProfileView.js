import { React, useState, useEffect } from "react";
import BatchTable from "../../components/TutorsProfileView/BatchTable";
import Qualifications from "../../components/TutorsProfileView/Qualifications";
import ExtraQualifications from "./../../components/TutorsProfileView/ExtraQualifications";
import WorkExperience from "./../../components/TutorsProfileView/WorkExperience";
import GeneralAvailability from "../../components/TutorsProfileView/GeneralAvailability";
import SubjectTeaches from "./../../components/TutorsProfileView/SubjectTeaches";
import ClassTeaches from "../../components/TutorsProfileView/ClassTeaches";
import LessonInclude from "../../components/TutorsProfileView/LessonInclude";
import AboutMe from "../../components/TutorsProfileView/AboutMe";
import { useSelector } from "react-redux";
import axios from "axios";
import ExtraActivities from "../../components/TutorsProfileView/ExtraActivities";
import { Col, Row } from "react-bootstrap";
import VideoIntro from "../../components/TutorsProfileView/VideoIntro";
import TutorProfileTop from "./../../components/TutorsProfileView/TutorProfileTop";

const TutorProfileView = () => {
  const [fetchTutorInfo, setFetchTutorInfo] = useState({});

  const id = useSelector((state) => state.userLogin.userInfo._id);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/tutor/profile/${id}`)
      .then((data) => setFetchTutorInfo(data.data));
  }, [id]);

  console.log(fetchTutorInfo);

  return (
    <div>
      <TutorProfileTop />
      <BatchTable />
      <Row style={{ marginLeft: "-1%" }}>
        <Col md={8}>
          <Qualifications Qualifications={fetchTutorInfo.academic} />
          <ExtraQualifications
            exQualification={fetchTutorInfo.exQualification}
          />
          <WorkExperience WoExperience={fetchTutorInfo.woExperience} />
          <GeneralAvailability WeeklyTime={fetchTutorInfo.WeeklyTime} />
          <SubjectTeaches subjectTeaches={fetchTutorInfo.subjectTeaches} />
          <ClassTeaches teachesAndFess={fetchTutorInfo.teachesAndFess} />
          <LessonInclude lessonInclude={fetchTutorInfo.lessonInclude} />
          <ExtraActivities exActivities={fetchTutorInfo.exActivities} />
          <AboutMe aboutMe={fetchTutorInfo.aboutMe} />
        </Col>
        <Col md={4}>
          <VideoIntro />
        </Col>
      </Row>
    </div>
  );
};

export default TutorProfileView;
