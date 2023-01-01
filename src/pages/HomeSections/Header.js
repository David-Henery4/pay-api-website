import React, { useEffect, useState } from "react";
import { phoneMockup, PhoneMockup } from "../../assets";

const Header = () => {
  const [email,setEmail] = useState("")
  const [doesEmailHaveValue,setDoesEmailHaveValue] = useState(false)
  //
  const handleEmailSubmit = (e) => {
    e.preventDefault()
    console.log(email)
  }
  //
  const checkForValueToHideLabel = () => {
    if(email.trim() !== "" && email.trim().length >=1 ){
      setDoesEmailHaveValue(true)
    }
    if(email.trim() === "" && email.trim().length <= 0){
      setDoesEmailHaveValue(false)
    }
  }
  //
  useEffect(() => {
    checkForValueToHideLabel()
  }, [email])
  //
  return (
    <header className="col-start-2 col-end-12 flex flex-col justify-center items-center gap-6 pt-8 pb-20 tab:pt-12 tab:pb-[100px] lg:py-[75px] tab:gap-12 lg:flex-row-reverse xl:justify-end desk:gap-[8vw]">
      <div className="w-full xl:max-w-[262px] xl:mx-auto">
        <PhoneMockup className="w-full h-[64vw] max-h-[300px] lg:max-h-[500px]" />
      </div>
      <div className="w-full flex flex-col justify-center items-center text-center gap-6 lg:items-start lg:text-left xl:max-w-[546px]">
        <h1 className="leading-9 text-[32px] font-dmDisplay font-medium text-secondarySanJuanBlue tab:text-5xl tab:leading-[56px] tab:max-w-xl desk:text-7xl desk:leading-[73px] desk:max-w-[546px]">
          Start building with our APIs for absolutely free.
        </h1>
        <form
          onSubmit={(e) => handleEmailSubmit(e)}
          className="relative w-full flex flex-col gap-4 max-w-[445px] tab:flex-row"
        >
          <input
            id="email"
            type="email"
            name="email"
            aria-describedby="Enter email to schedule a demo"
            className="peer h-12 w-full px-7 py-3 rounded-3xl text-sm font-semibold tab:pr-48 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {doesEmailHaveValue || (
            <label
              className="absolute top-3 left-7 peer-focus:hidden pointer-events-none"
              htmlFor="email"
            >
              Enter email address
            </label>
          )}
          <button
            aria-label="Submit button with a email to schedule a demo"
            className="text-primaryWaterWhite primary-btn h-12 w-full tab:w-44 tab:absolute tab:top-0 tab:right-0"
            type="submit"
          >
            Schedule a Demo
          </button>
        </form>
        <p className="lg:px-7">
          Have any questions?
          <span className="font-semibold"> Contact Us</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
