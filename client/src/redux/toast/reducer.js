import { SHOW_TOAST, CLOSE_TOAST } from "./actions";

const initialState = {
    toastVisibility: false,
    message: '',
    isError: false,
};

const toastReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_TOAST:
            return {
                ...state,
                toastVisibility: true,
                message: action.payload.message,
                isError: action.payload.isError,
            };
        case CLOSE_TOAST:
            return {
                ...state,
                toastVisibility: false,
            };
        default:
            return state;
    }
};

export default toastReducer;