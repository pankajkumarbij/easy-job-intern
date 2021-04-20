import React, { useState } from "react";
import { Button, Form, Card, InputGroup } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import checkValidity from "../../utils/checkValidation";
import "./register.css";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import toast, { Toaster } from 'react-hot-toast';

const StudentSignup = () => {
  const history = useHistory();
  //creating a dicitionary for every field of the form
  const initialState = {
    personName: {
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
    degree: {
      value: "",
      validation: {
        required: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    institutionName: {
      value: "",
      validation: {
        required: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    branch: {
      value: "",
      validation: {
        required: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    year: {
      value: "",
      validation: {
        required: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
  };

  const [formValues, setFormValues] = useState(initialState);
  const [signupError, setSignupError] = useState(null);

  const [formIsValid ,setFormIsValid] = useState(false); //boolean to check that the whole form is valid or not

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
      personName,
      email,
      password,
      passwordConfirmation,
      contact,
      branch,
      year,
      degree,
      institutionName,
    } = formValues;

    e.preventDefault();
    if (!passwordIsValidChecker()) {
      setSignupError("Passwords do not match");
      return;
    } else {
      axios
        .post("http://localhost:5000/student/signup", {
          personName: personName.value,
          email: email.value,
          password: password.value,
          contact: contact.value,
          passwordConfirmation: passwordConfirmation.value,
          branch: branch.value,
          year: year.value,
          degree: degree.value,
          institutionName: institutionName.value,
        })
        .then((res) => {
          console.log(res.data.user);
          // alert(res.data.message);
          const notify = () => toast(res.data.message);
          notify();
          if(res.data.user){
            history.pushState("/student-login");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setFormValues(initialState);
  };
  const togglePasswordVisiblity = () => { // to handle visibility of passsword 
    
      setFormValues({...formValues, showPassword: !(formValues.showPassword)});
    
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
          className="register_card_custom"
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
            Student Signup
          </Card.Header>
          <Card.Body>
            <Form onSubmit={(e) => submitSignup(e)}>
              {/* Name of the student */}
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

              {/* Email address */}
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

              {/*  Password */}
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
                  type={formValues.showPassword?"text":"password"}
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
                      <InputGroup.Text style={{borderColor: "#ffc107", color: "#000000", height: "37px", width: "28px", paddingLeft:"1px",paddingRight:"1px" }}>
                        <IconButton style={{width: "25px"}}
                          onClick={togglePasswordVisiblity}
                        >
                          {formValues.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton> 
                      </InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
              </Form.Group>

              {/* Confirm Password */}
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
                    <InputGroup.Text style={{borderColor: "#ffc107", color: "#000000", height: "37px", width: "28px", paddingLeft:"1px",paddingRight:"1px" }}>
                      <IconButton style={{width: "25px"}}
                          onClick={togglePasswordVisiblity}
                      >
                        {formValues.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton> 
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>

              {/* Contact Number */}
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

              {/* Degree */}
              <Form.Group style={{ textAlign: "left" }}>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Which degree you are pursuing?
                </Form.Label>
                <Form.Control
                  className={`${
                    !formValues.degree.valid && formValues.degree.touched
                      ? "input-error"
                      : ""
                  }`}
                  style={{ borderColor: "#6EE2CD", color: "#000000" }}
                  type="text"
                  placeholder="Enter complete name of your degree"
                  name="degree"
                  value={formValues.degree.value}
                  onChange={handleChange}
                />
                {formValues.degree.errorMessage && (
                  <span className="error">
                    {formValues.degree.errorMessage}
                  </span>
                )}
              </Form.Group>

              {/* College Name */}
              <Form.Group
                style={{ textAlign: "left" }}
                controlId="formBasicName"
              >
                <Form.Label style={{ fontWeight: "bold" }}>
                  College Name
                </Form.Label>
                <Form.Control
                  className={`${
                    !formValues.institutionName.valid &&
                    formValues.institutionName.touched
                      ? "input-error"
                      : ""
                  }`}
                  style={{ borderColor: "#6EE2CD", color: "#000000" }}
                  type="text"
                  placeholder="Your college name"
                  name="institutionName"
                  value={formValues.institutionName.value}
                  onChange={handleChange}
                />
                {formValues.institutionName.errorMessage && (
                  <span className="error">
                    {formValues.institutionName.errorMessage}
                  </span>
                )}
              </Form.Group>

              {/* Branch of study */}
              <Form.Group style={{ textAlign: "left" }}>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Field of study
                </Form.Label>
                <Form.Control
                  className={`${
                    !formValues.branch.valid && formValues.branch.touched
                      ? "input-error"
                      : ""
                  }`}
                  style={{ borderColor: "#6EE2CD", color: "#000000" }}
                  type="text"
                  placeholder="Enter your field of study"
                  name="branch"
                  value={formValues.branch.value}
                  onChange={handleChange}
                />
                {formValues.branch.errorMessage && (
                  <span className="error">
                    {formValues.branch.errorMessage}
                  </span>
                )}
              </Form.Group>

              {/* Year of study */}
              <Form.Group style={{ textAlign: "left" }}>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Which year of college you are in?
                </Form.Label>
                <Form.Control
                  className={`${
                    !formValues.year.valid && formValues.year.touched
                      ? "input-error"
                      : ""
                  }`}
                  style={{ borderColor: "#6EE2CD", color: "#000000" }}
                  type="text"
                  placeholder="Enter your college year"
                  name="year"
                  value={formValues.year.value}
                  onChange={handleChange}
                />
                {formValues.year.errorMessage && (
                  <span className="error">{formValues.year.errorMessage}</span>
                )}
              </Form.Group>

              {/* Already a user? */}
              <Form.Group style={{ textAlign: "left", fontSize: "1.5vh" }}>
                <Link to="/student-login">
                  <a href="/#" style={{ fontWeight: "bold" }}>
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
export default StudentSignup;
