import React from "react";
import { phoneMockup, PhoneMockup } from "../../assets";

const Header = () => {
  return (
    <header className="col-start-2 col-end-12">
      <div className="w-full h-[240px]">
        <PhoneMockup className="w-full h-full" />
      </div>
      <div className="w-full flex flex-col justify-center items-center text-center gap-6">
        <h1 className="leading-9 text-[32px] font-dmDisplay font-medium text-secondarySanJuanBlue">
          Start building with our APIs for absolutely free.
        </h1>
        <div className="w-full flex flex-col gap-4">
          <input
            type="email"
            name="email"
            className="w-full px-7 py-3 rounded-3xl text-sm font-semibold"
            placeholder="Enter email address"
          />
          <button className="text-primaryWaterWhite primary-btn h-12 w-full">
            Schedule a Demo
          </button>
        </div>
        <p>
          Have any questions?
          <span className="font-semibold"> Contact Us</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
