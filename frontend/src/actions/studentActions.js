import axios from 'axios'

import {
    STUDENT_FORM_REQUEST,
    STUDENT_FORM_SUCCESS,
    STUDENT_FORM_FAIL,
    STUDENT_BASIC_INFO,
    STUDENT_ACADEMIC_INFO,
    STUDENT_EXTRA_ACTIVITIES
} from '../constants/studentConstants'

export const createStudent = (user, studentBasic, studentAcademic, studentExtraActivities) => async (dispatch) => {
    try {
      dispatch({
        type: STUDENT_FORM_REQUEST,
      })
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
  
      const { data } = await axios.post(
        'http://localhost:5000/api/student',
        { user, studentBasic, studentAcademic, studentExtraActivities},
        config
      )
  
      dispatch({
        type: STUDENT_FORM_SUCCESS,
        payload: data,
      })
  
    } catch (error) {
      const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message
  
      if(message === 'Not authorized, token failed')
      dispatch({
        type: STUDENT_FORM_FAIL,
        payload: message,
      })
    }
  }

  export const studentsBasicInfoForm = (info) =>{
    return {
        type: STUDENT_BASIC_INFO,
        payload: info
    };
  };
  
  export const studentsAcademicInfoForm = (info) =>{
    return {
        type: STUDENT_ACADEMIC_INFO,
        payload: info
    };
  };

  export const studentExtraActivitiesForm = (info) =>{
    return{
        type: STUDENT_EXTRA_ACTIVITIES,
        payload: info
    };
  };
  
  