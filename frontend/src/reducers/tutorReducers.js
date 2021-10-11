import {
    TUTOR_FORM_FAIL,
    TUTOR_FORM_REQUEST,
    TUTOR_FORM_SUCCESS,
    BasicInfoType,
    AcademicQualificationType,
    ExtraQualificationType,
    WeeklyTimeType,
    WorkExperienceType,
    SubjectTeachesType,
    TeachesAndFessType,
    LessonIncludeType,
    ExtraActivitiesType,
    AboutMeType
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
        case BasicInfoType:
            return { ...state, basicInfo: payload };

        default:
            return state;
    }
}
  

export const academicQualificationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case AcademicQualificationType:
          return { ...state, academicQualification: payload };

      default:
          return state;
  }
}
  

export const extraQualificationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case ExtraQualificationType:
          return { ...state, ExtraQualification: payload };

      default:
          return state;
  }
}


export const WorkExperienceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case WorkExperienceType:
          return { ...state, WorkExperience: payload };

      default:
          return state;
  }
}

export const weeklyTimeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case WeeklyTimeType:
          return { ...state, WeeklyTime: payload };

      default:
          return state;
  }
}


export const SubjectTeachesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case SubjectTeachesType:
          return { ...state, SubjectTeaches: payload };

      default:
          return state;
  }
}


export const TeachesAndFeesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case TeachesAndFessType:
          return { ...state, TeachesAndFees: payload };

      default:
          return state;
  }
}


export const LessonIncludeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case LessonIncludeType:
          return { ...state, LessonInclude: payload };

      default:
          return state;
  }
}

export const ExtraActivitiesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case ExtraActivitiesType:
          return { ...state, ExtraActivities: payload };

      default:
          return state;
  }
}

export const AboutMeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
      case AboutMeType:
          return { ...state, AboutMe: payload };

      default:
          return state;
  }
}