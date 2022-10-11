//rxr

let initialState = {
  //   arrPhim: dataPhim,
  arrPhim: [],
  arrPhimRender: [],
};

export let reducerQuanLyPhim = (state = initialState, action) => {
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
