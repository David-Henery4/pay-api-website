const checkForValueToHideLabel = (email) => {
  if (email.trim() !== "" && email.trim().length >= 1) {
    return true;
  }
  if (email.trim() === "" && email.trim().length <= 0) {
    return false;
  }
};

export default checkForValueToHideLabel