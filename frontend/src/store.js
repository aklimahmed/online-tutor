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
  SubjectTeachesReducer,
  TeachesAndFeesReducer,
  LessonIncludeReducer,
  ExtraActivitiesReducer,
  AboutMeReducer
} from "./reducers/tutorReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  tutorForm: tutorFormReducer,
  basicInfoForm: basicInfoReducer,
  academicQualificationForm: academicQualificationReducer,
  extraQualificationForm: extraQualificationReducer,
  WorkExperienceForm: WorkExperienceReducer,
  weeklyTimeForm: weeklyTimeReducer,
  SubJectTeachesForm: SubjectTeachesReducer,
  TeachesAndFeesForm: TeachesAndFeesReducer,
  LessonIncludeForm: LessonIncludeReducer,
  ExtraActivitiesForm: ExtraActivitiesReducer,
  AboutMeForm: AboutMeReducer
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
