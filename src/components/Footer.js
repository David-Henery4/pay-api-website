import React from 'react'
import { Logo, TwitterIcon, FacebookIcon, LinkedinIcon } from "../assets";
import navData from '../navigation/navData';

const Footer = () => {
  return (
    <footer className="bg-secondaryMirageBlue py-8 col-start-1 col-end-13 grid grid-cols-mobColumns sm:grid-cols-tabColumns">
      <div className="col-start-2 col-end-12 flex flex-col justify-center items-center gap-10 md:flex-row md:justify-between">
        <div className="flex flex-col justify-center items-center gap-10 md:flex-row">
          <Logo className="fill-primaryWaterWhite" />
          <ul className="flex flex-col justify-center items-center gap-8 text-primaryWaterWhite md:flex-row">
            {/* WILL BE NAVLINKS */}
            {navData.map((navLink) => (
              <li key={navLink.id}>
                <a href={navLink.path}>{navLink.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-6 items-center justify-center">
          <FacebookIcon />
          <TwitterIcon />
          <LinkedinIcon />
        </div>
      </div>
    </footer>
  );
}

export default Footer