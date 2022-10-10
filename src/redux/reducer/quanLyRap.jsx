//rxr

import { CHON_GHE } from "../constants/quanLyRap";

let initialState = {
  arrGheChon: [],
};

export let quanLyRapReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHON_GHE: {
      let cloneArrGheChon = [...state.arrGheChon];
      let ghe = action.payload;

      let indexGheChon = cloneArrGheChon.findIndex(
        (gheChon) => gheChon.maGhe == ghe.maGhe
      );
      indexGheChon == -1
        ? cloneArrGheChon.push(ghe)
        : cloneArrGheChon.splice(indexGheChon, 1);

      return { ...state, arrGheChon: cloneArrGheChon };
    }
    default: {
      return { ...state };
    }
  }
};
