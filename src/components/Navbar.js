import React from "react";
import { Link } from "react-router-dom";
import { Burger, Logo } from "../assets";
import navData from "../navigation/navData";

const Navbar = ({ setIsSidebarOpen }) => {
  //
  return (
    <nav className="relative z-10 pt-10 w-full flex justify-between items-center col-start-2 col-end-12">
      <div className="flex justify-center items-center gap-16">
        <Link to="/">
          <Logo className="fill-secondarySanJuanBlue" />
        </Link>
        <ul className="md:flex gap-10 hidden">
          {navData.map((linkItem) => (
            <li
              className="hover:text-secondarySanJuanBlue font-medium"
              key={linkItem.id}
            >
              <Link to={linkItem.path}>{linkItem.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Burger
          className="hover:cursor-pointer md:hidden"
          onClick={() => setIsSidebarOpen(true)}
        />
        <button className="md:block hidden primary-btn h-12 w-44 text-primaryWaterWhite">
          Schedule a Demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
