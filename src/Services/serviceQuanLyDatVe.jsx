import { https } from "./configURL";
import { serviceLocalStorageUser } from "./serviceLocalStorageUser";

export const serviceQuanLyDatVe = {
  datVe: (thongTinDatGhe) => {
    let uri = `/api/QuanLyDatVe/DatVe`;
    return https.post(uri, thongTinDatGhe, {
      headers: {
        Authorization:
          "Bearer " + serviceLocalStorageUser.user.get()?.accessToken,
      },
    });
  },
  layDanhSachPhongVe: (maLichChieu) => {
    let uri = `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
    return https.get(uri);
  },
};
