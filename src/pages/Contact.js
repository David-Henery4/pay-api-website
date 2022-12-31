import React, { useState } from "react";
import TestimonialIconGrid from "./SharedSections/TestimonialIconGrid";
import { CheckIcon } from "../assets";

const Contact = () => {
  const [isOptInChecked,setIsOptInChecked] = useState(false)
  return (
    <section className="col-start-2 col-end-12 pt-12">
      <h2 className="text-[32px] leading-9 font-dmDisplay text-secondarySanJuanBlue text-center">
        Submit a help request and we’ll get in touch shortly.
      </h2>
      <div className="w-full flex flex-col justify-center items-center gap-20">
        <form
          id="contact"
          action="submit"
          name="contact"
          className="flex flex-col justify-center items-start"
        >
          <input
            className="pl-5 w-full py-6 bg-mainBgChilledWhite/0 border-b border-b-secondarySanJuanBlue/50 outline-none"
            type="text"
            placeholder="Name"
          />
          <input
            className="pl-5 w-full py-6 bg-mainBgChilledWhite/0 border-b border-b-secondarySanJuanBlue/50 outline-none"
            type="email"
            placeholder="Email Address"
          />
          <input
            className="pl-5 w-full py-6 bg-mainBgChilledWhite/0 border-b border-b-secondarySanJuanBlue/50 outline-none"
            type="text"
            placeholder="Company Name"
          />
          <input
            className="pl-5 w-full py-6 bg-mainBgChilledWhite/0 border-b border-b-secondarySanJuanBlue/50 outline-none"
            type="text"
            placeholder="Title"
          />
          <textarea
            className="w-full py-6 bg-mainBgChilledWhite/0 border-b border-b-secondarySanJuanBlue/50 outline-none resize-none pl-5"
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
          <div className="w-full flex justify-center items-center py-6 gap-6">
            <label className="checkbox-label">
              <input
                name="checkbox"
                id="checkbox"
                type="checkbox"
                className="checkbox-input"
                onChange={() => setIsOptInChecked(!isOptInChecked)}
                checked={isOptInChecked}
              />
              {isOptInChecked && (
                <CheckIcon className="checkbox-icon stroke-[#fff]" />
              )}
            </label>
            <p className="text-[15px] text-secondarySanJuanBlue font-medium">
              Stay up-to-date with company announcements and updates to our API
            </p>
          </div>
          <button className="secondary-query-btn" type="submit">
            Submit
          </button>
        </form>
        <div className="grid place-items-center gap-8">
          <h3 className="text-2xl font-dmDisplay text-secondarySanJuanBlue/75 leading-8 text-center">
            Join the thousands of innovators already building with us
          </h3>
          <TestimonialIconGrid isContactPage={true} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
