import React from 'react'
import {
  GoogleIcon,
  HewlettPackardIcon,
  MicrosoftIcon,
  NvidiaIcon,
  OracleIcon,
  TeslaIcon,
} from "../../assets";

const TestimonialIconGrid = ({isContactPage}) => {
  return (
    <div
      className={`relative z-10 max-w-[536px] w-full grid grid-cols-1 gap-10 items-center justify-items-center mob:grid-cols-2 tab:grid-cols-3 lg:content-center ${
        isContactPage ? "fill-secondarySanJuanBlue" : "fill-primaryWaterWhite"
      }`}
    >
      <TeslaIcon />
      <MicrosoftIcon />
      <HewlettPackardIcon />
      <OracleIcon />
      <GoogleIcon />
      <NvidiaIcon />
    </div>
  );
}

export default TestimonialIconGrid