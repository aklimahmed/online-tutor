import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";

import {
  tutorFormReducer,
  basicInfoReducer,
  academicQualificationReducer,
  extraQualificationReducer,
  weeklyTimeReducer,
  WorkExperienceReducer,
  subjectTeachesReducer,
  teachesAndFeesReducer,
  lessonIncludeReducer,
  extraActivitiesReducer,
  aboutMeReducer
} from "./reducers/tutorReducers";

import { studentFormReducer, 
  studentBasicInfoReducer, 
  academicInfoReducer,
  studentExtraActivitiesReducer
} from "./reducers/studentReducers"

import { courseFormReducer, 
  courseByTutorReducer,
} from "./reducers/courseReducers"

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  tutorForm: tutorFormReducer,
  basicInfoForm: basicInfoReducer,
  academicQualificationForm: academicQualificationReducer,
  extraQualificationForm: extraQualificationReducer,
  WorkExperienceForm: WorkExperienceReducer,
  weeklyTimeForm: weeklyTimeReducer,
  subjectTeachesForm: subjectTeachesReducer,
  teachesAndFeesForm: teachesAndFeesReducer,
  lessonIncludeForm: lessonIncludeReducer,
  extraActivitiesForm: extraActivitiesReducer,
  aboutMeForm: aboutMeReducer,
  studentForm: studentFormReducer,
  studentBasicInfoForm: studentBasicInfoReducer,
  studentAcademicInfoForm: academicInfoReducer,
  studentExtraActivitiesForm: studentExtraActivitiesReducer,
  courseForm: courseFormReducer,
  courseByTutorForm: courseByTutorReducer
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;