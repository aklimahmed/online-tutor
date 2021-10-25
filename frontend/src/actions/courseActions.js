import axios from 'axios'

import {
    COURSE_FORM_REQUEST,
    COURSE_FORM_SUCCESS,
    COURSE_FORM_FAIL,
    COURSE_BY_TUTOR
} from '../constants/courseConstants'

export const createCourse = (tutor, courseByTutor) => async (dispatch) => {
    try {
      dispatch({
        type: COURSE_FORM_REQUEST,
      })
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
  
      const { data } = await axios.post(
        'http://localhost:5000/api/course',
        { tutor, courseByTutor},
        config
      )
  
      dispatch({
        type: COURSE_FORM_SUCCESS,
        payload: data,
      })
  
    } catch (error) {
      const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message
  
      if(message === 'Not authorized')
      dispatch({
        type: COURSE_FORM_FAIL,
        payload: message,
      })
    }
  }

  export const editCourse = (
    id,
    courseByTutor
   ) => async (dispatch, getState) => {
    try {
      dispatch({
        type: COURSE_FORM_REQUEST,
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
  
      const update = {
        id,
        courseByTutor}
      
      const { data } = await axios.put(
        `http://localhost:5000/api/course/tutor/edit/${id}`,
        update,
        config
      )
  
      dispatch({
        type: COURSE_FORM_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message
  
      if(message === 'Not authorized, token failed')
      dispatch({
        type: COURSE_FORM_FAIL,
        payload: message,
      })
    }
    }

  export const courseByTutorForm = (info) => {
    return {
        type: COURSE_BY_TUTOR,
        payload: info
    };
  };
  
  