import React, { useEffect, useState } from "react";
import { Col, Divider, Pagination, Row } from "antd";
import ItemMovie from "../../Components/ItemMovie";
import { quanLyPhimSer } from "../../Services/quanLyPhimSer";
import { useSelector } from "react-redux";

// slick react
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function HomePage_MovieList() {
  const [currentPage, setCurrentPage] = useState(1);
  // const { arrPhim } = useSelector((state) => state.quanLyPhimSer);
  // console.log("arrPhim: ", arrPhim);
  const [danhSachPhim, setDanhSachPhim] = useState([]);

  useEffect(() => {
    quanLyPhimSer
      .layDanhSachPhim()
      .then((res) => {
        // console.log("res: ", res);
        setDanhSachPhim(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderMovieItem = () => {
    return danhSachPhim.map((item, index) => {
      return (
        <Col key={index} className="gutter-row" span={6}>
          <div style={{ padding: "8px 0" }}>
            <ItemMovie data={item} />
          </div>
        </Col>
      );
    });
  };
  return (
    <div className="container w-2/3 mx-auto py-5">
      <Divider orientation="left">Danh sach phim</Divider>
      <Row gutter={[16, 24]}>{renderMovieItem()}</Row>
      {/* <Pagination
        defaultCurrent={currentPage}
        total={10}
        pageSize={5}
        onChange={(page, pageSize) => {
          console.log("pageSize: ", pageSize);
          setCurrentPage(page);
          setDanhSachPhim(danhSachPhim.splice(page * pageSize, pageSize));
          console.log("danhSachPhim: ", danhSachPhim);
        }}
      />
      <p>Đang ở trang {currentPage}</p> */}
    </div>
  );
}
