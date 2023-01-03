import React from "react";
import useValidation from "../../validation/useValidation";
import { useState } from "react";
import { CheckIcon } from "../../assets";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    companyName: "",
    title: "",
    message: "",
    isOptedIn: false,
  });
  //
  const handleSubmitPreCheck = (e) => {
    e.preventDefault();
    inputValues(formValues);
  };
  //
  const handleSubmitPostCheck = (finalCheckedValues) => {
    console.log("Your request has been submited", finalCheckedValues);
    setFormValues({
      name: "",
      email: "",
      companyName: "",
      title: "",
      message: "",
      isOptedIn: false,
    });
  };
  //
  const {
    inputValues,
    companyError,
    emailError,
    messageError,
    nameError,
    titleError,
  } = useValidation(handleSubmitPostCheck);
  //
  //
  return (
    <form
      id="contact"
      action="submit"
      name="contact"
      className="flex flex-col justify-center items-start max-w-[445px] text-secondarySanJuanBlue"
      onSubmit={(e) => handleSubmitPreCheck(e)}
    >
      <div className="w-full grid gap-2">
        <input
          className={`input-auto-form text-secondarySanJuanBlue first:pt-0 pl-5 w-full py-6 bg-mainBgChilledWhite/0 border-b border-b-secondarySanJuanBlue/50 outline-none  ${
            nameError.isNameError && "placeholder:text-errorRed"
          } `}
          type="text"
          placeholder="Name"
          value={formValues.name}
          onChange={(e) =>
            setFormValues({ ...formValues, name: e.target.value })
          }
        />
        {/* NAME ERROR MESSAGE */}
        {nameError.isNameError && (
          <p className="pl-5 text-[11px] text-errorRed">{nameError.msg}</p>
        )}
      </div>
      <div className="w-full grid gap-2">
        <input
          className={`input-auto-form text-secondarySanJuanBlue  pl-5 w-full py-6 bg-mainBgChilledWhite/0 border-b border-b-secondarySanJuanBlue/50 outline-none ${
            emailError.isEmailError && "placeholder:text-errorRed"
          } `}
          type="text"
          placeholder="Email Address"
          value={formValues.email}
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }
        />
        {/* EMAIL ERROR MESSAGE */}
        {emailError.isEmailError && (
          <p className="pl-5 text-[11px] text-errorRed">{emailError.msg}</p>
        )}
      </div>
      <div className="w-full grid gap-2">
        <input
          className={`input-auto-form text-secondarySanJuanBlue  pl-5 w-full py-6 bg-mainBgChilledWhite/0 border-b border-b-secondarySanJuanBlue/50 outline-none ${
            companyError.isCompanyError && "placeholder:text-errorRed"
          } `}
          type="text"
          placeholder="Company Name"
          value={formValues.companyName}
          onChange={(e) =>
            setFormValues({ ...formValues, companyName: e.target.value })
          }
        />
        {/* COMPANY ERROR MESSAGE */}
        {companyError.isCompanyError && (
          <p className="pl-5 text-[11px] text-errorRed">{companyError.msg}</p>
        )}
      </div>
      <div className="w-full grid gap-2">
        <input
          className={`input-auto-form text-secondarySanJuanBlue pl-5 w-full py-6 bg-mainBgChilledWhite/0 border-b border-b-secondarySanJuanBlue/50 outline-none ${
            titleError.isTitleError && "placeholder:text-errorRed"
          } `}
          type="text"
          placeholder="Title"
          value={formValues.title}
          onChange={(e) =>
            setFormValues({ ...formValues, title: e.target.value })
          }
        />
        {/* TITLE ERROR MESSAGE */}
        {titleError.isTitleError && (
          <p className="pl-5 text-[11px] text-errorRed">{titleError.msg}</p>
        )}
      </div>
      <div className="w-full grid gap-2">
        <textarea
          className={`input-auto-form text-secondarySanJuanBlue  w-full py-6 bg-mainBgChilledWhite/0 border-b border-b-secondarySanJuanBlue/50 outline-none resize-none pl-5 ${
            messageError.isMessageError && "placeholder:text-errorRed"
          } `}
          name="message"
          id="message"
          placeholder="Message"
          value={formValues.message}
          onChange={(e) =>
            setFormValues({ ...formValues, message: e.target.value })
          }
        ></textarea>
        {/* MESSAGE ERROR MESSAGE */}
        {messageError.isMessageError && (
          <p className="pl-5 text-[11px] text-errorRed">{messageError.msg}</p>
        )}
      </div>
      <div className="w-full flex justify-center items-center py-6 gap-6">
        <label className="checkbox-label">
          <input
            name="checkbox"
            id="checkbox"
            type="checkbox"
            className="checkbox-input hover:cursor-pointer"
            onChange={(e) => {
              setFormValues({
                ...formValues,
                isOptedIn: !formValues.isOptedIn,
              });
            }}
            checked={formValues.isOptedIn}
          />
          {formValues.isOptedIn && (
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
};

export default ContactForm;
