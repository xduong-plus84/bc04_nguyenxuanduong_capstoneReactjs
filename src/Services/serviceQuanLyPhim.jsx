import { https, MANHOM } from "./configURL";

export const serviceQuanLyPhim = {
  layDanhSachBanner: () => {
    let uri = "/api/QuanLyPhim/LayDanhSachBanner";
    return https.get(uri);
  },
  layDanhSachPhim: () => {
    let uri = `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${MANHOM}`;
    return https.get(uri);
  },
  layThongTinPhim: (maPhim) => {
    let uri = `/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`;
    return https.get(uri);
  },
};
