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

const TutorProfileView = () => {
  const [fetchTutorInfo, setFetchTutorInfo] = useState();

  // const dispatch = useDispatch();

  // const id = useSelector((state) => state.userLogin.userInfo._id);

  useEffect(() => {
    fetch(`/api/tutor/profile/6163e30da7206a0b7c8ec996`)
    .then(res => res.json())
    .then(data => setFetchTutorInfo(data))
  },[]);

  console.log(fetchTutorInfo);

  return (
    <div>
      <BatchTable />
      <Qualifications />
      <ExtraQualifications />
      <WorkExperience />
      <GeneralAvailability />
      <SubjectTeaches />
      <ClassTeaches />
      <LessonInclude />
      <AboutMe />
    </div>
  );
};

export default TutorProfileView;
