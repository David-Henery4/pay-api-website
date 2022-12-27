import React from "react";
import { Burger, Logo } from "../assets";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center">
      <div>
        <Logo />
      </div>
      <div>
        <Burger />
      </div>
    </nav>
  );
};

export default Navbar;
