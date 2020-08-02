import {
  TOGGLE_CREATE_STUDENT,
  TOGGLE_CREATE_STAFF,
  TOGGLE_CREATE_SCHOOL,
} from "./reducer";

export const toggleCreateStudent = (bool) => {
  return {
    type: TOGGLE_CREATE_STUDENT,
    payload: bool,
  };
};

export const toggleCreateStaff = (bool) => {
  return {
    type: TOGGLE_CREATE_STAFF,
    payload: bool,
  };
};

export const toggleCreateSchool = (bool) => {
  return {
    type: TOGGLE_CREATE_SCHOOL,
    payload: bool,
  };
};
