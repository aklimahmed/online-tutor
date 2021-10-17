import {
    COURSE_FORM_REQUEST,
    COURSE_FORM_SUCCESS,
    COURSE_FORM_FAIL,
    COURSE_BY_TUTOR
} from '../constants/courseConstants'

export const courseFormReducer = (state = {}, action) => {
    switch (action.type) {
      case COURSE_FORM_REQUEST:
        return { loading: true }
      case COURSE_FORM_SUCCESS:
        return { loading: false, courseInfo: action.payload }
      case COURSE_FORM_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
}

const initialState = {
}

export const courseByTutorReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case COURSE_BY_TUTOR:
            return { ...state, courseByTutor: payload };
        default:
            return state;
    }
}
  

