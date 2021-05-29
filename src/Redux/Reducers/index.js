import { combineReducers } from "redux";
import { LaunchReducer } from "./Dashboard/Launches/LaunchReducer";
import { DashboardReducer } from "./Dashboard/DashboardReducer";
import { NavReducer } from "./NavReducer";
import { UserReducer } from "./UserReducer";

export const rootReducer = combineReducers({
  NavReducer,
  LaunchReducer,
  DashboardReducer,
  UserReducer,
});
