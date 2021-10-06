import React from "react";
import BatchTable from "../../components/TutorsProfileView/BatchTable";
import Qualifications from "../../components/TutorsProfileView/Qualifications";
import ExtraQualifications from "./../../components/TutorsProfileView/ExtraQualifications";
import WorkExperience from "./../../components/TutorsProfileView/WorkExperience";

const TutorProfileView = () => {
  return (
    <div>
      <BatchTable />
      <Qualifications />
      <ExtraQualifications />
      <WorkExperience />
    </div>
  );
};

export default TutorProfileView;
