import { SET_SUBJECT_SELECTED, SET_GRADE_SELECTED } from "./reducer";

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
