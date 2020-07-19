import { combineReducers } from "redux";

import userReducer, { test } from "./user/user.reducer";
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
