import axios from 'axios'
import {
  TUTOR_FORM_FAIL,
  TUTOR_FORM_REQUEST,
  TUTOR_FORM_SUCCESS,
  BasicInfoType,
  AcademicQualificationType,
  ExtraQualificationType,
  WeeklyTimeType,
  WorkExperienceType,
  SubjectTeachesType,
  TeachesAndFessType,
  LessonIncludeType,
  ExtraActivitiesType,
  AboutMeType
} from '../constants/tutorConstants'

export const createTutor = (user,basic, academic, exQualification, woExperience, WeeklyTime,
  subjectTeaches, teachesAndFess, lessonInclude, exActivities, aboutMe, DocumentUpload, VideoUpload) => async (dispatch) => {
  try {
    dispatch({
      type: TUTOR_FORM_REQUEST,
    })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/tutor',
      { user,basic, academic, exQualification, woExperience, WeeklyTime, subjectTeaches, teachesAndFess,
        lessonInclude, exActivities, aboutMe, DocumentUpload, VideoUpload},
      config
    )

    dispatch({
      type: TUTOR_FORM_SUCCESS,
      payload: data,
    })

  } catch (error) {
    const message = error.response && error.response.data.message
    ? error.response.data.message
    : error.message

    if(message === 'Not authorized, token failed')
    dispatch({
      type: TUTOR_FORM_FAIL,
      payload: message,
    })
  }
}


export const basicInfoForm = (info) =>{
  return {
      type: BasicInfoType,
      payload: info
  };
};

export const academicQualificationForm = (info) =>{
  return{
      type: AcademicQualificationType,
      payload: info
  };
};


export const extraQualificationForm = (info) =>{
  return{
      type: ExtraQualificationType,
      payload: info
  };
};


export const WorkExperienceForm = (info) =>{
  return{
      type: WorkExperienceType,
      payload: info
  };
};


export const weeklyTimeForm = (info) =>{
  return{
      type: WeeklyTimeType,
      payload: info
  };
};

export const SubjectTeachesForm = (info) =>{
  return{
      type: SubjectTeachesType,
      payload: info
  };
};


export const TeachesAndFeesForm = (info) =>{
  return{
      type: TeachesAndFessType,
      payload: info
  };
};


export const LessonIncludeForm = (info) =>{
  return{
      type: LessonIncludeType,
      payload: info
  };
};

export const ExtraActivitiesForm = (info) =>{
  return{
      type: ExtraActivitiesType,
      payload: info
  };
};

export const AboutMeForm = (info) =>{
  return{
      type: AboutMeType,
      payload: info
  };
};

