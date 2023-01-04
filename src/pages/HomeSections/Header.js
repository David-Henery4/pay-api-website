import React, { useEffect, useState } from "react";
import { PhoneMockup, BgPatternOne} from "../../assets";
import useEmailValidation from "../../validation/useEmailValidation";
import checkForValueToHideLabel from "../../validation/checkValueHideLabel";
import { Link } from "react-router-dom";

const Header = () => {
  const [email, setEmail] = useState("");
  const [doesEmailHaveValue, setDoesEmailHaveValue] = useState(false);
  //
  const handleEmailForValidation = (e) => {
    e.preventDefault();
    validateEmail(email);
  };
  //
  const handleFinalEmailSubmit = (finalEmail) => {
    console.log("Thank you for submiting a request :)");
    setEmail("");
  };
  //
  const { emailError, validateEmail } = useEmailValidation(
    handleFinalEmailSubmit
  );
  //
  useEffect(() => {
    const result = checkForValueToHideLabel(email);
    setDoesEmailHaveValue(result);
  }, [email]);
  //
  return (
    <header className="max-w-maxContentWidth mx-auto w-full col-start-2 col-end-12 flex flex-col justify-center items-center gap-6 pt-8 pb-20 tab:pt-12 tab:pb-[100px] lg:py-[75px] tab:gap-12 lg:flex-row-reverse xl:justify-end desk:gap-[8vw]">
      <div className="relative w-full xl:max-w-[262px] xl:mx-auto grid place-items-center">
        <BgPatternOne className="h-[780px] w-[780px] absolute bottom-[47%] md:w-[949px] md:h-[949px] lg:h-[780px] lg:w-[780px]  lg:bottom-14 lg:-left-4 xl:-left-[115px] pointer-events-none" />
        <PhoneMockup className="w-full h-[64vw] max-h-[300px] lg:max-h-[500px] relative z-10" />
      </div>
      <div className="w-full flex flex-col justify-center items-center text-center gap-6 lg:items-start lg:text-left xl:max-w-[546px]">
        <h1 className="leading-9 text-[32px] font-dmDisplay font-medium text-secondarySanJuanBlue tab:text-5xl tab:leading-[56px] tab:max-w-xl desk:text-7xl desk:leading-[73px] desk:max-w-[546px]">
          Start building with our APIs for absolutely free.
        </h1>
        <form
          onSubmit={(e) => handleEmailForValidation(e)}
          className="relative w-full flex flex-col gap-4 max-w-[445px] tab:flex-row"
        >
          <input
            id="email-header"
            type="text"
            name="email-header"
            className="input-auto-email peer h-12 w-full px-7 py-3 rounded-3xl text-sm text-secondarySanJuanBlue bg-primaryWaterWhite font-semibold tab:pr-48 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {doesEmailHaveValue || (
            <label
              className="absolute top-3 left-7 peer-focus:hidden pointer-events-none"
              htmlFor="email-header"
            >
              Enter email address
            </label>
          )}
          <button
            aria-label="Submit button with a email to schedule a demo"
            className="text-primaryWaterWhite primary-btn h-12 w-full tab:w-44 tab:absolute tab:top-0 tab:right-0 active:bg-primaryDarkPink"
            type="submit"
          >
            Schedule a Demo
          </button>
          {emailError.isEmailError && (
            <p className="absolute -bottom-5 left-0 text-[11px] text-errorRed px-7">
              {emailError.msg}
            </p>
          )}
        </form>
        <p className="lg:px-7">
          Have any questions?
          <Link
            className="font-semibold hover:text-secondarySanJuanBlue"
            to="/contact"
          >
            {" "}
            Contact Us
          </Link>
        </p>
      </div>
    </header>
  );
};

export default Header;
