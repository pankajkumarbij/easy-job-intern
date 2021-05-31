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
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router";

const Profile = () => {
  const history = useHistory();
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
    Education: {
      value: [],
      errorMessage: "",
      valid: false,
      touched: false,
    },
    Experience: {
      value: [],
      errorMessage: "",
      valid: false,
      touched: false,
    },
    Project: {
      value: [],
      errorMessage: "",
      valid: false,
      touched: false,
    },
    Skills: {
      value: [],
      errorMessage: "",
      valid: false,
      touched: false,
    },
    Achievments: {
      value: [],
      errorMessage: "",
      valid: false,
      touched: false,
    },
    VolunteerExperience: {
      value: [],
      errorMessage: "",
      valid: false,
      touched: false,
    },
    Other: {
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

  const changeValue = (newValue, name) => {
    console.log(newValue);
    const updatedFormValues = { ...formValues };
    // const name = "OtherLinks";
    const updatedFormElement = { ...updatedFormValues[name] };
    updatedFormElement.value = newValue;
    updatedFormElement.valid = true;
    updatedFormElement.errorMessage = "";
    updatedFormElement.touched = true;
    updatedFormValues[name] = updatedFormElement;

    setFormValues(updatedFormValues);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(typeof formValues.startDate.value);
    // const duration =
    //   new Date(formValues.endDate.value) - new Date(formValues.startDate.value);
    // console.log(duration);

    axios({
      method: "post",
      url: "http://localhost:5000/student/buildprofile",
      data: {
        Profile: {
          General: {
            FirstName: formValues.FirstName.value,
            LastName: formValues.LastName.value,
            Address: formValues.Address.value,
            GithubLink: formValues.GithubLink.value,
            LinkedInLink: formValues.LinkedinLink.value,
            OtherProfileLink: formValues.OtherLinks.value,
          },
          Education: formValues.Education.value,
          Experience: formValues.Experience.value,
          Project: formValues.Project.value,
          Skills: formValues.Skills.value,
          Achievments: formValues.Achievments.value,
          Other: formValues.Other.value,
          VolunteerExperience: formValues.VolunteerExperience.value,
        },
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.error) {
          console.log(res.data.error);
          // alert(res.data.error);
          const notify = () => toast(res.data.error);
          notify();
        } else {
          // setInitialValue(description, )
          const notify = () => toast(res.data.message);
          notify();
          history.push("/");
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
      });

    setFormValues(initialState);
  };

  return (
    <>
      <div className="pt-5">
        <Toaster />
        <div className="main-box pt-4">
          <h1 className="ProfileBuilderheading">Student Profile Builder</h1>
          <h6 className="inst">
            Please Enter the details below to complete your student profile:-
          </h6>
          <Start
            General={formValues}
            handleChange={handleChange}
            changeOtherLinksValue={changeValue}
          />
          <Education
            Education={formValues.Education}
            changeValue={changeValue}
          />
          <Experience
            Experience={formValues.Experience}
            changeValue={changeValue}
          />
          <Project Project={formValues.Project} changeValue={changeValue} />
          <Skills Skills={formValues.Skills} changeValue={changeValue} />
          <Achievments
            Achievments={formValues.Achievments}
            changeValue={changeValue}
          />
          <Volunteer
            VolunteerExperience={formValues.VolunteerExperience}
            changeValue={changeValue}
          />
          <Other Others={formValues.Other} changeValue={changeValue} />
          <div className="buttonProfileDiv">
            <Button className="buttonProfile" onClick={submitHandler}>
              <div className="btnprofile">Save Profile</div>
            </Button>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default Profile;
