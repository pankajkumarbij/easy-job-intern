import React, { Component, useState } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import checkValidity from "../../utils/checkValidation";
import "./employer.css";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import toast, { Toaster } from 'react-hot-toast';

const EmployerSignup = () => {
  const history = useHistory();
  //listing initial states of the fields present in the form
  const initialState = {
    companyName: {
      value: "",
      validation: {
        required: true,
        minLength: 3,
      },
      errorMessage: "",
      valid: false,
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
    passwordConfirmation: {
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
    showPassword: false,

    contact: {
      value: "",
      validation: {
        required: true,
        Length: 10,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    personName: {
      value: "",
      validation: {
        required: true,
        minLength: 5,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
  };

  const [formValues, setFormValues] = useState(initialState);
  const [signupError, setSignupError] = useState(null);

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

  const passwordIsValidChecker = () => {
    const { password, passwordConfirmation } = formValues;
    return password.value === passwordConfirmation.value;
  };

  const submitSignup = (e) => {
    const {
      companyName,
      email,
      password,
      passwordConfirmation,
      personName,
      contact,
    } = formValues;

    e.preventDefault();
    if (!passwordIsValidChecker()) {
      setSignupError("Passwords do not match");
      return;
    } else {
      axios
        .post("http://localhost:5000/employer/signup", {
          personName: personName.value,
          email: email.value,
          password: password.value,
          contact: contact.value,
          passwordConfirmation: passwordConfirmation.value,
          companyName: companyName.value,
        })
        .then((res) => {
          console.log(res.data.user);
          // alert(res.data.message);
          const notify = () => toast(res.data.message);
          notify();
          if(res.data.user){
            history.push("/employer-login");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setFormValues(initialState);
  };
  const togglePasswordVisiblity = () => {
    setFormValues({ ...formValues, showPassword: !formValues.showPassword });
  };

  return (
    <>
      <div style={{ padding: "4vh 0" }}>
        <Toaster />
        <Card
          style={{
            width: "40vw",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "4vh",
            marginBottom: "4vh",
            backgroundImage: "linear-gradient(to right, white , #6EE2CD)",
          }}
          className="employer_form_card_custom"
        >
          <Card.Header
            style={{
              backgroundColor: "#6c6c6c",
              color: "#6EE2CD",
              fontFamily: '"Merriweather", serif',
              fontSize: "1.25rem",
            }}
            as="h5"
          >
            Employer Signup
          </Card.Header>
          <Card.Body>
            <Form onSubmit={(e) => submitSignup(e)}>
              {/* Name of the company */}
              <Form.Group style={{ textAlign: "left" }}>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Company Name
                </Form.Label>
                <Form.Control
                  className={`${
                    !formValues.companyName.valid &&
                    formValues.companyName.touched
                      ? "input-error"
                      : ""
                  }`}
                  style={{ borderColor: "#6EE2CD", color: "#000000" }}
                  type="text"
                  placeholder="Enter the company name"
                  name="companyName"
                  value={formValues.companyName.value}
                  onChange={handleChange}
                />
                {formValues.companyName.errorMessage && (
                  <span className="error">
                    {formValues.companyName.errorMessage}
                  </span>
                )}
              </Form.Group>

              {/*Email  */}
              <Form.Group
                style={{ textAlign: "left" }}
                controlId="formBasicEmail"
              >
                <Form.Label style={{ fontWeight: "bold" }}>
                  Email address
                </Form.Label>
                <Form.Control
                  className={`${
                    !formValues.email.valid && formValues.email.touched
                      ? "input-error"
                      : ""
                  }`}
                  style={{ borderColor: "#6EE2CD", color: "#000000" }}
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formValues.email.value}
                  onChange={handleChange}
                />
                {formValues.email.errorMessage && (
                  <span className="error">{formValues.email.errorMessage}</span>
                )}
              </Form.Group>

              {/* Password */}
              <Form.Group
                style={{ textAlign: "left" }}
                controlId="formBasicPassword"
              >
                <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    className={`${
                      !formValues.password.valid && formValues.password.touched
                        ? "input-error"
                        : ""
                    }`}
                    style={{ borderColor: "#6EE2CD", color: "#000000" }}
                    type={formValues.showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    value={formValues.password.value}
                    onChange={handleChange}
                  />
                  {formValues.password.errorMessage && (
                    <span className="error">
                      {formValues.password.errorMessage}
                    </span>
                  )}
                  <InputGroup.Append>
                    <InputGroup.Text
                      style={{
                        borderColor: "#6EE2CD",
                        color: "#000000",
                        height: "37px",
                        width: "28px",
                        paddingLeft: "1px",
                        paddingRight: "1px",
                      }}
                    >
                      <IconButton
                        style={{ width: "25px" }}
                        onClick={togglePasswordVisiblity}
                      >
                        {formValues.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
              {/* Password Confirmation */}
              <Form.Group
                style={{ textAlign: "left", marginBottom: "1.6vh" }}
                controlId="formBasicPassword"
              >
                <Form.Label style={{ fontWeight: "bold" }}>
                  Confirm Password
                </Form.Label>
                <InputGroup>
                  <Form.Control
                    className={`${
                      !formValues.passwordConfirmation.valid &&
                      formValues.passwordConfirmation.touched
                        ? "input-error"
                        : ""
                    }`}
                    style={{ borderColor: "#6EE2CD", color: "#000000" }}
                    type="password"
                    placeholder="Re-enter Password"
                    name="passwordConfirmation"
                    value={formValues.passwordConfirmation.value}
                    onChange={handleChange}
                  />
                  {formValues.passwordConfirmation.errorMessage && (
                    <span className="error">
                      {formValues.passwordConfirmation.errorMessage}
                    </span>
                  )}
                  <InputGroup.Append>
                    <InputGroup.Text
                      style={{
                        borderColor: "#6EE2CD",
                        color: "#000000",
                        height: "37px",
                        width: "28px",
                        paddingLeft: "1px",
                        paddingRight: "1px",
                      }}
                    >
                      <IconButton
                        style={{ width: "25px" }}
                        onClick={togglePasswordVisiblity}
                      >
                        {formValues.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
              {/* Person Name */}
              <Form.Group style={{ textAlign: "left" }}>
                <Form.Label style={{ fontWeight: "bold" }}>Name</Form.Label>
                <Form.Control
                  className={`${
                    !formValues.personName.valid &&
                    formValues.personName.touched
                      ? "input-error"
                      : ""
                  }`}
                  style={{ borderColor: "#6EE2CD", color: "#000000" }}
                  type="text"
                  placeholder="Enter your name"
                  name="personName"
                  value={formValues.personName.value}
                  onChange={handleChange}
                />
                {formValues.personName.errorMessage && (
                  <span className="error">
                    {formValues.personName.errorMessage}
                  </span>
                )}
              </Form.Group>

              {/* contact */}
              <Form.Group style={{ textAlign: "left" }}>
                <Form.Label style={{ fontWeight: "bold" }}>Contact</Form.Label>
                <Form.Control
                  className={`${
                    !formValues.contact.valid && formValues.contact.touched
                      ? "input-error"
                      : ""
                  }`}
                  style={{ borderColor: "#6EE2CD", color: "#000000" }}
                  type="number"
                  placeholder="Enter your contact number"
                  name="contact"
                  value={formValues.contact.value}
                  onChange={handleChange}
                />
                {formValues.contact.errorMessage && (
                  <span className="error">
                    {formValues.contact.errorMessage}
                  </span>
                )}
              </Form.Group>
              {/* For Existing user */}
              <Form.Group style={{ textAlign: "left", fontSize: "1.5vh" }}>
                <Link to="/employer-login">
                  <a style={{ fontWeight: "bold" }}>
                    Already have an account? Sign in
                  </a>
                </Link>
              </Form.Group>

              {signupError ? (
                <Form.Text
                  style={{ paddingBottom: "0.6vh", fontWeight: "bold" }}
                  className="text-danger"
                >
                  {signupError}
                </Form.Text>
              ) : null}
              <Button
                style={{ color: "#6EE2CD", fontWeight: "bold" }}
                variant="secondary"
                type="submit"
              >
                Register
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default EmployerSignup;
