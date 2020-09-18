import { combineReducers } from "redux";

import userReducer from "./user/reducer";
import cartReducer from "./cart/reducer";
import directoryReducer from "./directory/reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
});
