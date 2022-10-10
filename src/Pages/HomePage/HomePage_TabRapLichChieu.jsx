import React, { useEffect, useState } from "react";
import { quanLyRapSer } from "../../Services/quanLyRapSer";
import moment from "moment";
import { NavLink } from "react-router-dom";

export default function HomePage_TabRapLichChieu(props) {
  let { maCumRap, maHeThongRap } = props;
  //   console.log("maCumRap: ", maCumRap);

  const [arrPhim, setArrPhim] = useState([]);

  useEffect(() => {
    quanLyRapSer
      .layThongTinLichChieuHeThongRap(maHeThongRap)
      .then((res) => {
        // console.log("res: ", res);
        // setarrayPhim(res.data.content.)
        let dataNeed = res.data.content[0].lstCumRap.filter(
          (item) => item.maCumRap === maCumRap
        );
        setArrPhim(dataNeed[0].danhSachPhim);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderPhim = () => {
    return arrPhim.map((item, index) => {
      return (
        <div key={index} className="flex justify-start mb-2">
          <img
            src={item.hinhAnh}
            className="object-cover object-center mr-2 w-24"
          />
          <div className="text-left">
            <p className="font-bold text-xl">{item.tenPhim}</p>

            {item.lstLichChieuTheoPhim.slice(0, 6).map((arrLichPhim) => {
              let day = moment(arrLichPhim.ngayChieuGioChieu).format(
                "DD-MM-YY"
              );
              let time = moment(arrLichPhim.ngayChieuGioChieu).format("hh:mm");

              return (
                <NavLink to={`/booking-ticket/${arrLichPhim.maLichChieu}`}>
                  <button className="mr-2 mb-2 p-2 font-semibold border rounded border-gray-800 bg-slate-100 hover:bg-slate-700 hover:text-yellow-100 transition duration-300">
                    <span className="text-green-500">{day}</span>
                    <span> ~ </span>
                    <span className="text-red-500">{time}</span>
                  </button>
                </NavLink>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return <div style={{ height: 500, overflowY: "scroll" }}>{renderPhim()}</div>;
}
