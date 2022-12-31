import React from "react";
import {teamImgDesk,teamImgMob, teamImgTab} from "../assets"

const About = () => {
  return (
    <>
      {/* TOP SECTION */}
      <section className="col-start-2 col-end-12 flex flex-col justify-center items-center gap-10 pt-12 pb-[76px] md:gap-14 md:pt-[75px] md:max-w-[920px] md:mx-auto lg:items-start lg:pt-[82px] lg:pb-[100px]">
        <h2 className="text-[32px] leading-9 text-secondarySanJuanBlue font-medium font-dmDisplay text-center md:text-5xl lg:text-left lg:text-[56px] lg:max-w-[660px]">
          We empower innovators by delivering access to the financial system
        </h2>
        <div className="flex flex-col justify-center items-center gap-12 text-center md:gap-16">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:items-start md:w-full md:justify-start md:text-left md:gap-[10px]">
            <h3 className="text-2xl font-dmDisplay text-secondarySanJuanBlue md:min-w-[223px] md:text-[32px]">
              Our Vision
            </h3>
            <p className="max-w-[511px] md:max-w-none">
              Our main goal is to build beautiful consumer experiences along
              with developer-friendly infrastructure. The result is an
              intelligent tool that gives everyone the ability to create amazing
              products that solve big problems. We are deeply focused on
              democratizing financial services through technology.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:items-start md:w-full md:justify-start md:text-left md:gap-[10px]">
            <h3 className="text-2xl font-dmDisplay text-secondarySanJuanBlue md:min-w-[223px] md:text-[32px]">
              Our Business
            </h3>
            <p className="max-w-[511px] md:max-w-none">
              At the core of our platform is the technical infrastructure APIs
              that connect consumers. Our innovative product provides key
              insights for businesses and individuals, as well as robust
              reporting for traditional financial institutions and developers.{" "}
            </p>
          </div>
        </div>
      </section>
      {/* IMAGE SECTION */}
      <div className="col-start-1 col-end-13 pb-12 md:pb-16 lg:pb-[72px]">
        <picture>
          <source srcSet={`${teamImgDesk} 2x`} media="(min-width:64em)" />
          <source srcSet={`${teamImgTab} 2x`} media="(min-width:31.25em)" />
          <img
            srcSet={`${teamImgMob} 2x`}
            className="max-w-full w-full object-center object-cover"
            src={`${teamImgMob}`}
            alt="team-members"
          />
        </picture>
      </div>
      {/* BOTTOM SECTIONS */}
      <section className="py-4 border-y border-y-secondarySanJuanBlue/25 col-start-2 col-end-12 flex flex-col justify-center items-center gap-8 md:flex-row md:gap-[10px] md:border-y-0 lg:gap-[30px]">
        <div className="grid place-items-center md:w-full md:justify-items-start md:border-y md:border-y-secondarySanJuanBlue/25 md:py-4">
          <h4>Team Members</h4>
          <p className="text-[56px] text-primaryDarkPink font-dmDisplay leading-[72px]">
            300+
          </p>
        </div>
        <div className="grid place-items-center md:w-full md:justify-items-start md:border-y md:border-y-secondarySanJuanBlue/25 md:py-4">
          <h4>Offices in the US</h4>
          <p className="text-[56px] text-primaryDarkPink font-dmDisplay leading-[72px]">
            3
          </p>
        </div>
        <div className="grid place-items-center md:w-full md:justify-items-start md:border-y md:border-y-secondarySanJuanBlue/25 md:py-4">
          <h4>Transactions analyzed</h4>
          <p className="text-[56px] text-primaryDarkPink font-dmDisplay leading-[72px]">
            10M+
          </p>
        </div>
      </section>
      {/**/}
      <section className="col-start-2 col-end-12 flex flex-col justify-center items-center gap-12 text-center pt-12 md:max-w-[920px] md:mx-auto md:gap-16 md:pb-16 lg:pb-[72px]">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:items-start md:w-full md:justify-start md:text-left md:gap-[10px]">
          <h3 className="text-2xl font-dmDisplay text-secondarySanJuanBlue md:min-w-[223px] md:text-[32px]">
            The Culture
          </h3>
          <p className="max-w-[511px] md:max-w-none">
            We strongly believe there's always an opportunity to learn from each
            other outside of day-to-day work, whether it's company-wide
            offsites, internal hackathons, or co-worker meetups. We always value
            cross-team collaboration and diversity of thought, no matter the job
            title.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:items-start md:w-full md:justify-start md:text-left md:gap-[10px]">
          <h3 className="text-2xl font-dmDisplay text-secondarySanJuanBlue md:min-w-[223px] md:text-[32px]">
            The People
          </h3>
          <p className="max-w-[511px] md:max-w-none">
            We're all passionate about building a more efficient and inclusive
            financial infrastructure together. At PayAPI, we have diverse
            backgrounds and skills.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
