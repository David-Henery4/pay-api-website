import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Burger, Logo } from "../assets";
import navData from "../navigation/navData";
import { BgPattern } from "../assets";

const Navbar = ({ setIsSidebarOpen }) => {
  const { pathname } = useLocation();
  //
  return (
    <nav className="max-w-maxContentWidth mx-auto relative z-10 pt-10 w-full flex justify-between items-center col-start-2 col-end-12">
      <div className="relative z-10 flex justify-center items-center gap-16">
        <Link aria-label="navbar logo link to the home page" to="/">
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
      <div className="relative">
        <BgPattern
          className={`absolute -z-10 pointer-events-none w-[780px] h-[780px] -left-[150px] -top-[635px] md:-left-[80px] md:-top-[540px] lg:-left-[290px] lg:-top-[590px] ${
            pathname === "/" && "hidden"
          } ${pathname === "/pricing" && "lg:-left-[430px] lg:-top-[620px]"}`}
        />
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
