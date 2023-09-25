import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { v4 as uuidv4 } from "uuid";
import SidebarItem from "./SidebarItem";

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

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const sidebarItems = SideBarItems.map((item, index) => (
    <SidebarItem
      key={index}
      item={item}
      index={index}
      activeIndex={activeIndex}
      handleItemClick={handleItemClick}
      SideBarItems={SideBarItems}
      isOpen={isOpen}
    />
  ));

  const sidebarClass = isOpen ? "w-min pl-2" : "w-[314px] pl-2";

  return (
    <div
      className={`transition-all ${sidebarClass} h-screen bg-[#ffffff] pt-[49px] border-r-2 pr-6  flex flex-col pb-10 relative`}
    >
      <div className="logo flex items-center ml-[20px]">
        <img src={Logo} alt="" className="w-6 h-[30px] cursor-pointer" />
        <span
          className={`${isOpen ? "hidden" : "block"} font-normal ml-3 text-lg`}
        >
          Money Tracker
        </span>
      </div>
      <ul className={`mt-14 ml-3 flex-1 flex flex-col`}>{sidebarItems}</ul>
      <div
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
        className="absolute cursor-pointer -right-[16px] top-[51px] w-8 h-8 flex items-center justify-center rounded-full bg-[#ff9898]"
      >
        <ChevronRight
          className={`${
            isOpen ? "rotate-0" : "rotate-180"
          } text-white rotate-180 mr-[2px] transition-all duration-300`}
        />
      </div>
    </div>
  );
};

export default NavigationBar;
