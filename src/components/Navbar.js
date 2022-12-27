import React from "react";
import { Burger, Logo } from "../assets";

const Navbar = () => {
  return (
    <nav className="pt-10 w-full flex justify-between items-center col-start-2 col-end-12">
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
