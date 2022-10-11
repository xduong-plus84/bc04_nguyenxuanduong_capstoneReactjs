import { CHON_GHE } from "../constants/constantsQuanLyRap";

export let chonGheAction = (ghe) => {
  return {
    type: CHON_GHE,
    payload: ghe,
  };
};
