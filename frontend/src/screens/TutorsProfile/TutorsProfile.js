
import React from "react";
import BasicInfo from "../../components/TutorsProfile/BasicInfo";
import SubJectTeaches from "../../components/TutorsProfile/SubJectTeaches";
import TeachesAndFees from "../../components/TutorsProfile/TeachesAndFees";
import WeeklyTime from "../../components/TutorsProfile/WeeklyTime";
import AcademicQualification from "../../components/TutorsProfile/AcademicQualification";
import LessonInclude from "../../components/TutorsProfile/LessonInclude";
import ExtraActivities from "../../components/TutorsProfile/ExtraActivities";
import AboutMe from "../../components/TutorsProfile/AboutMe";
import DocumentsUpload from "../../components/TutorsProfile/DocumentsUpload";
import ExtraQualifications from "../../components/TutorsProfile/ExtraQualifications";
import WorkExperience from "../../components/TutorsProfile/WorkExperience";

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
      <DocumentsUpload />
    </div>
  );
};


export default TutorsProfile;
