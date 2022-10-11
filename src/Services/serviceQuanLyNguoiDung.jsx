import { https } from "./configURL";

export const serviceQuanLyNguoiDung = {
  dangNhap: (thongTinDangNhap) => {
    let uri = "/api/QuanLyNguoiDung/DangNhap";
    return https.post(uri, thongTinDangNhap);
  },
  dangKy: (thongTinDangKy) => {
    let uri = "/api/QuanLyNguoiDung/DangKy";
    return https.post(uri, thongTinDangKy);
  },
};
