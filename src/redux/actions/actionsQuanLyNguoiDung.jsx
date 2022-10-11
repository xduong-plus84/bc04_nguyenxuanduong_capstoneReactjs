import { DANG_NHAP, DANG_XUAT } from "../constants/constantsQuanLyNguoiDung";

export let dangNhapAction = (thongTinDangNhap) => {
  return {
    type: DANG_NHAP,
    payload: thongTinDangNhap,
  };
};
export let dangXuatAction = () => {
  return {
    type: DANG_XUAT,
  };
};
