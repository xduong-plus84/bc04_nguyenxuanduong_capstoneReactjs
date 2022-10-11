import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "antd";
import "./myStyle.css";
import { serviceQuanLyPhim } from "../../Services/serviceQuanLyPhim";
import {
  RightOutlined,
  LeftOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {
  setLoadingOffAction,
  setLoadingOnAction,
} from "../../redux/actions/actionLoading";

const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
};

export default function HomePage_Carousel() {
  let dispatch = useDispatch();

  const [dataCarousel, setDataCarousel] = useState([]);

  useEffect(() => {
    dispatch(setLoadingOnAction());
    serviceQuanLyPhim
      .layDanhSachBanner()
      .then((res) => {
        setDataCarousel(res.data.content);
        dispatch(setLoadingOffAction());
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoadingOffAction());
      });
  }, []);

  const ref = useRef();
  let slideTruoc = () => {
    ref.current.next();
  };
  let slideSau = () => {
    ref.current.prev();
  };

  return (
    <div className="relative">
      <LeftOutlined
        className="arrowStyle arrowLeft"
        style={{ left: "5%", color: "gray" }}
        onClick={() => slideSau()}
      />

      <RightOutlined
        className="arrowStyle arrowRight"
        style={{ right: "5%", color: "gray" }}
        onClick={() => slideTruoc()}
      />
      <Carousel draggable autoplay ref={ref}>
        {dataCarousel.map((item, index) => {
          return (
            <div key={index}>
              <h3
                style={{
                  ...contentStyle,
                  // backgroundImage: `url(${item.hinhAnh})`,
                }}
                className="bg-gradient-to-b from-white to-yellow-700 pb-8 shadow-yellow-700"
              >
                <PlayCircleOutlined
                  className="arrowStyle pauseStyle"
                  style={{ color: "gray" }}
                  onClick={() => {
                    console.log(index);
                  }}
                />
                <img
                  src={item.hinhAnh}
                  className="mx-auto w-3/4 object-cover h-full opacity-1 shadow-2xl rounded-lg grayscale-[50%] invert-[.05] "
                />
              </h3>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
