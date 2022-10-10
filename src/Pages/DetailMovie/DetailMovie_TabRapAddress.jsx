import { Tabs } from "antd";
import React from "react";
import { reduceString } from "../../util/reduceString";
import moment from "moment";
import { NavLink } from "react-router-dom";

export default function DetailMovie_TabRapAddress(props) {
  let { cumRapChieu } = props;

  const renderLichChieuPhim = (props) => {
    return (
      <div style={{ height: 300, overflowY: "scroll" }}>
        <p className="text-xl font-bold ">Vui lòng chọn thời gian</p>
        {props.map((arrLichPhim) => {
          let day = moment(arrLichPhim.ngayChieuGioChieu).format("DD-MM-YY");
          let time = moment(arrLichPhim.ngayChieuGioChieu).format("hh:mm");

          return (
            <NavLink to={`/booking-ticket/${props[0].maLichChieu}`}>
              <button className="mr-2 mb-2 p-2 font-semibold border rounded border-gray-800 bg-slate-100 hover:bg-slate-700 hover:text-yellow-100 transition duration-300">
                <span className="text-green-500">{day}</span>
                <span> ~ </span>
                <span className="text-red-500">{time}</span>
              </button>
            </NavLink>
          );
        })}
      </div>
    );
  };

  const items = cumRapChieu.map((rap, index) => {
    return {
      label: (
        <div>
          <p className="text-left uppercase mt-0">
            {reduceString(rap.tenCumRap, 30)}
          </p>
          <p className="text-left">{reduceString(rap.diaChi, 40)}</p>
        </div>
      ),
      key: `item-${index}`,
      children: renderLichChieuPhim(rap.lichChieuPhim),
    };
  });

  return (
    <div>
      <Tabs tabPosition="left" items={items} style={{ height: 300 }} />
    </div>
  );
}
