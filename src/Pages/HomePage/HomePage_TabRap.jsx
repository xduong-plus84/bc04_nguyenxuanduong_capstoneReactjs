import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { quanLyRapSer } from "../../Services/quanLyRapSer";
import HomePage_TabRapAddress from "./HomePage_TabRapAddress";

export default function HomePage_TabRap() {
  const [heThongRap, setHeThongRap] = useState([]);

  useEffect(() => {
    quanLyRapSer
      .layThongTinHeThongRap()
      .then((res) => {
        // console.log(res);
        setHeThongRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderRapAddress = (props) => {
    let { maHeThongRap } = props;
    return <HomePage_TabRapAddress maHeThongRap={maHeThongRap} />;
  };

  const itemsBrand = heThongRap.map((rap, index) => {
    return {
      label: <img src={rap.logo} style={{ width: "50px", heigh: "50px" }} />,
      key: `item-${index}`,
      children: renderRapAddress(rap),
    };
  });

  return (
    <div className="container w-2/3 mx-auto py-5">
      <Tabs tabPosition="left" items={itemsBrand} style={{ height: 500 }} />
    </div>
  );
}
