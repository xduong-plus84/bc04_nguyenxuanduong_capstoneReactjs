import React from "react";
import { NavLink } from "react-router-dom";

const backGroundLogin = {
  backGround: `http://demo1.cybersoft.edu.vn/static/media/backapp.b46ef3a1.jpg`,
};
export default function SignIn() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-white to-yellow-700 h-screen">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800 w-3/12">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <form
          noValidate
          action
          className="space-y-4 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm text-left">
                Username
              </label>
              <input
                type="email"
                name="email"
                id="email"
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
                type="password"
                name="password"
                id="password"
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
                type="button"
                className="w-full px-8 py-3 font-semibold rounded-md bg-yellow-600 text-gray-50 hover:bg-yellow-700 transition duration-500"
              >
                Sign in
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-600">
              Don't have an account yet?
              <NavLink
                to="/sign-up"
                className="hover:underline text-yellow-600 ml-1"
              >
                Sign up
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
