import React from "react";
import BasicInfo from "../../components/TutorsProfile/BasicInfo";
import SubJectTeaches from "../../components/TutorsProfile/SubJectTeaches";
import TeachesAndFees from "../../components/TutorsProfile/TeachesAndFees";
import WeeklyTime from "../../components/TutorsProfile/WeeklyTime";
import AcademicQualification from "../../components/TutorsProfile/AcademicQualification";
import LessonInclude from "../../components/TutorsProfile/LessonInclude";
import ExtraActivities from "../../components/TutorsProfile/ExtraActivities";
import AboutMe from "../../components/TutorsProfile/AboutMe";
import ExtraQualifications from "../../components/TutorsProfile/ExtraQualifications";
import WorkExperience from "../../components/TutorsProfile/WorkExperience";
import VideoUpload from "../../components/TutorsProfile/VideoUpload"

const TutorsProfile = () => {
  return (
    <div>
      <BasicInfo />
      <AcademicQualification />
      <ExtraQualifications />
      <WorkExperience />
      <WeeklyTime />
      <SubJectTeaches />
      <TeachesAndFees />
      <LessonInclude />
      <ExtraActivities />
      <AboutMe />
      <VideoUpload />
    </div>
  );
};


export default TutorsProfile;