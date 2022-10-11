import { https } from "./configURL";

export const serviceQuanLyDatVe = {
  layDanhSachPhongVe: (maLichChieu) => {
    let uri = `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
    return https.get(uri);
  },
};
