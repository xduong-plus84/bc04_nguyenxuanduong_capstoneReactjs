//rxr

import { dataPhim } from "../../assets/data";

let initialState = {
  //   arrPhim: dataPhim,
  arrPhim: [],
  arrPhimRender: [],
};

export let quanLyPhimReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GiamSoLuong": {
      state.soLuong -= action.payload;
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
