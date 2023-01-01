import { useEffect, useState } from "react";

const useValidation = (callbackSubmit) => {
  //
  // FINAL VALUES
  const [values, setValues] = useState({});
  //
  // ERRORS
  const [emailError, setEmailError] = useState({
    isEmailError: false,
    msg: "",
  });
  const [nameError, setNameError] = useState({
    isNameError: false,
    msg: "",
  });
  const [titleError, setTitleError] = useState({
    isTitleError: false,
    msg: "",
  });
  const [companyError, setCompanyError] = useState({
    isCompanyError: false,
    msg: "",
  });
  const [messageError, setMessageError] = useState({
    isMessageError: false,
    msg: "",
  });
  //
  // CHECK FOR EMPTY STRING
  const checkIfEmpty = (value) => {
    return value === "" ? true : false;
  };
  //
  // VALIDATING INDIVIDUAL VALUES
  //
  // EMAIL
  const validateEmail = (initialValue) => {
    const trimmedValue = initialValue.trim();
    const isEmpty = checkIfEmpty(trimmedValue);
    if (isEmpty) {
      setEmailError({ isEmailError: true, msg: "This field can't be empty" });
    }
    if (
      !new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ).test(trimmedValue)
    ) {
      setEmailError({isEmailError: true, msg: "Wrong email format"})
    } else{
      setEmailError({isEmailError: false, msg: ""})
      setValues((oldValues) => {
        return {...oldValues, trimmedValue}
      })
    }
  };
  // NAME
  const validateName = (initialValue) => {
    const trimmedValue = initialValue.trim();
    const isEmpty = checkIfEmpty(trimmedValue);
    if (isEmpty) {
      setNameError({ isNameError: true, msg: "This field can't be empty" });
    }
    if (!isEmpty) {
      setNameError({ isNameError: false, msg: "" });
      setValues((oldValues) => {
        return { ...oldValues, name: trimmedValue };
      });
    }
  };
  // COMPANY NAME
  const validateCompany = (initialValue) => {
    const trimmedValue = initialValue.trim();
    const isEmpty = checkIfEmpty(trimmedValue);
    if (isEmpty) {
      setCompanyError({
        isCompanyError: true,
        msg: "This field can't be empty",
      });
    }
    if (!isEmpty) {
      setCompanyError({ isCompanyError: false, msg: "" });
      setValues((oldValues) => {
        return { ...oldValues, companyName: trimmedValue };
      });
    }
  };
  // TITLE
  const validateTitle = (initialValue) => {
    const trimmedValue = initialValue.trim();
    const isEmpty = checkIfEmpty(trimmedValue);
    if (isEmpty) {
      setTitleError({ isTitleError: true, msg: "This field can't be empty" });
    }
    if (!isEmpty) {
      setTitleError({ isTitleError: false, msg: "" });
      setValues((oldValues) => {
        return { ...oldValues, title: trimmedValue };
      });
    }
  };
  //
  const validateMessage = (initialValue) => {
    const trimmedValue = initialValue.trim();
    const isEmpty = checkIfEmpty(trimmedValue);
    if (isEmpty) {
      setMessageError({
        isMessageError: true,
        msg: "This field can't be empty",
      });
    }
    if (!isEmpty) {
      setMessageError({ isMessageError: false, msg: "" });
      setValues((oldValues) => {
        return { ...oldValues, message: trimmedValue };
      });
    }
  };
  //
  // TAKING ORIGINAL INPUT VALUES
  const inputValues = ({
    name,
    email,
    companyName,
    title,
    message,
    isOptedIn,
  }) => {
    validateCompany(companyName);
    validateEmail(email);
    validateMessage(message);
    validateName(name);
    validateTitle(title);
    setValues((oldValues) => {
      return { ...oldValues, isOptedIn };
    });
  };
  //
  // SUBMITING FINAL VALUES ONCE ALL VALID
  const submitConfirmation = () => {
    if (!emailError.isEmailError && !nameError.isNameError && !companyError.isCompanyError && !titleError.isTitleError && !messageError.isMessageError && Object.entries(values).length >= 1 ){
      callbackSubmit(values)
    }
  };
  //
  useEffect(() => {
    submitConfirmation()
  },[values])
  //
  return {
    inputValues,
    companyError,
    emailError,
    nameError,
    messageError,
    titleError,
  };
};

export default useValidation;
