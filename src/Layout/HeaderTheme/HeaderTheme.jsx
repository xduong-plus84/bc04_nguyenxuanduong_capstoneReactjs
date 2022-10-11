import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { dangXuatAction } from "../../redux/actions/actionsQuanLyNguoiDung";
import { serviceLocalStorageUser } from "../../Services/serviceLocalStorageUser";

export default function HeaderTheme() {
  let dispatch = useDispatch();
  let { userInfor } = useSelector((state) => state.reducerQuanLyNguoiDung);
  console.log("userInfor: ", userInfor);

  let handleLogOut = () => {
    console.log("logout");
    serviceLocalStorageUser.user.remove();
    dispatch(dangXuatAction());
    window.location.href = "/sign-in";
  };

  let renderUserNav = () => {
    if (!userInfor) {
      return (
        <div className="mr-3">
          <NavLink to="/sign-in">
            <button className="mr-5r px-2 py-1 font-semibold rounded-xl bg-yellow-600 text-white border-solid border-2 border-transparent hover:bg-transparent hover:text-yellow-600 hover:border-yellow-600 transition duration-500">
              Login / Register
            </button>
          </NavLink>
        </div>
      );
    } else {
      return (
        <div className="mr-3">
          <span className="font-semibold">
            Hello
            <span className="font-bold mx-2 text-blue-500 uppercase ">
              {userInfor.hoTen}
            </span>
          </span>
          <button
            onClick={() => {
              handleLogOut();
            }}
            className="mr-5 px-2 py-1 font-semibold rounded-xl bg-yellow-600 text-white border-solid border-2 border-transparent hover:bg-transparent hover:text-yellow-600 hover:border-yellow-600 transition duration-500"
          >
            Log outt
          </button>
        </div>
      );
    }
  };
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

          {renderUserNav()}
        </div>
      </header>
    </div>
  );
}
