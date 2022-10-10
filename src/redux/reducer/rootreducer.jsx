import { combineReducers } from "redux";
import { quanLyPhimReducer } from "./quanLyPhimReducer";
import { quanLyRapReducer } from "./quanLyRap";

export const rootReducer = combineReducers({
  quanLyPhimReducer,
  quanLyRapReducer,
});
