import React, { useEffect, useState } from "react";
import { Card, Col, Divider, Pagination, Row } from "antd";
import ItemMovie from "../../Components/ItemMovie";
import { quanLyPhimSer } from "../../Services/quanLyPhimSer";
import { useSelector } from "react-redux";

// slick react
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function HomePage_MovieList() {
  // // const { arrPhim } = useSelector((state) => state.quanLyPhimSer);
  // // console.log("arrPhim: ", arrPhim);
  const [danhSachPhim, setDanhSachPhim] = useState([]);
  let [dataRender, setDataRender] = useState([]);

  useEffect(() => {
    quanLyPhimSer
      .layDanhSachPhim()
      .then((res) => {
        // console.log("res: ", res);
        let content = res.data.content;
        setDanhSachPhim(content);
        setDataRender(content.slice(0, 4));
        // console.log("res.data.content: ", res.data.content);
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

  // let data = [
  //   { title: "Card title1", value: "Card content1" },
  //   { title: "Card title2", value: "Card content2" },
  //   { title: "Card title3", value: "Card content3" },
  //   { title: "Card title4", value: "Card content4" },
  //   { title: "Card title5", value: "Card content5" },
  //   { title: "Card title6", value: "Card content6" },
  //   { title: "Card title7", value: "Card content7" },
  //   { title: "Card title8", value: "Card content8" },
  //   { title: "Card title9", value: "Card content9" },
  //   { title: "Card title10", value: "Card content10" },
  //   { title: "Card title11", value: "Card content11" },
  //   { title: "Card title12", value: "Card content12" },
  //   { title: "Card title13", value: "Card content13" },
  //   { title: "Card title14", value: "Card content14" },
  //   { title: "Card title15", value: "Card content15" },
  // ];

  const handleChangePagination = (page, pageSize) => {
    // setPageCurrent(page);
    let dataSlice = danhSachPhim?.slice(
      (page - 1) * pageSize,
      (page - 1) * pageSize + pageSize
    );
    setDataRender(dataSlice);
  };

  // const renderItem = () => {
  //   return dataRender.map((val) => (
  //     <Card
  //       title={val.title}
  //       extra={<a href="#">More</a>}
  //       style={{ width: 300 }}
  //     >
  //       <p>{val.value}</p>
  //     </Card>
  //   ));
  // };

  return (
    <div className="container w-2/3 mx-auto py-5">
      {/* <Divider orientation="left">Danh sach phim</Divider> */}
      <Row className="my-4" gutter={[16, 24]}>
        {renderMovieItem()}
      </Row>

      <Pagination
        defaultCurrent={1}
        total={danhSachPhim.length}
        pageSize={4}
        onChange={(page, pageSize) => {
          handleChangePagination(page, pageSize);
        }}
      />
    </div>
  );
}
