import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderTheme() {
  return (
    <div className="h-fit">
      <header className="p-4 bg-white text-gray-800">
        <div className="container flex justify-between h-16 mx-auto">
          <NavLink to="/" className="flex items-center p-2 w-56">
            <img
              src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png"
              alt="logo"
            />
          </NavLink>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-black border-yellow-700 font-bold hover:text-yellow-700">
                Lịch chiếu
              </NavLink>
            </li>
            <li className="flex">
              <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-black font-bold hover:text-yellow-700">
                Cụm rạp
              </NavLink>
            </li>
            <li className="flex">
              <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-black font-bold hover:text-yellow-700">
                Tin tức
              </NavLink>
            </li>
            <li className="flex">
              <NavLink className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-black font-bold hover:text-yellow-700">
                Ứng dụng
              </NavLink>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <NavLink to="/sign-in">
              <button className="self-center px-8 py-3 font-semibold rounded text-yellow-600 hover:bg-yellow-700 hover:text-gray-50 mr-2 transition duration-500">
                Đăng nhập
              </button>
            </NavLink>
            <NavLink to="/sign-up">
              <button className="self-center px-8 py-3 font-semibold rounded bg-yellow-600 text-gray-50 hover:bg-yellow-700 transition duration-500">
                Đăng kí
              </button>
            </NavLink>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
