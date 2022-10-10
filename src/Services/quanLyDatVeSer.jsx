import { https } from "./configURL";

export const quanLyDatVeSer = {
  layDanhSachPhongVe: (maLichChieu) => {
    let uri = `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
    return https.get(uri);
  },
};
