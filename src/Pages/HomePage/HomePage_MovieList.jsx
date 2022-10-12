import React, { useEffect, useState } from "react";
import { Col, Divider, Pagination, Row } from "antd";
import ItemMovie from "../../Components/ItemMovie";
import { serviceQuanLyPhim } from "../../Services/serviceQuanLyPhim";
import { useDispatch } from "react-redux";
import {
  setLoadingOffAction,
  setLoadingOnAction,
} from "../../redux/actions/actionLoading";

export default function HomePage_MovieList() {
  let dispatch = useDispatch();

  const [danhSachPhim, setDanhSachPhim] = useState([]);
  let [dataRender, setDataRender] = useState([]);

  useEffect(() => {
    dispatch(setLoadingOnAction());
    serviceQuanLyPhim
      .layDanhSachPhim()
      .then((res) => {
        let content = res.data.content;
        setDanhSachPhim(content);
        setDataRender(content.slice(0, 4));
        dispatch(setLoadingOffAction());
      })
      .catch((err) => {
        dispatch(setLoadingOffAction());
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
      {/* <div className="my-5">
        <button className=" mx-5 self-center px-8 py-3 font-semibold rounded bg-yellow-600 text-gray-50 hover:bg-yellow-700 transition duration-500">
          Phim đang chiếu
        </button>
        <button className="mx-5 self-center px-8 py-3 font-semibold rounded bg-yellow-600 text-gray-50 hover:bg-yellow-700 transition duration-500">
          Phim sắp chiếu
        </button>
      </div> */}
      <Pagination
        defaultCurrent={2}
        total={danhSachPhim.length == 0 ? 1 : danhSachPhim.length}
        defaultPageSize={4}
        showSizeChanger
        pageSizeOptions={[4, 8, 16, 100]}
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
