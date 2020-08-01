import axiosInstance from '../../utils/axiosInstance';
import { showToast } from '../toast/actions';

export const SET_LOGIN_PROCESS_ON = 'SET_LOGIN_PROCESS_ON'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_ERR = 'LOGIN_ERR'
export const LOGOUT_USER = 'LOGOUT_USER'

export const setLoginProcessOn = () => {
  return {
    type: SET_LOGIN_PROCESS_ON,
  };
};

export const loginUser = (userObj) => {
  return {
    type: LOGIN_USER,
    payload: userObj,
  };
};

export const loginErr = () => {
  return {
    type: LOGIN_ERR,
  };
};

export const logoutUser = () => {
  return {
    type: LOGOUT_USER,
  };
};

export const whoami = () => {
  return (dispatch) => {
    const token = localStorage.token;
    if (token) {
      axiosInstance
        .get(`/user/me`)
        .then((res) => {
          dispatch(loginUser(res.data.data));
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response);
            if (err.response.data.code === 401) {
              localStorage.removeItem('token');
            }
          }
          dispatch(loginUser(null));
        });
    } else {
      dispatch(loginUser(null));
    }
  };
};

export const loginAction = (body) => {
  return (dispatch) => {
    axiosInstance
      .post('/auth/login', body)
      .then((res) => {
        if (res.data) {
          localStorage.setItem('token', res.data.data.token);
          console.log(res.data.data);
          dispatch(loginUser(res.data.data));
        }
      })
      .catch((err) => {
        if (err.response) {
          dispatch(loginErr());
          dispatch(showToast(err.response.data.message, true));
        }
      });
  };
};
