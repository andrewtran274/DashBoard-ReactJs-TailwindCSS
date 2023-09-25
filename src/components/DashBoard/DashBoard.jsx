import React from "react";
import Chart from "./Chart";

const DashBoard = () => {
  return (
    <div className="p-12 flex-1 overflow-y-scroll w-screen">
      <h1 className="font-bold mb-8 text-2xl uppercase tracking-widest">
        Dashboard
      </h1>
      <div
        className="flex items-center justify-between gap-10 mb-16
      "
      >
        <div className="p-10 border-[2px] flex items-start flex-col rounded-xl flex-1">
          <h3 className="font-bold text-lg">Yetharth Verma</h3>
          <p> Total Balance: Rs 40,000</p>
        </div>
        <div className="p-10 border-[2px] flex items-start flex-col rounded-xl flex-1">
          <h3 className="font-bold text-lg">Yetharth Verma</h3>
          <p>Total Expenses: Rs 1,00,000 </p>
        </div>
      </div>

      <div className="mb-16 w-full">
        <h1 className="tracking-widest font-bold text-2xl uppercase">
          Expenses Chart
        </h1>
        <Chart className=" w-4/5 m-auto" />
      </div>
      <div
        className="flex items-center justify-between gap-10 
      "
      >
        <div className="pl-10 pt-5 pb-5 pr-10 border-[2px] rounded-xl flex-1">
          <h3 className="mb-8">Your Activity</h3>
          <p>1. Sent Rs 10000 to Mother</p>
        </div>
        <div className="pl-10 pt-5  pb-5 pr-10 border-[2px] flex items-start flex-col rounded-xl flex-1">
          <h3 className="mb-8">Pending bills</h3>
          <p>1. Broadband Bill : Rs 700 </p>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
