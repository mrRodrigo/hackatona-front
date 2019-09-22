import { UserReducers } from "./UserReducer";


import { combineReducers } from "redux";

export const Reducers = combineReducers({
  userReducer: UserReducers,
});