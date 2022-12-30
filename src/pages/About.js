import React from "react";
import {teamImgDesk,teamImgMob, teamImgTab} from "../assets"

const About = () => {
  return (
    <>
      {/* TOP SECTION */}
      <section className="col-start-2 col-end-12 flex flex-col justify-center items-center gap-10 pt-12 pb-[76px]">
        <h2 className="text-[32px] leading-9 text-secondarySanJuanBlue font-medium font-dmDisplay text-center">
          We empower innovators by delivering access to the financial system
        </h2>
        <div className="flex flex-col justify-center items-center gap-12 text-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="text-2xl font-dmDisplay text-secondarySanJuanBlue">
              Our Vision
            </h3>
            <p>
              Our main goal is to build beautiful consumer experiences along
              with developer-friendly infrastructure. The result is an
              intelligent tool that gives everyone the ability to create amazing
              products that solve big problems. We are deeply focused on
              democratizing financial services through technology.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="text-2xl font-dmDisplay text-secondarySanJuanBlue">
              Our Business
            </h3>
            <p>
              At the core of our platform is the technical infrastructure APIs
              that connect consumers. Our innovative product provides key
              insights for businesses and individuals, as well as robust
              reporting for traditional financial institutions and developers.{" "}
            </p>
          </div>
        </div>
      </section>
      {/* IMAGE SECTION */}
      <div className="col-start-1 col-end-13 pb-12">
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
      <section className="py-4 border-y border-y-secondarySanJuanBlue/25 col-start-2 col-end-12 flex flex-col justify-center items-center gap-8">
        <div className="grid place-items-center">
          <h4>Team Members</h4>
          <p className="text-[56px] text-primaryDarkPink font-dmDisplay leading-[72px]">
            300+
          </p>
        </div>
        <div className="grid place-items-center">
          <h4>Offices in the US</h4>
          <p className="text-[56px] text-primaryDarkPink font-dmDisplay leading-[72px]">
            3
          </p>
        </div>
        <div className="grid place-items-center">
          <h4>Transactions analyzed</h4>
          <p className="text-[56px] text-primaryDarkPink font-dmDisplay leading-[72px]">
            10M+
          </p>
        </div>
      </section>
      {/**/}
      <section className="col-start-2 col-end-12 flex flex-col justify-center items-center gap-12 text-center pt-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-2xl font-dmDisplay text-secondarySanJuanBlue">
            The Culture
          </h3>
          <p>
            We strongly believe there's always an opportunity to learn from each
            other outside of day-to-day work, whether it's company-wide
            offsites, internal hackathons, or co-worker meetups. We always value
            cross-team collaboration and diversity of thought, no matter the job
            title.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h3 className="text-2xl font-dmDisplay text-secondarySanJuanBlue">
            The People
          </h3>
          <p>
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
