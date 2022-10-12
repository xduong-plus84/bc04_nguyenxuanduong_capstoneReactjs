import { message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { dangNhapAction } from "../../redux/actions/actionsQuanLyNguoiDung";
import { serviceLocalStorageUser } from "../../Services/serviceLocalStorageUser";
import { serviceQuanLyNguoiDung } from "../../Services/serviceQuanLyNguoiDung";
import { history } from "../../App";
import { useFormik } from "formik";

export default function SignIn() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (thongTinDangNhap) => {
      serviceQuanLyNguoiDung
        .dangNhap(thongTinDangNhap)
        .then((res) => {
          let result = res.data.content;
          onSuccess(); // hien thong bao
          serviceLocalStorageUser.user.set(result); // luu data localStorage
          dispatch(dangNhapAction(result)); // thay doi du lieu tren store
        })
        .catch((err) => {
          console.log(err);
          onFail();
        });
    },
  });

  // let handleLogin = () => {
  //   let thongTinDangNhap = {
  //     taiKhoan: "string",
  //     matKhau: "string",
  //   };
  // };

  let onSuccess = () => {
    message.success("Đăng nhập thành công");
    setTimeout(() => {
      navigate(-1);

      // history.back();
    }, 1000);
  };
  let onFail = () => {
    message.error("Đăng nhập thất bại");
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-white to-zinc-700 pb-8 shadow-zinc-700 h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800 w-3/12 shadow-2xl">
        <form
          onSubmit={formik.handleSubmit}
          noValidate
          action
          className="space-y-4 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label
                htmlFor="taiKhoan"
                className="block mb-2 text-sm text-left"
              >
                Username
              </label>
              <input
                onChange={formik.handleChange}
                type="text"
                name="taiKhoan"
                id="taiKhoan"
                placeholder="duongcute"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline text-yellow-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                onChange={formik.handleChange}
                type="password"
                name="matKhau"
                id="matKhau"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                aria-label="Remember me"
                className="mr-1 rounded-sm  focus:border-yellow-600  accent-yellow-600"
              />
              <label htmlFor="remember" className="text-sm text-gray-600">
                Remember me
              </label>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-yellow-600 text-gray-50 hover:bg-yellow-700 transition duration-500"
              >
                Login
              </button>
            </div>
            <div className="border-b-2"></div>
            or
            <NavLink
              to="/sign-in/sign-up"
              className="hover:underline text-white mx-5"
            >
              <button className="w-2/3 mt-3 px-8 py-3 font-semibold rounded-md bg-green-600 text-gray-50 hover:bg-green-700 transition duration-500">
                Create new account
              </button>
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
