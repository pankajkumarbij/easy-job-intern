//function which takes in the value of the input field and the validation rules(rules as dictionary)
//and currentPassword in case of confirmedPassword field and returns a error Message and a boolean value if theinput is valid or not
const checkValidity = (value, rules, currentPassword) => {
  let errorMessage = "";
  let isValid = true;

  if (!rules) {
    return true;
  }

  if (rules.required) {
    isValid = value.trim() !== "" && isValid;
    if (!isValid) {
      errorMessage = "Please fill the required field.";
    }
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
    if (!isValid) {
      errorMessage =
        "Required field length should be greater than " + rules.minLength;
    }
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
    if (!isValid) {
      errorMessage =
        "Required field length should be less than " + rules.maxLength;
    }
  }

  if (rules.Length) {
    isValid = value.length === rules.Length && isValid;
    if (!isValid) {
      errorMessage = "Required field length should be " + rules.Length;
    }
  }

  if (rules.isEmail) {
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    isValid = pattern.test(value) && isValid;
    if (!isValid) {
      errorMessage = "Required field should be a email";
    }
  }
  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
    if (!isValid) {
      errorMessage = "Required field should be a number";
    }
  }

  if (rules.checkPassword) {
    isValid = value === currentPassword && isValid;
    if (!isValid) {
      errorMessage = "Password donot match!";
    }
  }

  return [isValid, errorMessage];
};

export default checkValidity;
