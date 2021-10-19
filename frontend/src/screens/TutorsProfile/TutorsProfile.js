import { React } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { createTutor } from "./../../actions/tutorActions";
import './TutorProfile.scss'

const TutorsProfile = () => {
  const dispatch = useDispatch();

  const basic = useSelector((state) => state.basicInfoForm.basicInfo);
  
  const academic = useSelector(
    (state) => state.academicQualificationForm.academicQualification
  );
  const exQualification = useSelector(
    (state) => state.extraQualificationForm.ExtraQualification
  );
  const woExperience = useSelector(
    (state) => state.WorkExperienceForm.WorkExperience
  );
  const weeklyTime = useSelector((state) => state.weeklyTimeForm.WeeklyTime);
  const subjectTeaches = useSelector(
    (state) => state.subjectTeachesForm.SubjectTeaches
  );
  const teachesAndFess = useSelector(
    (state) => state.teachesAndFeesForm.TeachesAndFees
  );
  const lessonInclude = useSelector(
    (state) => state.lessonIncludeForm.LessonInclude
  );
  const exActivities = useSelector(
    (state) => state.extraActivitiesForm.ExtraActivities
  );
  const aboutMe = useSelector((state) => state.aboutMeForm.AboutMe);
  const user = useSelector((state) => state.userLogin.userInfo);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createTutor(
        user,
        basic,
        academic,
        exQualification,
        woExperience,
        weeklyTime,
        subjectTeaches,
        teachesAndFess,
        lessonInclude,
        exActivities,
        aboutMe
      )
    );
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <div className="d-flex justify-content-center">
        <button className="form_button" className="btn btn-primary mt-3 mb-5" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default TutorsProfile;
