//rxr

import { serviceLocalStorageUser } from "../../Services/serviceLocalStorageUser";
import { DANG_NHAP, DANG_XUAT } from "../constants/constantsQuanLyNguoiDung";

let initialState = {
  userInfor: serviceLocalStorageUser.user.get(),
  isLoggedIn: false,
};

export let reducerQuanLyNguoiDung = (state = initialState, action) => {
  switch (action.type) {
    case DANG_NHAP: {
      return { ...state, userInfor: action.payload, isLoggedIn: true };
    }
    case DANG_XUAT: {
      return { ...state, isLoggedIn: false };
    }
    default: {
      return { ...state };
    }
  }
};
