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
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const TutorProfileView = () => {
  const [fetchTutorInfo, setFetchTutorInfo] = useState();

  const dispatch = useDispatch();

  const id = useSelector((state) => state.userLogin.userInfo._id);

  useEffect(() => {
    fetch(`http://localhost:5000/api/tutor/profile/${id}`)
    .then(res => res.json())
    .then(data => console.log(data))
  },[id]);

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
