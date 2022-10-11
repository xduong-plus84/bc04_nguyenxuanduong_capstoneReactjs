//rxr

import { serviceLocalStorageUser } from "../../Services/serviceLocalStorageUser";
import {
  DANG_KY,
  DANG_NHAP,
  DANG_XUAT,
} from "../constants/constantsQuanLyNguoiDung";

let initialState = {
  userInfor: serviceLocalStorageUser.user.get(),
  isLoggedIn: false,
};

export let reducerQuanLyNguoiDung = (state = initialState, action) => {
  switch (action.type) {
    case DANG_NHAP: {
      return { ...state, isLoggedIn: true, userInfor: action.payload };
    }
    case DANG_XUAT: {
      return { ...state, isLoggedIn: false };
    }
    case DANG_KY: {
      return { ...state, isLoggedIn: true, userInfor: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};
