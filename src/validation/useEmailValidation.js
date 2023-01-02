import { useState } from "react";

const useEmailValidation = (callbackSubmit) => {
  const [emailError, setEmailError] = useState({
    isEmailError: false,
    msg: "",
  });
  //
  const validateEmail = (email) => {
    const trimmedEmail = email.trim();
    if (
      !new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).test(trimmedEmail)
    ) {
      setEmailError({
        isEmailError: true,
        msg: "Email format not valid",
      });
    } else {
      setEmailError({
        isEmailError: false,
        msg: "",
      });
      submitEmailConfirmation(trimmedEmail);
    }
  };
  //
  const submitEmailConfirmation = (email) => {
    callbackSubmit(email);
  };
  //
  return { validateEmail, emailError };
};

export default useEmailValidation;
