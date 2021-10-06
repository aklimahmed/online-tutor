import {
    TUTOR_FORM_FAIL,
    TUTOR_FORM_REQUEST,
    TUTOR_FORM_SUCCESS,
  
  } from '../constants/tutorConstants'

  
  export const tutorFormReducer = (state = {}, action) => {
    switch (action.type) {
      case TUTOR_FORM_REQUEST:
        return { loading: true }
      case TUTOR_FORM_SUCCESS:
        return { loading: false, tutorInfo: action.payload }
      case TUTOR_FORM_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  