//rxr

import { serviceLocalStorageUser } from "../../Services/serviceLocalStorageUser";
import {
  DANG_KY,
  DANG_NHAP,
  DANG_XUAT,
} from "../constants/constantsQuanLyNguoiDung";

let initialState = {
  userInfor: serviceLocalStorageUser.user.get(),
};

export let reducerQuanLyNguoiDung = (state = initialState, action) => {
  switch (action.type) {
    case DANG_NHAP: {
      return { ...state, userInfor: action.payload };
    }
    case DANG_XUAT: {
      return { ...state, userInfor: null };
    }
    case DANG_KY: {
      return { ...state, userInfor: action.payload };
    }
    default: {
      return { ...state };
    }
  }
};
