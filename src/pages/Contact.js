import React from "react";
import {ContactForm, TestimonialSection} from "./ContactSections";

const Contact = () => {
  return (
    <section className="max-w-maxContentWidth mx-auto w-full col-start-2 col-end-12 pt-12 md:pt-[75px] grid gap-10 md:gap-[54px] lg:gap-11 lg:pt-[82px]">
      <h2 className="text-[32px] leading-9 font-dmDisplay text-secondarySanJuanBlue text-center max-w-[550px] mx-auto md:text-5xl md:leading-[56px] lg:m-0 lg:text-left lg:max-w-[650px] lg:text-[56px]">
        Submit a help request and we’ll get in touch shortly.
      </h2>
      <div className="w-full flex flex-col justify-center items-center gap-20 lg:flex-row lg:justify-between">
        <ContactForm />
        <TestimonialSection />
      </div>
    </section>
  );
};

export default Contact;
