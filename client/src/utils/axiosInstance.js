import axios from 'axios';
import { showToast } from '../redux/toast/actions';
import store from '../redux/store';

const { dispatch } = store;

const axiosInstance = axios.create({
    baseURL: '/api',
});

const requestHandler = (request) => {
    const token = localStorage.getItem('token');
    if (token) {
        request.headers = { Authorization: `Bearer ${token}` };
    }
    return request;
};

const errorHandler = (error) => {
    console.log(error.response);
    if (error.response.status === 504) {
        dispatch(showToast('Request Timed out', true));
    } else {
        dispatch(showToast(error.response.data.message, true));
    }
    return Promise.reject({ ...error });
};

const responseHandler = (response) => {
    return response;
};

axiosInstance.interceptors.request.use((request) => requestHandler(request));
axiosInstance.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
);

export default axiosInstance;