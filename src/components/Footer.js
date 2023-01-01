import React from "react";
import { Link } from "react-router-dom";
import { Logo, TwitterIcon, FacebookIcon, LinkedinIcon } from "../assets";
import navData from "../navigation/navData";

const Footer = () => {
  return (
    <footer className="bg-secondaryMirageBlue py-8 col-start-1 col-end-13 grid grid-cols-mobColumns sm:grid-cols-tabColumns xl:grid-cols-deskColumns">
      <div className="col-start-2 col-end-12 flex flex-col justify-center items-center gap-10 md:flex-row md:justify-between">
        <div className="flex flex-col justify-center items-center gap-10 md:flex-row lg:gap-16">
          <Link to="/">
            <Logo className="fill-primaryWaterWhite" />
          </Link>
          <ul className="flex flex-col justify-center items-center gap-8 text-primaryWaterWhite md:flex-row lg:gap-10">
            {/* WILL BE NAVLINKS */}
            {navData.map((navLink) => (
              <li key={navLink.id}>
                <Link to={navLink.path} className="hover:text-primaryDarkPink">
                {navLink.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-6 items-center justify-center">
          <FacebookIcon className="hover:cursor-pointer hover:fill-primaryDarkPink  fill-primaryWaterWhite" />
          <TwitterIcon className="hover:fill-primaryDarkPink hover:cursor-pointer fill-primaryWaterWhite" />
          <LinkedinIcon className="hover:fill-primaryDarkPink hover:cursor-pointer fill-primaryWaterWhite" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
