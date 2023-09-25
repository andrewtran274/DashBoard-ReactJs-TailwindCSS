import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { v4 as uuidv4 } from "uuid";
import Arow from "../../assets/icons/rightArrow.svg";
import { motion } from "framer-motion";

import {
  LayoutDashboard,
  CalendarClock,
  BarChart3,
  ArrowLeftRight,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react";

const SideBarItems = [
  {
    id: uuidv4(),
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    id: uuidv4(),
    name: "Activity",
    icon: CalendarClock,
  },
  {
    id: uuidv4(),
    name: "Analytics",
    icon: BarChart3,
  },
  {
    id: uuidv4(),
    name: "Transactions",
    icon: ArrowLeftRight,
  },
  {
    id: uuidv4(),
    name: "Help Center",
    icon: HelpCircle,
  },
  {
    id: uuidv4(),
    name: "Logout",
    icon: LogOut,
  },
];

const NavigationBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`transition duration-700 ${
        isOpen ? "w-min pl-2" : "w-[314px] pl-8"
      } h-screen bg-[#ffffff] pt-[49px] border-r-2 pr-6  flex flex-col pb-10 relative`}
    >
      <div className="logo flex items-center ml-[20px]">
        <img src={Logo} alt="" className="w-6 h-[30px] cursor-pointer" />
        <span
          className={`${isOpen ? "hidden" : "block"} font-normal ml-3 text-lg`}
        >
          Money Tracker
        </span>
      </div>
      <ul className={` mt-14 ml-3 flex-1 flex flex-col `}>
        {SideBarItems.map((item, index) => (
          <li
            key={item.id}
            onClick={() => setActiveIndex(index)}
            className={`flex items-center w-full ${
              index === activeIndex
                ? "bg-[#ff9898] text-white"
                : "hover:bg-[#fedddd] duration-300"
            } p-3 rounded cursor-pointer ${
              index === SideBarItems.length - 1 ? "mt-auto shrink-0" : "mb-4"
            }`}
          >
            <item.icon
              className={`shrink-0 ${
                index === activeIndex ? "text-white" : "text-black"
              }`}
            />
            <p
              className={`${isOpen ? "hidden" : "block"} ml-3 ${
                index === activeIndex ? "font-medium" : "font-light"
              }`}
            >
              {item.name}
            </p>
          </li>
        ))}
      </ul>
      <div
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
        className="absolute cursor-pointer -right-[16px] top-[51px] w-8 h-8 flex items-center justify-center rounded-full bg-[#ff9898]"
      >
        <ChevronRight
          className={` ${
            isOpen ? "rotate-0" : "rotate-180"
          } text-white rotate-180 mr-[2px] transition-all duration-300`}
        />
      </div>
    </div>
  );
};

export default NavigationBar;
