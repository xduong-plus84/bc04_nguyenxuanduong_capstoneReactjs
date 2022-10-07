import { https, MANHOM } from "./configURL";

export const quanLyNguoiDungSer = {
  layDanhSachBanner: () => {
    let uri = "/api/QuanLyPhim/LayDanhSachBanner";
    return https.get(uri);
  },
  layDanhSachPhim: () => {
    let uri = `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${MANHOM}`;
    return https.get(uri);
  },
};
