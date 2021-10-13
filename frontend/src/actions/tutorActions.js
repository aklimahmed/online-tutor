import axios from 'axios'
import {
  TUTOR_FORM_FAIL,
  TUTOR_FORM_REQUEST,
  TUTOR_FORM_SUCCESS,
  BASIC_INFO,
  ACADEMIC_QUALIFICATION,
  EXTRA_QUALIFICATION,
  WEEKLY_TIME,
  WORK_EXPERIENCE,
  SUBJECT_TEACHES,
  TEACHES_AND_FEES,
  LESSON_INCLUDE,
  EXTRA_ACTIVITIES,
  ABOUT_ME
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
<<<<<<< HEAD
  return{
      type: BASIC_INFO,
=======
  return {
      type: BasicInfoType,
>>>>>>> ceb934ea808446b6dfb8909f942fc468f929a8bb
      payload: info
  };
};

export const academicQualificationForm = (info) =>{
  return{
      type: ACADEMIC_QUALIFICATION,
      payload: info
  };
};


export const extraQualificationForm = (info) =>{
  return{
      type: EXTRA_QUALIFICATION,
      payload: info
  };
};


export const WorkExperienceForm = (info) =>{
  return{
      type: WORK_EXPERIENCE,
      payload: info
  };
};


export const weeklyTimeForm = (info) =>{
  return{
      type: WEEKLY_TIME,
      payload: info
  };
};

export const subjectTeachesForm = (info) =>{
  return{
      type: SUBJECT_TEACHES,
      payload: info
  };
};


export const teachesAndFeesForm = (info) =>{
  return{
      type: TEACHES_AND_FEES,
      payload: info
  };
};


export const lessonIncludeForm = (info) =>{
  return{
      type: LESSON_INCLUDE,
      payload: info
  };
};

export const extraActivitiesForm = (info) =>{
  return{
      type: EXTRA_ACTIVITIES,
      payload: info
  };
};

export const aboutMeForm = (info) =>{
  return{
      type: ABOUT_ME,
      payload: info
  };
};

