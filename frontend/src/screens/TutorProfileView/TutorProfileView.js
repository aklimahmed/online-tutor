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
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const TutorProfileView = () => {
  const [fetchTutorInfo, setFetchTutorInfo] = useState({});

  const dispatch = useDispatch();

  const id = useSelector((state) => state.userLogin.userInfo._id);

  useEffect(() => {
    axios.get(`/api/tutor/profile/${id}`)
    .then(data => setFetchTutorInfo(data.data))
  },[id]);

  console.log(fetchTutorInfo);

  return (
    <div>
      <BatchTable />
      <Qualifications Qualifications={fetchTutorInfo.academic} />
      <ExtraQualifications exQualification={fetchTutorInfo.exQualification}/>
      <WorkExperience WoExperience={fetchTutorInfo.woExperience}/>
      <GeneralAvailability WeeklyTime={fetchTutorInfo.WeeklyTime} />
      <SubjectTeaches />
      <ClassTeaches />
      <LessonInclude />
      <AboutMe />
    </div>
  );
};

export default TutorProfileView;
