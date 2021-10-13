import {
    STUDENT_FORM_REQUEST,
    STUDENT_FORM_SUCCESS,
    STUDENT_FORM_FAIL,
    STUDENT_BASIC_INFO,
    STUDENT_ACADEMIC_INFO,
    STUDENT_EXTRA_ACTIVITIES
} from '../constants/studentConstants'

export const studentFormReducer = (state = {}, action) => {
    switch (action.type) {
      case STUDENT_FORM_REQUEST:
        return { loading: true }
      case STUDENT_FORM_SUCCESS:
        return { loading: false, studentInfo: action.payload }
      case STUDENT_FORM_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
}

const initialState = {
}

export const studentBasicInfoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case STUDENT_BASIC_INFO:
            return { ...state, studentBasicInfo: payload };
        default:
            return state;
    }
}
  

export const academicInfoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case STUDENT_ACADEMIC_INFO:
          return { ...state, studentAcademicInfo: payload };
      default:
          return state;
  }
}

export const studentExtraActivitiesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case STUDENT_EXTRA_ACTIVITIES:
          return { ...state, studentExtraActivities: payload };

      default:
          return state;
  }
}