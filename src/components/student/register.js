import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import checkValidity from "../../utils/checkValidation";
import "./register.css";

const RegisterForm = () => {
  //creating a dicitionary for every field of the form
  const initialState = {
    name: {
      //value of the input field
      value: "",
      //rules to check while validating the input
      validation: {
        required: true,
        minLength: 5,
      },
      //error messages to show in case any validation rule is not followed
      errorMessage: "",
      // boolean value to check if the whole input field is valid or not
      valid: false,
      //boolean value to check if the input field is touched or not
      touched: false,
    },
    email: {
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    mobile: {
      value: "",
      validation: {
        required: true,
        Length: 10,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    password: {
      value: "",
      validation: {
        required: true,
        minLength: 8,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    confirmPassword: {
      value: "",
      validation: {
        required: true,
        minLength: 8,
        checkPassword: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
  };
  const [formValues, setFormValues] = useState(initialState);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formIsValid, setFormIsValid] = useState(false); //boolean to check that the whole form is valid or not

  const handleChange = (e) => {
    const updatedFormValues = { ...formValues };
    const updatedFormElement = { ...updatedFormValues[e.target.name] };
    updatedFormElement.value = e.target.value;
    let validOutput = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation,
      updatedFormValues.password.value
    );
    updatedFormElement.valid = validOutput[0];
    updatedFormElement.errorMessage = validOutput[1];
    updatedFormElement.touched = true;
    updatedFormValues[e.target.name] = updatedFormElement;

    let formValid = true;
    for (let inputIdentifiers in updatedFormValues) {
      formValid = updatedFormValues[inputIdentifiers].valid && formValid;
    }
    setFormValues(updatedFormValues);
    setFormIsValid(formValid);
  };

  const PostData = () => {
    const { name, email, mobile, password, confirmPassword } = formValues;
    fetch("/student/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
        mobile: mobile.value,
        confirmPassword: confirmPassword.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          console.log(data.error);
          setError(data.error);
        } else {
          setSuccess(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setFormValues(initialState);
  };

  const showError = () =>
    error ? <Alert variant="danger"> {error} </Alert> : "";
  const showSuccess = () =>
    success ? <Alert variant="success"> {success} </Alert> : "";

  const clearAlert = () => {
    setError("");
    setSuccess("");
  };

  return (
    <div className="box">
      <h1>SignUp</h1>
      <div style={{ maxWidth: "200px" }}>
        {showError()}
        {showSuccess()}
      </div>
      <div className="container register">
        <Form onClick={() => clearAlert()}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <input
              className={`form-control ${
                !formValues.name.valid && formValues.name.touched
                  ? "input-error"
                  : ""
              }`}
              placeholder="Your Name"
              name="name"
              value={formValues.name.value}
              onChange={handleChange}
            />
            {formValues.name.errorMessage && (
              <span className="error">{formValues.name.errorMessage}</span>
            )}
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <input
              className={`form-control ${
                !formValues.email.valid && formValues.email.touched
                  ? "input-error"
                  : ""
              }`}
              placeholder="Your Email Id"
              name="email"
              value={formValues.email.value}
              onChange={handleChange}
            />
            {formValues.email.errorMessage && (
              <span className="error">{formValues.email.errorMessage}</span>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Mobile Number</Form.Label>
            <input
              className={`form-control ${
                !formValues.mobile.valid && formValues.mobile.touched
                  ? "input-error"
                  : ""
              }`}
              type="Number"
              name="mobile"
              placeholder="Your Mobile Number"
              value={formValues.mobile.value}
              onChange={handleChange}
            />
            {formValues.mobile.errorMessage && (
              <span className="error">{formValues.mobile.errorMessage}</span>
            )}
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <input
              className={`form-control ${
                !formValues.password.valid && formValues.password.touched
                  ? "input-error"
                  : ""
              }`}
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password.value}
              onChange={handleChange}
            />
            {formValues.password.errorMessage && (
              <span className="error">{formValues.password.errorMessage}</span>
            )}
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <input
              className={`form-control ${
                !formValues.confirmPassword.valid &&
                formValues.confirmPassword.touched
                  ? "input-error"
                  : ""
              }`}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formValues.confirmPassword.value}
              onChange={handleChange}
            />
            {formValues.confirmPassword.errorMessage && (
              <span className="error">
                {formValues.confirmPassword.errorMessage}
              </span>
            )}
          </Form.Group>
          <Button
            variant="success"
            onClick={() => PostData()}
            disabled={!formIsValid} //disabling the
          >
            SignUp
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
