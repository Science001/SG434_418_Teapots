import { combineReducers } from '@reduxjs/toolkit';

import toastReducer from './toast/reducer'
import authReducer from './auth/reducer';

const rootReducer = combineReducers({
    toast: toastReducer,
    auth: authReducer
})

export default rootReducer