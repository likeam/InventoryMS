import React from "react";
import Logo from "../assets/logo.svg";
import { FaBell, FaCircle, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className=" flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={Logo} alt="react logo" className="h-8 w-8" />
        <h1 className=" text-lg font-semibold text-[#f5f5f5]">
          Rizwan Traders
        </h1>
      </div>
      {/* Search  */}
      <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-[500px]">
        <FaSearch className="text-[#f5f5f5] " />
        <input
          type="text"
          placeholder="Search"
          className=" bg-[#1f1f1f] outline-none text-[#f5f5f5]"
        />
      </div>
      {/* User Details  */}
      <div className=" flex items-center gap-4">
        <div className=" bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
          <FaBell className="text-[#f5f5f5] text-2xl" />
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <FaCircle className="text-[#f5f5f5] text-2xl" />
          <div className="flex flex-col items-start">
            <h1 className=" text-md text-[#f5f5f5] font-semibold">
              {" "}
              Rizwan Ahmed Tahir
            </h1>
            <p className=" text-sm text-[#ababab] font-medium">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
