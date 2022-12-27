import React from 'react'
import { phoneMockup } from "../../assets";

const Header = () => {
  return (
    <header>
      <div>
        <img src={phoneMockup} alt="phone-mockup" />
      </div>
      <div>
        <h1 className="leading-9 text-[32px] font-dmDisplay font-medium text-secondarySanJuanBlue">
          Start building with our APIs for absolutely free.
        </h1>
        <div>
          <div>
            <input
              type="email"
              name="email"
              className="px-7 py-3 rounded-3xl text-sm font-semibold"
              placeholder="Enter email address"
            />
            <button className="text-primaryWaterWhite primary-btn h-12 w-full">
              Schedule a Demo
            </button>
          </div>
          <p>
            Have any questions? 
            <span className='font-semibold'>Contact Us</span>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header