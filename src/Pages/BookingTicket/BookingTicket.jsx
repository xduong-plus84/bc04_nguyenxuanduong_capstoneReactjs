import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { serviceQuanLyDatVe } from "../../Services/serviceQuanLyDatVe";
import manHinh from "./manHinh.module.css";
import gheStyle from "./ghe.module.css";
import { useDispatch, useSelector } from "react-redux";
import { chonGheAction } from "../../redux/actions/actionsQuanLyRap";
import {
  setLoadingOffAction,
  setLoadingOnAction,
} from "../../redux/actions/actionLoading";

export default function BookingTicket() {
  let dispatch = useDispatch();

  let { maLichChieu } = useParams();

  let [phongVe, setPhongVe] = useState({ thongTinPhim: {}, danhSachGhe: [] });
  let { thongTinPhim, danhSachGhe } = phongVe;

  useEffect(() => {
    dispatch(setLoadingOnAction());
    serviceQuanLyDatVe
      .layDanhSachPhongVe(maLichChieu)
      .then((res) => {
        let result = res.data.content;
        setPhongVe(result);
        dispatch(setLoadingOffAction());
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoadingOffAction());
      });
  }, []);

  let { arrGheChon } = useSelector((state) => state.reducerQuanLyRap);
  console.log("arrGheChon: ", arrGheChon);

  const handleChonGhe = (props) => {
    let action = chonGheAction(props);
    dispatch(action);
  };

  let renderMotaGhe = () => {
    return (
      <div className="flex justify-center">
        <div className="gheThuong mx-5">
          <button className={`${gheStyle["gheThuong"]}`}></button>
          <br />
          <span>Ghế trống</span>
        </div>
        <div className="gheVip mx-5">
          <button className={`${gheStyle["gheVip"]}`}></button>
          <br />
          <span>Ghế Vip</span>
        </div>
        <div className="gheDaDat mx-5">
          <button className={`${gheStyle["gheDaDat"]}`}></button>
          <br />
          <span>Ghế đã đặt</span>
        </div>
        <div className="gheDangChon mx-5">
          <button className={`${gheStyle["gheDangChon"]}`}></button>
          <br />
          <span>Ghế đang chọn</span>
        </div>
      </div>
    );
  };

  let renderLayoutGhe = () => {
    return danhSachGhe?.map((ghe, index) => {
      let classNameGhe = "null";

      let { daDat, loaiGhe } = ghe;
      loaiGhe == "Thuong"
        ? (classNameGhe = "gheThuong")
        : (classNameGhe = "gheVip");
      if (daDat) {
        classNameGhe = "gheDaDat";
      }
      // render gheDangChon
      let indexGheChon = arrGheChon.findIndex(
        (gheChon) => gheChon.maGhe === ghe.maGhe
      );
      if (indexGheChon != -1) {
        classNameGhe = "gheDangChon";
      }

      return (
        <Fragment key={index}>
          <button
            onClick={() => handleChonGhe(ghe)}
            className={`${gheStyle[classNameGhe]}`}
          >
            {index + 1}
          </button>
          {(index + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  let renderThongTin = () => {
    let { tenPhim, tenCumRap, tenRap, diaChi, ngayChieu, gioChieu } =
      thongTinPhim;
    return (
      <div className="bg-white h-full w-3/12 p-5 shadow-xl shadow-black flex flex-col justify-between">
        <div className="info pt-10">
          <div className="thongTinPhim">
            <p className="text-2xl font-bold">{tenPhim}</p>
            <div>
              <span>Ngày chiếu: </span>
              <span className="font-bold text-red-500">{ngayChieu}</span>
            </div>
            <div>
              <span>Giờ chiếu: </span>
              <span className="font-bold text-red-500">{gioChieu}</span>
            </div>
          </div>
          <div className="thongTinRap mt-5 divide-y">
            <div className="flex justify-between py-4">
              <h1>Cụm rạp:</h1>
              <span>{tenCumRap}</span>
            </div>
            <div className="flex justify-between py-4">
              <h1>Địa chỉ:</h1>
              <span>{diaChi}</span>
            </div>
            <div className="flex justify-between py-4">
              <h1>Rap:</h1>
              <span>{tenRap}</span>
            </div>
            <div className="flex justify-between py-4">
              <h1>Ghế chọn:</h1>
              <div className="renderTenGhe">
                {arrGheChon
                  .sort((a, b) => a.tenGhe - b.tenGhe)
                  .map((item) => (
                    <span className="text-green-500 font-bold mx-1">
                      Ghế {item.tenGhe},
                    </span>
                  ))}
              </div>
            </div>
            <div className="flex justify-between items-center py-4">
              <h1>Thành tiền:</h1>
              <span className="text-green-500 font-bold text-2xl">
                {arrGheChon
                  .reduce((tongTien, ghe) => (tongTien += ghe.giaVe), 0)
                  .toLocaleString()}
                <span className="ml-1">vnd</span>
              </span>
            </div>
          </div>
        </div>
        <button className="text-white font-bold border-solid border-2 border-transparent bg-red-500 w-full py-3 fond-bold text-2xl rounded-xl hover:bg-transparent hover:text-red-500 hover:border-red-500 transition duration-300">
          Đặt vé
        </button>
      </div>
    );
  };
  return (
    <div className="flex w-screen h-screen">
      <div className=" h-full w-9/12">
        <div className="h-2 bg-black mt-5 w-3/4 mx-auto"></div>
        <div className={`${manHinh["trapezoid"]} mx-auto`}></div>
        <div className="h-4 font-bold text-xl">Màn hình</div>

        <div className="layoutSeats mt-5">{renderLayoutGhe()}</div>
        <div className="moTaGhe">{renderMotaGhe()}</div>
      </div>
      {renderThongTin()}
    </div>
  );
}
