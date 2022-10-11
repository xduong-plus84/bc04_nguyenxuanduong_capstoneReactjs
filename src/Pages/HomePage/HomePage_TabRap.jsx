import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { serviceQuanLyRap } from "../../Services/serviceQuanLyRap";
import HomePage_TabRapAddress from "./HomePage_TabRapAddress";
import { useDispatch } from "react-redux";
import {
  setLoadingOffAction,
  setLoadingOnAction,
} from "../../redux/actions/actionLoading";

export default function HomePage_TabRap() {
  let dispatch = useDispatch();
  const [heThongRap, setHeThongRap] = useState([]);

  useEffect(() => {
    dispatch(setLoadingOnAction());
    serviceQuanLyRap
      .layThongTinHeThongRap()
      .then((res) => {
        setHeThongRap(res.data.content);
        dispatch(setLoadingOffAction());
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoadingOffAction());
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
