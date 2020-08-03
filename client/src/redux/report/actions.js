import { SET_SUBJECT_SELECTED, SET_SCHOOL_SELECTED, SET_GRADE_SELECTED } from "./reducer";
const electron = window.require("electron");
const typeorm = electron.remote.require("typeorm");

export const setSubjectSelected = (subject) => {
  return {
    type: SET_SUBJECT_SELECTED,
    payload: subject,
  };
};

export const setGradeSelected = (grade) => {
  return {
    type: SET_GRADE_SELECTED,
    payload: grade,
  };
};

export const setSchoolSelected = (school) => {
  return {
    type: SET_SCHOOL_SELECTED,
    payload: school,
  };
};

// export const getSubjectWiseChart = (grade) => {
//   return (dispatch) => {
//     typeorm.getRepository("subject")
//   }
// }