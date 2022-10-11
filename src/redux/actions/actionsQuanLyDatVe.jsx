import { CHON_GHE } from "../constants/quanLyRap";

export let chonGheAction = (ghe) => {
  return {
    type: CHON_GHE,
    payload: ghe,
  };
};
