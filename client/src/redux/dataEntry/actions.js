import axiosInstance from "../../utils/axiosInstance";
import { showToast } from '../toast/actions';

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

export const createStudent = (body) => {
  return (dispatch) => {
    axiosInstance.post('/student', body)
      .then((res) => {
        console.log(res)
        dispatch(showToast('Student Record Created Successfully!'))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const createStaff = (body) => {
  return (dispatch) => {
    axiosInstance.post('/teacher', body)
      .then((res) => {
        console.log(res)
        dispatch(showToast('Staff Record Created Successfully!'))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const createSchool = (body) => {
  return (dispatch) => {
    axiosInstance.post('/school', body)
      .then((res) => {
        console.log(res)
        dispatch(showToast('School Record Created Successfully!'))
      })
      .catch(err => {
        console.log(err)
      })
  }
}