import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "antd";
import "./myStyle.css";
import { quanLyPhimSer } from "../../Services/quanLyPhimSer";
import {
  RightOutlined,
  LeftOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
};

// const arrowStyle = {
//   fontSize: "60px",
//   color: "black",
//   position: "absolute",
//   top: "40%",
//   zIndex: "10",
// };

export default function HomePage_Carousel() {
  const [dataCarousel, setDataCarousel] = useState([]);

  useEffect(() => {
    quanLyPhimSer
      .layDanhSachBanner()
      .then((res) => {
        setDataCarousel(res.data.content);
      })
      .catch((err) => {
        console.log(err);
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
