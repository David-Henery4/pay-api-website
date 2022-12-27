import React from "react";
import { Burger, Logo } from "../assets";
import navData from "../navigation/navData";

const Navbar = () => {
  return (
    <nav className="pt-10 w-full flex justify-between items-center col-start-2 col-end-12">
      <div className="flex justify-center items-center gap-16">
        <Logo className="fill-secondarySanJuanBlue" />
        <ul className="md:flex gap-10 hidden">
          {navData.map((linkItem) => (
            <li key={linkItem.id}>
              <a href={linkItem.path}>{linkItem.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <Burger className="hover:cursor-pointer md:hidden" />
        <button className="md:block hidden primary-btn h-12 w-44 text-primaryWaterWhite">Schedule a Demo</button>
      </div>
    </nav>
  );
};

export default Navbar;
