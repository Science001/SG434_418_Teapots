import axiosInstance from '../../utils/axiosInstance';
import { SET_LOGIN_PROCESS_ON, LOGIN_USER, LOGIN_ERR, LOGOUT_USER } from "./reducer";

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
        .then(res => {
          dispatch(loginUser(res.data.user));
        })
        .catch(err => {
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

    dispatch(setLoginProcessOn());
    axiosInstance
      .post('/auth/login', body)
      .then((res) => {
        if (res.data) {
          localStorage.setItem('token', res.data.token);
          console.log(res.data);
          dispatch(loginUser(res.data));
        }
      })
      .catch((err) => {
        if (err.response) {
          dispatch(loginErr());
        }
      });
  };
};

export const logoutAction = () => {
  return (dispatch) => {
    localStorage.removeItem('token')
    dispatch(logoutUser())
  }
}