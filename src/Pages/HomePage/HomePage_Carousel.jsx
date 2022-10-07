import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import "./myStyle.css";
import { quanLyPhimSer } from "../../Services/quanLyPhimSer";

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
  return (
    <Carousel>
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
              <img
                src={item.hinhAnh}
                className="mx-auto w-3/4 object-cover h-full opacity-1 shadow-2xl"
              />
            </h3>
          </div>
        );
      })}
    </Carousel>
  );
}
