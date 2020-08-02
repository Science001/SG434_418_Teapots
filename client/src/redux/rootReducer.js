import { combineReducers } from "@reduxjs/toolkit";

import toastReducer from "./toast/reducer";
import authReducer from "./auth/reducer";
import reportReducer from "./report/reducer";
import dataEntryReducer from "./dataEntry/reducer";

const rootReducer = combineReducers({
  toast: toastReducer,
  auth: authReducer,
  report: reportReducer,
  dataEntry: dataEntryReducer,
});

export default rootReducer;
