import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Alert } from "react-bootstrap";
import checkValidity from "../../utils/checkValidation";

import "./register.css";

function LoginForm() {
  const history = useHistory();
  //creating a dicitionary for every field of the form
  const initialState = {
    email: {
      //value of the input field
      value: "",
      //rules to check while validating the input
      validation: {
        required: true,
        isEmail: true,
      },
      //error messages to show in case any validation rule is not followed
      errorMessage: "",
      // boolean value to check if the whole input field is valid or not
      valid: false,
      //boolean value to check if the input field is touched or not
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
  };
  const [formValues, setFormValues] = useState(initialState);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

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
    const { email, password } = formValues;
    fetch("/student/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          console.log(data.error);
          setError(data.error);
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          window.location.reload(false);
          setSuccess("Sign in Success");
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
    <>
      <div className="box">
        <h1>Login</h1>
        <div style={{ maxWidth: "200px" }}>
          {showError()}
          {showSuccess()}
        </div>

        <div className="container">
          <Form onClick={() => clearAlert()}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <input
                className={`form-control ${
                  !formValues.email.valid && formValues.email.touched
                    ? "input-error"
                    : ""
                }`}
                type="email"
                name="email"
                placeholder="Enter Your Email Id"
                value={formValues.email.value}
                onChange={handleChange}
              />
              {formValues.email.errorMessage && (
                <span className="error">{formValues.email.errorMessage}</span>
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
                placeholder="Enter Your Password"
                value={formValues.password.value}
                onChange={handleChange}
              />
              {formValues.password.errorMessage && (
                <span className="error">
                  {formValues.password.errorMessage}
                </span>
              )}
            </Form.Group>
            <Button
              variant="success"
              onClick={() => PostData()}
              disabled={!formIsValid}
            >
              SignIn
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
export default LoginForm;
