const { SET_LOGIN_PROCESS_ON, LOGIN_USER, LOGIN_ERR, LOGOUT_USER } = require("./actions");

const initialState = {
    currentUser: null,
    isLoginOnProcess: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_PROCESS_ON:
            return { ...state, isLoginOnProscess: true };
        case LOGIN_USER:
            return {
                ...state,
                currentUser: action.payload,
                isLoginOnProcess: false,
            };
        case LOGIN_ERR:
            return { ...state, isLoginOnProcess: false };
        case LOGOUT_USER:
            return { ...state, currentUser: null };
        default:
            return state;
    }
}
export default authReducer