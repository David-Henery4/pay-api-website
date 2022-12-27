import React from 'react'
import { Logo, TwitterIcon, FacebookIcon, LinkedinIcon } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-secondaryMirageBlue py-8 col-start-1 col-end-13 grid grid-cols-mobColumns">
      <div className="col-start-2 col-end-12">
        <div>
          <Logo />
          <ul>
            {/* WILL BE NAVLINKS */}
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <FacebookIcon />
          <TwitterIcon />
          <LinkedinIcon />
        </div>
      </div>
    </footer>
  );
}

export default Footer