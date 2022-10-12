import React from "react";
import {
  CheckCircleTwoTone,
  SmileTwoTone,
  HomeOutlined,
} from "@ant-design/icons";
import { history } from "../../App";
import { useNavigate } from "react-router-dom";

export default function BookingTicketReusult() {
  let navigate = useNavigate();
  return (
    <section className="h-screen my-auto py-6 bg-gray-100 text-gray-900">
      <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48 h-full my-auto">
        <h1 className="text-5xl font-bold leading-none text-center flex items-center">
          <CheckCircleTwoTone twoToneColor="#52c41a" />
          <span className="mx-2">Bạn đã đặt vé thành công!</span>
        </h1>
        <p className="text-xl font-medium text-center flex items-center">
          <span className="mx-2">Chúc bạn có trải nghiệm xem phim vui vẻ</span>
          <SmileTwoTone />
        </p>
        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
          <button
            onClick={() => {
              window.location.href = "/";
            }}
            className="px-8 py-3 text-lg font-semibold rounded bg-yellow-600 text-gray-50 flex items-center hover:scale-110 transi duration-300"
          >
            <HomeOutlined />
            <span className="mx-2">Quay lại trang chủ</span>
          </button>
          <button
            onClick={() => {
              navigate(-2);
              // history.back();
            }}
            className="px-8 py-3 text-lg font-normal border rounded bg-gray-800 text-gray-50 border-gray-700 hover:scale-110 transi duration-300"
          >
            Tiếp tục đặt vé
          </button>
        </div>
      </div>
    </section>
  );
}
