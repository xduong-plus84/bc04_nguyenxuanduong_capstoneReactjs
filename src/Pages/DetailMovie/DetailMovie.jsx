import { Rate, Tabs } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import { serviceQuanLyRap } from "../../Services/serviceQuanLyRap";
import DetailMovie_TabRapAddress from "./DetailMovie_TabRapAddress";
import { useDispatch } from "react-redux";
import {
  setLoadingOffAction,
  setLoadingOnAction,
} from "../../redux/actions/actionLoading";
import ModalTrailer from "../../Components/ModalTrailer";

export default function DetailMovie(props) {
  let dispatch = useDispatch();

  let { id } = useParams();

  let [phim, setPhim] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(setLoadingOnAction());
    serviceQuanLyRap
      .layThongTinLichChieuPhim(id)
      .then((res) => {
        let content = res.data.content;
        setPhim(content);
        dispatch(setLoadingOffAction());
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoadingOffAction());
      });
  }, []);

  let renderThongTinPhim = () => {
    return (
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
        <div>
          <button
            onClick={() => {
              return (
                <div>
                  <ModalTrailer />;
                </div>
              );
            }}
            className="mt-4 mr-2 mb-2 py-2 px-8 font-semibold border rounded-xl text-white bg-red-700 hover:bg-red-500 transition duration-300"
          >
            Trailler
          </button>
          <a href={phim.trailer} target="blank">
            {phim.trailer}
          </a>
        </div>
        <a
          href="#datve"
          className="mt-4 mr-2 mb-2 py-2 px-8 font-semibold border rounded-xl text-white bg-red-700 hover:bg-red-500 transition duration-300"
        >
          Đặt vé
        </a>
      </div>
    );
  };

  let renderTraier = () => {
    return (
      <a href={phim.trailer} target="blank">
        {phim.trailer}
      </a>
    );
  };

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
          className="px-8 py-3 font-bold text-base rounded-xl bg-yellow-600 text-white hover:scale-110 transition duration-300"
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
          className="px-8 py-3 font-bold text-base rounded-xl bg-yellow-600 text-white hover:scale-110 transition duration-300"
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
          className="px-8 py-3 font-bold text-base rounded-xl bg-yellow-600 text-white hover:scale-110 transition duration-300"
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
        <div className="flex">
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
              <span className="font-semibold">Khởi chiếu: </span>
              <span>{moment(phim.ngayChieuGioChieu).format("DD-MM-YY")}</span>
              <span> ~ </span>
              <span>{moment(phim.ngayChieuGioChieu).format("hh:mm")}</span>
            </p>
            <div></div>
            <a
              href="#datve"
              className="mt-4 mr-2 mb-2 py-2 px-8 font-semibold border rounded-xl text-white bg-red-700 hover:scale-110 hover:text-white transition duration-300"
            >
              Đặt vé
            </a>
          </div>
        </div>
        <div className="trailer my-10 flex justify-center">
          <iframe
            width="700"
            height="400"
            src={phim.trailer}
            title="YouTube video player"
            frameborder="0"
            rel="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <Tabs
          centered
          items={items}
          style={{ maxHeight: 700 }}
          id="datve"
          className="bg-white rounded-xl"
        />
      </div>
    </div>
  );
}
