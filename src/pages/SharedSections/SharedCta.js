import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import checkForValueToHideLabel from '../../validation/checkValueHideLabel'
import useEmailValidation from '../../validation/useEmailValidation'

const SharedCta = () => {
  const {pathname} = useLocation()
  const [email,setEmail] = useState("")
  const [doesEmailHaveValue, setDoesEmailHaveValue] = useState(false)
  //
  const handleEmailForValidation = (e) => {
    e.preventDefault()
    validateEmail(email)
  }
  //
  const handleEmailForSubmit = (finalEmail) => {
    console.log("Thank you for your request :)")
    setEmail("")
  }
  //
  const {emailError,validateEmail} = useEmailValidation(handleEmailForSubmit)
  //
  useEffect(() => {
    const result = checkForValueToHideLabel(email)
    setDoesEmailHaveValue(result)
  },[email])
  //
  useEffect(() => {
    console.log(pathname)
  },[])
  //
  return (
    <section className="col-start-2 col-end-12 text-center flex flex-col justify-center items-center gap-8 py-20 tab:py-24 tab:gap-10 lg:flex-row lg:justify-between">
      <h3 className="text-secondarySanJuanBlue text-[32px] font-dmDisplay tab:text-5xl">
        Ready to start?
      </h3>
      <form
        onSubmit={(e) => handleEmailForValidation(e)}
        className="relative w-full flex flex-col gap-4 max-w-[445px] tab:flex-row"
      >
        <input
          id="email"
          type="text"
          name="email"
          aria-describedby="Enter email to schedule a demo"
          className="input-auto-email text-secondarySanJuanBlue peer h-12 w-full px-7 py-3 rounded-3xl text-sm font-semibold tab:pr-48 outline-none"
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
        {emailError.isEmailError && (
          <p className="absolute -bottom-5 left-0 text-[11px] text-errorRed px-7">
            {emailError.msg}
          </p>
        )}
      </form>
    </section>
  );
}

export default SharedCta