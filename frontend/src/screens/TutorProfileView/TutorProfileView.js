import React from "react";
import BatchTable from "../../components/TutorsProfileView/BatchTable";
import Qualifications from "../../components/TutorsProfileView/Qualifications";
import ExtraQualifications from "./../../components/TutorsProfileView/ExtraQualifications";
import WorkExperience from "./../../components/TutorsProfileView/WorkExperience";
import TutorsVideo from "../../components/TutorsProfileView/TutorsVideo";
import { Row, Col } from 'react-bootstrap'

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
