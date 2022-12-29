import React from "react";
import navData from "../navigation/navData";
import { CloseIcon } from "../assets";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <aside
      className={` ${
        isSidebarOpen && "translate-x-0"
      } fixed transition-all translate-x-full top-0 right-0 h-full bg-secondaryMirageBlue z-50 pt-12 px-6 w-[80.5%] flex flex-col justify-start items-center gap-11 text-center`}
    >
      <div className="w-full pb-6 flex justify-end border-b border-b-primaryWaterWhite/20">
        <CloseIcon
          className="hover:cursor-pointer"
          onClick={() => setIsSidebarOpen(false)}
        />
      </div>
      <ul className="flex flex-col gap-8 w-full">
        {navData.map((navItem) => (
          <li
            className="text-xl font-semibold text-primaryWaterWhite/70"
            key={navItem.id}
          >
            <a href={navItem.path}>{navItem.name}</a>
          </li>
        ))}
        <li>
          <button className="primary-btn text-primaryWaterWhite w-full h-12 font-semibold">
            Schedule a Demo
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
