import React from "react";
import { NavLink } from "react-router-dom";

export default function ItemMovie(props) {
  let { data } = props;
  // console.log("data: ", data);
  return (
    <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
      <img
        src={data.hinhAnh}
        alt
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <p className="text-xl font-semibold tracking-wide h-8 flex items-center justify-center">
            {data.tenPhim.length > 17 ? (
              <span>{data.tenPhim.slice(0, 17)}...</span>
            ) : (
              <span>{data.tenPhim}</span>
            )}
          </p>
          <p className="text-gray-800 h-12 flex items-center justify-center">
            {data.moTa.length > 50 ? (
              <span>{data.moTa.slice(0, 50)}...</span>
            ) : (
              <span>{data.moTa}</span>
            )}
          </p>
        </div>
        <NavLink to={`/detail/${data.maPhim}`}>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-yellow-600 text-gray-50 = hover:bg-yellow-700 transition duration-500"
          >
            See more
          </button>
        </NavLink>
      </div>
    </div>
  );
}
