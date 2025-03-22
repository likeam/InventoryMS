import React from "react";
import { FaHome, FaLuggageCart } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbCategory } from "react-icons/tb";

const BottomNav = () => {
  return (
    <div className=" fixed bottom-0 left-0 bg-[#262626] p-4 flex justify-around w-full">
      <button className=" flex items-center justify-center text-[#ababab] bg-[#343434]  w-[200px] rounded-[20px]">
        <FaHome className=" inline mr-4" size={15} />
        <p>Home</p>
      </button>
      <button className=" flex items-center justify-center text-[#ababab] w-[200px] rounded-[20px]">
        <FaPeopleGroup className=" inline mr-4" size={15} />
        <p>Employees</p>
      </button>
      <button className=" flex items-center justify-center text-[#ababab] w-[200px] rounded-[20px]">
        <TbCategory className=" inline mr-4" size={15} />
        <p>Categories</p>
      </button>
      <button className=" flex items-center justify-center text-[#ababab] w-[200px] rounded-[20px]">
        <FaLuggageCart className=" inline mr-4" size={15} />
        <p>Suppliers</p>
      </button>
      <button className=" flex items-center justify-center text-[#ababab] w-[200px] rounded-[20px]">
        <FaHome className=" inline mr-4" size={15} />
        <p>Product</p>
      </button>
      <button className=" flex items-center justify-center text-[#ababab] w-[200px] rounded-[20px]">
        <FaHome className=" inline mr-4" size={15} />
        <p>Bills</p>
      </button>
      <button className=" flex items-center justify-center text-[#ababab] w-[200px] rounded-[20px]">
        <FaHome className=" inline mr-4" size={15} />
        <p>Sales</p>
      </button>
      <button className=" flex items-center justify-center text-[#ababab] w-[200px] rounded-[20px]">
        <FaHome className=" inline mr-4" size={15} />
        <p>Exist</p>
      </button>
    </div>
  );
};

export default BottomNav;
