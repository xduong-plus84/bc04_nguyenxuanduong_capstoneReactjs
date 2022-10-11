import { combineReducers } from "redux";
import { reducerLoading } from "./reducerLoading";
import { reducerQuanLyDatVe } from "./reducerQuanLyDatVe";
import { reducerQuanLyNguoiDung } from "./reducerQuanLyNguoiDung";
import { reducerQuanLyPhim } from "./reducerQuanLyPhim";
import { reducerQuanLyRap } from "./reducerQuanLyRap";

export const rootReducer = combineReducers({
  reducerQuanLyDatVe,
  reducerQuanLyNguoiDung,
  reducerQuanLyRap,
  reducerQuanLyPhim,
  reducerLoading,
});
