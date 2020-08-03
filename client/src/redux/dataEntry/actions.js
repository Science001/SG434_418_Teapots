import axiosInstance from "../../utils/axiosInstance";
import { showToast } from "../toast/actions";
// const electron = window.require("electron");
// const typeorm = electron.remote.require("typeorm");

import {
  TOGGLE_CREATE_STUDENT,
  TOGGLE_CREATE_STAFF,
  ADD_STUDENTS,
  ENTER_RESULTS_PAGE,
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

export const toggleResultsPage = (bool) => {
  return {
    type: ENTER_RESULTS_PAGE,
    payload: bool,
  };
};

export const addStudents = (students) => {
  return {
    type: ADD_STUDENTS,
    payload: students,
  };
};

export const createStudent = (body) => {
  return (dispatch) => {
    axiosInstance
      .post("/student", body)
      .then((res) => {
        console.log(res);
        dispatch(showToast("Student Record Created Successfully!"));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const createStaff = (body) => {
  return (dispatch) => {
    axiosInstance
      .post("/teacher", body)
      .then((res) => {
        console.log(res);
        dispatch(showToast("Staff Record Created Successfully!"));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const createSchool = (body) => {
  return (dispatch) => {
    axiosInstance
      .post("/school", body)
      .then((res) => {
        console.log(res);
        dispatch(showToast("School Record Created Successfully!"));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// export const fetchStudents = () => {
//   return (dispatch) => {
//     const students = typeorm.getRepository("student").find();
//     console.log(students);
//     // dispatch(addStudents(students));
//   };
// };
