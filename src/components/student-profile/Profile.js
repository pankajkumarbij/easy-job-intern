import React from "react";
import "./profile.css";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Label from "./Label";
import Skills from "./Skills";
import Input from "./Input";
import Achievments from "./Achievments";
import Volunteer from "./Volunteer";
import Other from "./Other";
import Project from "./Project";
import Experience from "./Experience";
import Education from "./Education";
import Start from "./Start";
import checkValidity from "../../utils/checkValidation";

const Profile = () => {
  const initialState = {
    FirstName: {
      value: null,
      validation: {
        required: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    LastName: {
      value: null,
      validation: {
        required: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    Address: {
      value: null,
      validation: {
        required: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    GithubLink: {
      value: null,
      errorMessage: "",
      valid: false,
      touched: false,
    },
    LinkedinLink: {
      value: null,
      errorMessage: "",
      valid: false,
      touched: false,
    },
    OtherLinks: {
      value: [],
      errorMessage: "",
      valid: false,
      touched: false,
    },
  };

  const [formValues, setFormValues] = useState(initialState);
  const [formIsValid, setFormIsValid] = useState(false);

  const handleChange = (e) => {
    const updatedFormValues = { ...formValues };
    const updatedFormElement = { ...updatedFormValues[e.target.name] };
    updatedFormElement.value = e.target.value;
    let validOutput = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
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

  console.log(formValues);

  const changeOtherLinksValue = (newValue) => {
    console.log(newValue);
    const updatedFormValues = { ...formValues };
    const name = "OtherLinks";
    const updatedFormElement = { ...updatedFormValues[name] };
    updatedFormElement.value = newValue;
    updatedFormElement.valid = true;
    updatedFormElement.errorMessage = "";
    updatedFormElement.touched = true;
    updatedFormValues[name] = updatedFormElement;

    setFormValues(updatedFormValues);

  };

  return (
    <>
      <div className="pt-5">
        <div className="main-box pt-4">
          <h1 className="ProfileBuilderheading">Student Profile Builder</h1>
          <h6 className="inst">
            Please Enter the details below to complete your student profile:-
          </h6>
          <Start
            General={formValues}
            handleChange={handleChange}
            changeOtherLinksValue={changeOtherLinksValue}
          />
          <Education />
          <Experience />
          <Project />
          <Skills />
          <Achievments />
          <Volunteer />
          <Other />
        </div>
        <br />
      </div>
    </>
  );
};

export default Profile;
