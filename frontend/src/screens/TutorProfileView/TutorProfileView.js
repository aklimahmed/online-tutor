import React from "react";
import BatchTable from "../../components/TutorsProfileView/BatchTable";
import Qualifications from "../../components/TutorsProfileView/Qualifications";
import ExtraQualifications from "./../../components/TutorsProfileView/ExtraQualifications";
import WorkExperience from "./../../components/TutorsProfileView/WorkExperience";
import GeneralAvailability from "../../components/TutorsProfileView/GeneralAvailability";
import SubjectTeaches from "./../../components/TutorsProfileView/SubjectTeaches";
import ClassTeaches from "../../components/TutorsProfileView/ClassTeaches";
import LessonInclude from "../../components/TutorsProfileView/LessonInclude";
import AboutMe from "../../components/TutorsProfileView/AboutMe";

const TutorProfileView = () => {
  return (
    <div>
      <BatchTable />
      <Qualifications />
      <ExtraQualifications />
      <WorkExperience />
      <GeneralAvailability />
      <SubjectTeaches />
      <ClassTeaches />
      <LessonInclude/>
      <AboutMe/>
    </div>
  );
};

export default TutorProfileView;
