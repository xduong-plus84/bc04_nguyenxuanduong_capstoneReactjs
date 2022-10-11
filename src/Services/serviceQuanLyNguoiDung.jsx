import { https } from "./configURL";

export const serviceQuanLyNguoiDung = {
  dangNhap: (thongTinDangNhap) => {
    let uri = "/api/QuanLyNguoiDung/DangNhap";
    return https.post(uri, thongTinDangNhap);
  },
};
