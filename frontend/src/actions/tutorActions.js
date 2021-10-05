import axios from 'axios'
import {
  TUTOR_FORM_FAIL,
  TUTOR_FORM_REQUEST,
  TUTOR_FORM_SUCCESS,
} from '../constants/tutorConstants'

export const createTutor = (BasicInfo, AcademicQualification, extraQualification, WorkExperience, WeeklyTime,
    SubjectTeaches, TeachesAndFees, LessonInclude, ExtraActivities, AboutMe, DocumentUpload, VideoUpload) => async (dispatch) => {
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
      { BasicInfo, AcademicQualification, extraQualification, WorkExperience, WeeklyTime, SubjectTeaches, TeachesAndFees,
        LessonInclude, ExtraActivities, AboutMe, DocumentUpload, VideoUpload},
      config
    )

    dispatch({
      type: TUTOR_FORM_SUCCESS,
      payload: data,
    })

    localStorage.setItem('tutorInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: TUTOR_FORM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
