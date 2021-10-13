import axios from 'axios'

import {
    STUDENT_FORM_REQUEST,
    STUDENT_FORM_SUCCESS,
    STUDENT_FORM_FAIL,
    StudentBasicInfoType,
    AcademicInfoType
} from '../constants/studentConstants'

export const createStudent = (user, studentBasic, studentAcademic) => async (dispatch) => {
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
        '/api/student',
        { user, studentBasic, studentAcademic},
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
        type: StudentBasicInfoType,
        payload: info
    };
  };
  
  export const studentsAcademicInfoForm = (info) =>{
    return {
        type: AcademicInfoType,
        payload: info
    };
  };
  