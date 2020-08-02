export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_ERR = "LOGIN_ERR";
export const LOGOUT_USER = "LOGOUT_USER";
export const SET_LOGIN_PROCESS_ON = "SET_LOGIN_PROCESS_ON";
export const DB_POPULATED = "DB_POPULATED";

const initialState = {
  currentUser: null,
  isInitializing: true,
  isLoginOnProcess: false,
  isDbPopulated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.payload,
        isInitializing: false,
        isLoginOnProcess: false,
      };
    case SET_LOGIN_PROCESS_ON:
      return { ...state, isLoginOnProcess: true };
    case LOGIN_ERR:
      return { ...state, isLoginOnProcess: false };
    case LOGOUT_USER:
      return { ...state, currentUser: null };
    case DB_POPULATED:
      return { ...state, currentUser: null, isDbPopulated: true };
    default:
      return state;
  }
};
export default authReducer;
