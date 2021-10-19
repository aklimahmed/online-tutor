import { React, useEffect, useState } from "react";
import BasicInfo from "../../components/TutorProfileEdit/BasicInfo";
import SubjectTeaches from "../../components/TutorProfileEdit/SubjectTeaches";
import TeachesAndFees from "../../components/TutorProfileEdit/TeachesAndFees";
import WeeklyTime from "../../components/TutorProfileEdit/WeeklyTime";
import AcademicQualification from "../../components/TutorProfileEdit/AcademicQualification";
import LessonInclude from "../../components/TutorProfileEdit/LessonInclude";
import ExtraActivities from "../../components/TutorProfileEdit/ExtraActivities";
import AboutMe from "../../components/TutorProfileEdit/AboutMe";
import ExtraQualifications from "../../components/TutorProfileEdit/ExtraQualifications";
import WorkExperience from "../../components/TutorProfileEdit/WorkExperience";
import VideoUpload from "../../components/TutorProfileEdit/VideoUpload";
import DocumentsUpload from "../../components/TutorProfileEdit/DocumentsUpload";
import { useDispatch, useSelector } from "react-redux";
import { createTutor } from "./../../actions/tutorActions";

const TutorProfileEdit = () => {
  const [fetchTutorInfo, setFetchTutorInfo] = useState([]);

  const id = useSelector((state) => state.userLogin.userInfo._id);

  useEffect(() => {
    fetch(`http://localhost:5000/api/tutor/profile/${id}`)
      .then((res) => res.json())
      .then((data) => setFetchTutorInfo(data))
  }, [id]);

  console.log(fetchTutorInfo);

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
      <BasicInfo basic={fetchTutorInfo.basic} />
      <AcademicQualification academic={fetchTutorInfo.academic} />
      <ExtraQualifications exQualification={fetchTutorInfo.exQualification} />
      <WorkExperience woExperience={fetchTutorInfo.woExperience}/>
      <WeeklyTime WeeklyTime={fetchTutorInfo.WeeklyTime} />
      <SubjectTeaches subjectTeaches={fetchTutorInfo.subjectTeaches} />
      <TeachesAndFees teachesAndFess={fetchTutorInfo.teachesAndFess} />
      <LessonInclude lessonInclude={fetchTutorInfo.lessonInclude} />
      <ExtraActivities exActivities={fetchTutorInfo.exActivities} />
      <AboutMe aboutMe={fetchTutorInfo.aboutMe} />
      <DocumentsUpload />
      <VideoUpload />
      <div className="d-flex justify-content-center">
        <button
          style={{ width: "150px" }}
          className="btn btn-primary mt-3 mb-5"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default TutorProfileEdit;
