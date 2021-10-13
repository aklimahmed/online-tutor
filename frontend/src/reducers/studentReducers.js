import {
    STUDENT_FORM_REQUEST,
    STUDENT_FORM_SUCCESS,
    STUDENT_FORM_FAIL,
    StudentBasicInfoType,
    AcademicInfoType
} from '../constants/studentConstants'

export const tutorFormReducer = (state = {}, action) => {
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

  export const StudentBasicInfoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case StudentBasicInfoType:
            return { ...state, basicInfo: payload };

        default:
            return state;
    }
}
  

export const academicQualificationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case AcademicInfoType:
          return { ...state, studentAcademicInfo: payload };

      default:
          return state;
  }
}