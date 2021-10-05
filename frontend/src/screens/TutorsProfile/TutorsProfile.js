import React from "react";
import BasicInfo from "../../components/TutorsProfile/BasicInfo";
import SubjectTeaches from "../../components/TutorsProfile/SubjectTeaches";
import TeachesAndFees from "../../components/TutorsProfile/TeachesAndFees";
import WeeklyTime from "../../components/TutorsProfile/WeeklyTime";
import AcademicQualification from "../../components/TutorsProfile/AcademicQualification";
import LessonInclude from "../../components/TutorsProfile/LessonInclude";
import ExtraActivities from "../../components/TutorsProfile/ExtraActivities";
import AboutMe from "../../components/TutorsProfile/AboutMe";
import ExtraQualifications from "../../components/TutorsProfile/ExtraQualifications";
import WorkExperience from "../../components/TutorsProfile/WorkExperience";
import VideoUpload from "../../components/TutorsProfile/VideoUpload";
import DocumentsUpload from "../../components/TutorsProfile/DocumentsUpload";

const TutorsProfile = () => {
  return (
    <div>
      <BasicInfo />
      <AcademicQualification />
      <ExtraQualifications />
      <WorkExperience />
      <WeeklyTime />
      <SubjectTeaches />
      <TeachesAndFees />
      <LessonInclude />
      <ExtraActivities />
      <AboutMe />
      <DocumentsUpload />
      <VideoUpload />
    </div>
  );
};

export default TutorsProfile;