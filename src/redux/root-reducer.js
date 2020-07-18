import { combineReducers } from "redux";

import userReducer, { test } from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
});
