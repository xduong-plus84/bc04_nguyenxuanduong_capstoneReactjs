import { Rate, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { quanLyRapSer } from "../../Services/quanLyRapSer";
import DetailMovie_TabRapAddress from "./DetailMovie_TabRapAddress";

export default function DetailMovie(props) {
  let { id } = useParams();

  let [phim, setPhim] = useState({});

  useEffect(() => {
    quanLyRapSer
      .layThongTinLichChieuPhim(id)
      .then((res) => {
        let content = res.data.content;
        setPhim(content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderRapAddress = (props) => {
    let { cumRapChieu } = props;
    return <DetailMovie_TabRapAddress cumRapChieu={cumRapChieu} />;
  };

  const itemsBrand = phim.heThongRapChieu?.map((rap, index) => {
    return {
      label: <img src={rap.logo} style={{ width: "50px", heigh: "50px" }} />,
      key: `item-${index}`,
      children: renderRapAddress(rap),
    };
  });

  const items = [
    {
      label: (
        <button
          type="button"
          className="px-8 py-3 font-bold text-base rounded-xl bg-yellow-600 text-white hover:bg-white hover:text-yellow-600 transition duration-300"
        >
          Lịch chiếu
        </button>
      ),
      key: "item-1",
      children: (
        <Tabs tabPosition="left" items={itemsBrand} style={{ height: 300 }} />
      ),
    },
    {
      label: (
        <button
          type="button"
          className="px-8 py-3 font-bold text-base rounded-xl bg-yellow-600 text-white hover:bg-white hover:text-yellow-600 transition duration-300"
        >
          Thông tin
        </button>
      ),
      key: "item-2",
      children: "Thông tin đang được cập nhật ...",
    },
    {
      label: (
        <button
          type="button"
          className="px-8 py-3 font-bold text-base rounded-xl bg-yellow-600 text-white hover:bg-white hover:text-yellow-600 transition duration-300"
        >
          Bình luận
        </button>
      ),
      key: "item-3",
      children: "Bình luận đang được cập nhật ...",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-700 pb-8 shadow-zinc-700">
      <div className="container w-2/3 mx-auto  mt-20 min-h-fit">
        <div className="flex mb-20">
          <img
            src={phim.hinhAnh}
            className="object-cover object-center rounded-md w-48 h-68"
          />
          <div className="ml-10 text-left flex flex-col items-start justify-center">
            <p className="text-2xl font-bold mb-0"> {phim.tenPhim}</p>
            <Rate disabled allowHalf value={phim.danhGia / 2} />
            <p className="mt-2 mb-0 text-base">
              <span className="font-semibold">Đạo diễn: </span>
            </p>
            <p className="mt-2 mb-0 text-base">
              <span className="font-semibold">Diễn viên: </span>
            </p>
            <p className="mt-2 mb-0 text-base">
              <span className="font-semibold">Mô tả: </span>
              {phim.moTa}
            </p>
            <p className="mt-2 mb-0 text-base">
              <span className="font-semibold">Thời gian chiếu: </span>
              <span>{moment(phim.ngayChieuGioChieu).format("DD-MM-YY")}</span>
              <span> ~ </span>
              <span>{moment(phim.ngayChieuGioChieu).format("hh:mm")}</span>
            </p>
            <p>
              <a href={phim.trailer} target="blank">
                {phim.trailer}
              </a>
            </p>
            <a
              href="#datve"
              className="mt-4 mr-2 mb-2 py-2 px-8 font-semibold border rounded-xl text-white bg-red-700 hover:bg-red-500 transition duration-300"
            >
              Đặt vé
            </a>
          </div>
        </div>
        <Tabs centered items={items} style={{ maxHeight: 700 }} id="datve" />
      </div>
    </div>
  );
}
