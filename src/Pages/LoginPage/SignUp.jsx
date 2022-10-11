import React from "react";

export default function SignUp() {
  return (
    <div className="flex justify-center bg-gradient-to-b from-white to-zinc-700 pb-8 shadow-zinc-700 h-screen items-center ">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800 w-3/12">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign up</h1>
          <p className="text-sm text-gray-600">It's quick and easy.</p>
        </div>
        <form
          noValidate
          action
          className="space-y-12 ng-untouched ng-pristine ng-valid"
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
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="button"
                className="w-full px-8 py-3 font-semibold rounded-md bg-yellow-600 text-gray-50 hover:bg-yellow-700 transition duration-500"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
