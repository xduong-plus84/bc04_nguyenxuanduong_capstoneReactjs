//rxr

let initialState = {
  arrPhim: [],
  arrPhimRender: [],
};

export let reducerQuanLyDatVe = (state = initialState, action) => {
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
