import { Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { quanLyRapSer } from "../../Services/quanLyRapSer";
import { reduceString } from "../../util/reduceString";
import HomePage_TabRapLichChieu from "./HomePage_TabRapLichChieu";

export default function HomePage_TabRapAddress(props) {
  let { maHeThongRap } = props;

  const [arrRap, setArrRap] = useState([]);

  useEffect(() => {
    quanLyRapSer
      .layThongTinCumRapTheoHeThong(maHeThongRap)
      .then((res) => {
        setArrRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderLichChieuPhim = (props) => {
    let maCumRap = props;
    return (
      <HomePage_TabRapLichChieu
        maCumRap={maCumRap}
        maHeThongRap={maHeThongRap}
      />
    );
  };

  const items = arrRap.map((rap, index) => {
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
      children: renderLichChieuPhim(rap.maCumRap),
    };
  });
  return (
    <div>
      <Tabs tabPosition="left" items={items} style={{ height: 500 }} />
    </div>
  );
}
