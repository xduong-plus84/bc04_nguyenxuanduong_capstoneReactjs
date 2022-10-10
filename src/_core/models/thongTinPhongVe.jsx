//file này để thay cho cái optional changning ( toán tử '?' )

export class ThongTinLichChieu {
  thongTinPhim = new ThongTinPhim();
  danhSachGhe = new Ghe();
}

class ThongTinPhim {
  maLichChieu = "";
  tenCumRap = "";
}

export class Ghe {
  maGhe = "";
  tenGhe = "";
  maRap = "";
  loaiGhe = "";
  stt = "";
  giaVe = "";
  daDat = "";
  taiKhoanNguoiDat = "";
}

// bên component reducer thì deflaut = new ThongTinLichChieu()
