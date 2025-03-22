import React from "react";

const Register = () => {
  return (
    <div
      className=" text-white h-[100vh] flex items-center justify-center bg-cover"
      style={{
        backgroundImage: "url('../src/assets/pexels-lauripoldre-31173051.jpg')",
      }}
    >
      <div>
        <div className=" bg-transparent border border-slate-600 rounded-md p-8 shadow-md backdrop-filter backdrop-blur-lg bg-opacity-30 relative">
          <h1 className=" text-4xl font-bold text-center ">Register</h1>
          <form action="">
            <div className=" relative my-4">
              <input
                type="text"
                className=" block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                placeholder=""
              />
              <label
                htmlFor=""
                className=" absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Username
              </label>
            </div>
            <div className=" relative my-4">
              <input
                type="text"
                className=" block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                placeholder=""
              />
              <label
                htmlFor=""
                className=" absolute text-sm duration-300 transform -translate scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Password
              </label>
            </div>
            <button
              type="submit"
              className=" w-full mb-4 text-[18px] rounded bg-blue-500 py-2 mt-4 hover:bg-blue-600 transation-colors duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
