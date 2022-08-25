

const commonMessage = {
  maxLength: "12 character should be max length",
  minLength: "Name should be 3 to 12 characters",
  isAlpha: "Name must contain characters in name",
  isEmptyString: "please enter username",
  isEmail: "Please enter a valid email address",
  isDate: "User must be of age 18 years or above"
};

const passwordError = {
  equalsField: "Password and confirm password does not match",
  minLength: "password must contain at least 8 characters",
  maxLength: "25 character should be max length",
  isLength: "password must contain at least 8 characters",
};
const usernameError = {
  isAlphanumeric: "Username must be alphanumeric",
  maxLength: "16 character should be max length",
  minLength: "username must be at least 6 to 15 characters in length",
};

function useErrors(props) {
  return {commonMessage,passwordError,usernameError};
}

export default useErrors;
