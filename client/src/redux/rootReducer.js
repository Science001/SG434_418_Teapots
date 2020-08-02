import { combineReducers } from '@reduxjs/toolkit';

import toastReducer from './toast/reducer'
import authReducer from './auth/reducer';
import reportReducer from './report/reducer'

const rootReducer = combineReducers({
    toast: toastReducer,
    auth: authReducer,
    report: reportReducer,
})

export default rootReducer