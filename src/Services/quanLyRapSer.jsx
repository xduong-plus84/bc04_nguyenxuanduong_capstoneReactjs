import { https, MANHOM } from "./configURL";

export const quanLyRapSer = {
  layThongTinHeThongRap: () => {
    let uri = "/api/QuanLyRap/LayThongTinHeThongRap";
    return https.get(uri);
  },
  layThongTinCumRapTheoHeThong: (maHeThongRap) => {
    let uri = `/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`;
    return https.get(uri);
  },
  layThongTinLichChieuHeThongRap: (maHeThongRap) => {
    let uri = `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=${MANHOM}`;
    return https.get(uri);
  },
  layThongTinLichChieuPhim: (maPhim) => {
    let uri = `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`;
    return https.get(uri);
  },
};
