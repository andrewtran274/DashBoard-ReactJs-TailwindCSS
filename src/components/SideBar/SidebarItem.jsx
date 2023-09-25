import React from "react";

const SidebarItem = ({
  item,
  index,
  activeIndex,
  handleItemClick,
  SideBarItems,
  isOpen,
}) => {
  return (
    <li
      key={item.id}
      onClick={() => handleItemClick(index)}
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
  );
};

export default SidebarItem;
