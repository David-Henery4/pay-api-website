import React from "react";
import TestimonialIconGrid from "../SharedSections/TestimonialIconGrid";
import { BgPatternTwo } from "../../assets";


const Testimonials = () => {
  return (
    <section className="bg-secondaryMirageBlue py-20 overflow-hidden col-start-1 col-end-13 grid grid-cols-mobColumns sm:grid-cols-tabColumns xl:grid-cols-deskColumns w-full desk:py-[100px]">
      <div className="max-w-maxContentWidth mx-auto relative w-full col-start-2 col-end-12 flex flex-col gap-14 items-center tab:gap-16 lg:flex-row-reverse lg:justify-between">
        <BgPatternTwo className="pointer-events-none absolute w-[780px] h-[780px] bottom-3/4 md:bottom-[65%] lg:-left-[35%] lg:-bottom-[30%]" />
        <TestimonialIconGrid />
        <div className="relative z-10 max-w-[457px] w-full flex flex-col justify-center items-center gap-8 lg:items-start lg:max-w-[445px]">
          <div className="w-full text-center flex flex-col justify-center items-center gap-4 lg:text-left">
            <h2 className="text-[32px] leading-9 font-dmDisplay text-primaryWaterWhite tab:text-5xl lg:w-full">
              Who we work with
            </h2>
            <p className="text-primaryWaterWhite/70">
              Today, millions of people around the world have successfully
              connected their accounts to apps they love using our API. We
              provide developers with the tools they need to create easy and
              accessible experiences for their users.{" "}
            </p>
          </div>
          <button className="secondary-about-btn text-primaryWaterWhite active:bg-opacity-0 active:text-primaryWaterWhite">
            About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
