import React from "react";
import { StatsSection, ImageSection, TextTop, TextBottom } from "./AboutSections";

const About = () => {
  return (
    <>
      {/* TOP SECTION */}
      <section className="col-start-2 col-end-12 flex flex-col justify-center items-center gap-10 pt-12 pb-[76px] md:gap-14 md:pt-[75px] md:max-w-[920px] md:mx-auto lg:items-start lg:pt-[82px] lg:pb-[100px]">
        <h2 className="text-[32px] leading-9 text-secondarySanJuanBlue font-medium font-dmDisplay text-center md:text-5xl lg:text-left lg:text-[56px] lg:max-w-[660px]">
          We empower innovators by delivering access to the financial system
        </h2>
        <TextTop/>
      </section>
      {/* IMAGE SECTION */}
      <ImageSection/>
      {/* BOTTOM SECTIONS */}
      <StatsSection/>
      {/**/}
      <TextBottom/>
    </>
  );
};

export default About;
