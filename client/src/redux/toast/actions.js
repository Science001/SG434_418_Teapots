export const SHOW_TOAST = 'SHOW_TOAST';
export const CLOSE_TOAST = 'CLOSE_TOAST';

export const showToast = (message, isError = false) => {
    return {
        type: SHOW_TOAST,
        payload: { message, isError }
    }
}

export const closeToast = () => {
    return {
        type: CLOSE_TOAST,
    }
}