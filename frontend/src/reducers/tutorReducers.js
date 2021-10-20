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

  const initialState = {
}

  export const basicInfoReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case BASIC_INFO:
            return { ...state, basicInfo: payload };
        default:
            return state;
    }
}
  

export const academicQualificationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case ACADEMIC_QUALIFICATION:
          return { ...state, academicQualification: payload };

      default:
          return state;
  }
}
  

export const extraQualificationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case EXTRA_QUALIFICATION:
          return { ...state, ExtraQualification: payload };

      default:
          return state;
  }
}


export const WorkExperienceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case WORK_EXPERIENCE:
          return { ...state, WorkExperience: payload };

      default:
          return state;
  }
}

export const weeklyTimeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case WEEKLY_TIME:
          return { ...state, weeklyTime: payload };

      default:
          return state;
  }
}


export const subjectTeachesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case SUBJECT_TEACHES:
          return { ...state, SubjectTeaches: payload };

      default:
          return state;
  }
}


export const teachesAndFeesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case TEACHES_AND_FEES:
          return { ...state, TeachesAndFees: payload };

      default:
          return state;
  }
}


export const lessonIncludeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case LESSON_INCLUDE:
          return { ...state, LessonInclude: payload };

      default:
          return state;
  }
}

export const extraActivitiesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case EXTRA_ACTIVITIES:
          return { ...state, ExtraActivities: payload };

      default:
          return state;
  }
}

export const aboutMeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case ABOUT_ME:
          return { ...state, AboutMe: payload };

      default:
          return state;
  }
}