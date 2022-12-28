import React from "react";
import {
  GoogleIcon,
  HewlettPackardIcon,
  MicrosoftIcon,
  NvidiaIcon,
  OracleIcon,
  TeslaIcon,
} from "../../assets";

const Testimonials = () => {
  return (
    <section className="bg-secondaryMirageBlue py-20 col-start-1 col-end-13 grid grid-cols-mobColumns sm:grid-cols-tabColumns xl:grid-cols-deskColumns w-full desk:py-[100px]">
      <div className="w-full col-start-2 col-end-12 flex flex-col gap-14 tab:gap-16 desk:flex-row-reverse desk:justify-between">
        <div className="mx-auto max-w-[536px] w-full grid grid-cols-1 gap-10 items-center justify-items-center mob:grid-cols-2 tab:grid-cols-3 desk:content-center fill-primaryWaterWhite">
          <TeslaIcon />
          <MicrosoftIcon />
          <HewlettPackardIcon />
          <OracleIcon />
          <GoogleIcon />
          <NvidiaIcon />
        </div>
        <div className="mx-auto max-w-md w-full flex flex-col justify-center items-center gap-8 desk:items-start">
          <div className="w-full text-center flex flex-col justify-center items-center gap-4 desk:text-left">
            <h2 className="text-[32px] leading-9 font-dmDisplay text-primaryWaterWhite tab:text-5xl desk:w-full">
              Who we work with
            </h2>
            <p className="text-primaryWaterWhite/70">
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.{" "}
            </p>
          </div>
          <button className="secondary-about-btn text-primaryWaterWhite">
            About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
