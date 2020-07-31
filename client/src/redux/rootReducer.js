import { combineReducers } from '@reduxjs/toolkit';

import toastReducer from './toast/reducer'

const rootReducer = combineReducers({
    toast: toastReducer,
})

export default rootReducer