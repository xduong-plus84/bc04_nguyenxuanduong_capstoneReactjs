import React, { useEffect, useState } from "react";
import { Col, Divider, Pagination, Row } from "antd";
import ItemMovie from "../../Components/ItemMovie";
import { quanLyPhimSer } from "../../Services/quanLyPhimSer";

export default function HomePage_MovieList() {
  const [danhSachPhim, setDanhSachPhim] = useState([]);
  let [dataRender, setDataRender] = useState([]);

  useEffect(() => {
    quanLyPhimSer
      .layDanhSachPhim()
      .then((res) => {
        let content = res.data.content;
        setDanhSachPhim(content);
        setDataRender(content.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderMovieItem = () => {
    return dataRender.map((item, index) => {
      return (
        <Col key={index} className="gutter-row" span={6}>
          <div style={{ padding: "8px 0" }}>
            <ItemMovie data={item} />
          </div>
        </Col>
      );
    });
  };

  const handleChangePagination = (page, pageSize) => {
    let dataSlice = danhSachPhim?.slice(
      (page - 1) * pageSize,
      (page - 1) * pageSize + pageSize
    );
    setDataRender(dataSlice);
  };

  return (
    <div className="container w-2/3 mx-auto py-5">
      <Divider orientation="left">Danh sách phim</Divider>
      <div className="my-5">
        <button className=" mx-5 self-center px-8 py-3 font-semibold rounded bg-yellow-600 text-gray-50 hover:bg-yellow-700 transition duration-500">
          Phim đang chiếu
        </button>
        <button className="mx-5 self-center px-8 py-3 font-semibold rounded bg-yellow-600 text-gray-50 hover:bg-yellow-700 transition duration-500">
          Phim sắp chiếu
        </button>
      </div>
      <Pagination
        defaultCurrent={2}
        total={danhSachPhim.length == 0 ? 1 : danhSachPhim.length}
        pageSize={4}
        onChange={(page, pageSize) => {
          handleChangePagination(page, pageSize);
        }}
      />
      <Row className="my-4" gutter={[16, 24]}>
        {renderMovieItem()}
      </Row>
    </div>
  );
}
