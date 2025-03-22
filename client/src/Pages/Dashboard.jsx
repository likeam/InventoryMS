import React from "react";
import { Link } from "react-router-dom";
import BottomNav from "../Components/BottomNav";
import Greetings from "../Components/Greetings";
import MiniCard from "../Components/MiniCard";
import { BsCashCoin } from "react-icons/bs";
import { GrInProgress } from "react-icons/gr";
import RecentOrders from "../Components/RecentOrders";

const Dashboard = () => {
  return (
    <section className=" bg-[#1f1f1f] h-[calc(100vh-4rem)] overflow-hidden flex gap-3">
      {/* Left Div  */}
      <div className=" flex-[3]">
        <Greetings />
        <div className=" flex items-center w-full gap-3 px-8 mt-8">
          <MiniCard
            title="Total Earnings"
            icon={<BsCashCoin />}
            number={512}
            footerNum={1.6}
          />
          <MiniCard
            title="In Progress"
            icon={<GrInProgress />}
            number={512}
            footerNum={1.6}
          />
        </div>
        <RecentOrders />
      </div>
      {/* Right Div  */}
      <div className=" flex-[2] bg-blue-600"></div>
      <BottomNav />
    </section>
  );
};

export default Dashboard;
