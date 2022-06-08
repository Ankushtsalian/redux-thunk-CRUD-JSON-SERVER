import { combineReducers } from "redux";
import userReducer from "./reducer";

const rootReducer = combineReducers({
  users: userReducer,
});
