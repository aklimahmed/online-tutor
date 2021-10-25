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
  ABOUT_ME,
  DOCUMENTS_UPLOAD,
  VIDEO_UPLOAD
} from '../constants/tutorConstants'

export const createTutor = (user,basic, academic, exQualification, woExperience, weeklyTime,
  subjectTeaches, teachesAndFess, lessonInclude, exActivities, aboutMe, documentsUpload, videoUpload) => async (dispatch) => {
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
      'http://localhost:5000/api/tutor',
      { user,basic, academic, exQualification, woExperience, weeklyTime, subjectTeaches, teachesAndFess,
        lessonInclude, exActivities, aboutMe, documentsUpload, videoUpload},
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


export const editTutor = (
  id,
  basic,
  academic,
  exQualification,
  woExperience,
  weeklyTime,
  subjectTeaches,
  teachesAndFess,
  lessonInclude,
  exActivities,
  aboutMe,
  documentsUpload,
  videoUpload) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TUTOR_FORM_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
    }

    const update = {id,
      basic,
      academic,
      exQualification,
      woExperience,
      weeklyTime,
      subjectTeaches,
      teachesAndFess,
      lessonInclude,
      exActivities,
      aboutMe,
      documentsUpload, 
      videoUpload}
    
    const { data } = await axios.put(
      `http://localhost:5000/api/tutor/profile/edit/${id}`,
      update,
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
  return{
      type: BASIC_INFO,
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

export const documentsUploadForm = (info) =>{
  return{
      type: DOCUMENTS_UPLOAD,
      payload: info
  };
};

export const videoUploadForm = (info) =>{
  return{
      type: VIDEO_UPLOAD,
      payload: info
  };
};