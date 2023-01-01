import React from 'react'
import { useState } from 'react';
import { CheckIcon } from '../../assets';

const ContactForm = () => {
  const [isOptInChecked, setIsOptInChecked] = useState(false);
  return (
    <form
      id="contact"
      action="submit"
      name="contact"
      className="flex flex-col justify-center items-start max-w-[445px]"
    >
      <input
        className="first:pt-0 pl-5 w-full py-6 bg-mainBgChilledWhite/0 border-b border-b-secondarySanJuanBlue/50 outline-none"
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
  );
}

export default ContactForm