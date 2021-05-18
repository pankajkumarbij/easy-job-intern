import axios from "axios";
import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import checkValidity from "../../utils/checkValidation";

const NewJob = () => {
  const history = useHistory();

  const initialState = {
    companyName: {
      //value of the input field
      value: "",
      //rules to check while validating the input
      validation: {
        required: true,
      },
      //error messages to show in case any validation rule is not followed
      errorMessage: "",
      // boolean value to check if the whole input field is valid or not
      valid: false,
      //boolean value to check if the input field is touched or not
      touched: false,
    },
    description: {
      value: "",
      validation: {
        required: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    location: {
      value: "",
      validation: {
        required: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    stream: {
      value: "",
      validation: {
        required: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    industry: {
      value: "",
      validation: {
        required: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    salary: {
      value: "",
      validation: {
        required: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    techstack: {
      value: "",
      validation: {
        required: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    lastDate: {
      value: "",
      validation: {
        required: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    startDate: {
      value: "",
      validation: {
        required: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    experience: {
      value: "",
      validation: {
        required: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    role: {
      value: "",
      validation: {
        required: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    vacancies: {
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
  const [formIsValid, setFormIsValid] = useState(false);
  console.log(formValues);

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

  const submitJob = (e) => {
    e.preventDefault();

    const {
      companyName,
      description,
      location,
      salary,
      techstack,
      lastDate,
      startDate,
      experience,
      role,
      vacancies,
      industry,
      stream,
    } = formValues;

    axios({
      method: "post",
      url: "http://localhost:5000/employer/create-job",
      data: {
        companyName: companyName.value,
        description: description.value,
        location: location.value,
        salary: salary.value,
        techstack: techstack.value,
        lastDate: lastDate.value,
        startDate: startDate.value,
        experience: experience.value,
        role: role.value,
        vacancies: vacancies.value,
        industry: industry.value,
        stream: stream.value,
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
          const notify = () => toast("Signin Successfull");
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
    <div style={{ padding: "4vh 0" }}>
      <Toaster />
      <Card
        style={{
          width: "40vw",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "4vh",
          marginBottom: "4vh",
          backgroundImage: "linear-gradient(to right, white , #ffc107)",
        }}
        className="register_card_custom"
      >
        <Card.Header
          style={{
            backgroundColor: "#6c6c6c",
            color: "#ffc107",
            fontFamily: '"Merriweather", serif',
            fontSize: "1.25rem",
          }}
          as="h5"
        >
          New Job
        </Card.Header>
        <Card.Body>
          <Form onSubmit={(e) => submitJob(e)}>
            <Form.Group
              style={{ textAlign: "left" }}
              controlId="formBasicEmail"
            >
              <Form.Label style={{ fontWeight: "bold" }}>
                Company Name
              </Form.Label>
              <Form.Control
                style={{ borderColor: "#ffc107", color: "#000000" }}
                type="text"
                placeholder="Enter Company Name"
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

            <Form.Group
              style={{ textAlign: "left" }}
              controlId="formBasicEmail"
            >
              <Form.Label style={{ fontWeight: "bold" }}>Location</Form.Label>
              <Form.Control
                style={{ borderColor: "#ffc107", color: "#000000" }}
                type="text"
                placeholder="Enter Company Name"
                name="location"
                value={formValues.location.value}
                onChange={handleChange}
              />
              {formValues.location.errorMessage && (
                <span className="error">
                  {formValues.location.errorMessage}
                </span>
              )}
            </Form.Group>

            <Form.Group
              style={{ textAlign: "left" }}
              controlId="formBasicEmail"
            >
              <Form.Label style={{ fontWeight: "bold" }}>Stream</Form.Label>
              <Form.Control
                style={{ borderColor: "#ffc107", color: "#000000" }}
                type="text"
                placeholder="Enter Stream"
                name="stream"
                value={formValues.stream.value}
                onChange={handleChange}
              />
              {formValues.stream.errorMessage && (
                <span className="error">{formValues.stream.errorMessage}</span>
              )}
            </Form.Group>

            <Form.Group
              style={{ textAlign: "left" }}
              controlId="formBasicEmail"
            >
              <Form.Label style={{ fontWeight: "bold" }}>Industry</Form.Label>
              <Form.Control
                style={{ borderColor: "#ffc107", color: "#000000" }}
                type="text"
                placeholder="Enter Industry"
                name="industry"
                value={formValues.industry.value}
                onChange={handleChange}
              />
              {formValues.industry.errorMessage && (
                <span className="error">
                  {formValues.industry.errorMessage}
                </span>
              )}
            </Form.Group>

            <Form.Group
              style={{ textAlign: "left" }}
              controlId="formBasicEmail"
            >
              <Form.Label style={{ fontWeight: "bold" }}>Role</Form.Label>
              <Form.Control
                style={{ borderColor: "#ffc107", color: "#000000" }}
                type="text"
                placeholder="Enter Job role"
                name="role"
                value={formValues.role.value}
                onChange={handleChange}
              />
              {formValues.role.errorMessage && (
                <span className="error">{formValues.role.errorMessage}</span>
              )}
            </Form.Group>

            <Form.Group
              style={{ textAlign: "left" }}
              controlId="formBasicEmail"
            >
              <Form.Label style={{ fontWeight: "bold" }}>
                Job Description
              </Form.Label>
              <Form.Control
                style={{ borderColor: "#ffc107", color: "#000000" }}
                type="text"
                placeholder="Enter description"
                name="description"
                value={formValues.description.value}
                onChange={handleChange}
              />
              {formValues.description.errorMessage && (
                <span className="error">
                  {formValues.description.errorMessage}
                </span>
              )}
            </Form.Group>

            <Form.Group
              style={{ textAlign: "left" }}
              controlId="formBasicEmail"
            >
              <Form.Label style={{ fontWeight: "bold" }}>Salaray</Form.Label>
              <Form.Control
                style={{ borderColor: "#ffc107", color: "#000000" }}
                type="text"
                placeholder="Enter salary"
                name="salary"
                value={formValues.salary.value}
                onChange={handleChange}
              />
              {formValues.salary.errorMessage && (
                <span className="error">{formValues.salary.errorMessage}</span>
              )}
            </Form.Group>

            <Form.Group
              style={{ textAlign: "left" }}
              controlId="formBasicEmail"
            >
              <Form.Label style={{ fontWeight: "bold" }}>TechStack</Form.Label>
              <Form.Control
                style={{ borderColor: "#ffc107", color: "#000000" }}
                type="text"
                placeholder="Enter techstack"
                name="techstack"
                value={formValues.techstack.value}
                onChange={handleChange}
              />
              {formValues.techstack.errorMessage && (
                <span className="error">
                  {formValues.techstack.errorMessage}
                </span>
              )}
            </Form.Group>

            <Form.Group
              style={{ textAlign: "left" }}
              controlId="formBasicEmail"
            >
              <Form.Label style={{ fontWeight: "bold" }}>Last Date</Form.Label>
              <Form.Control
                style={{ borderColor: "#ffc107", color: "#000000" }}
                type="date"
                placeholder="Enter last date"
                name="lastDate"
                value={formValues.lastDate.value}
                onChange={handleChange}
              />
              {formValues.lastDate.errorMessage && (
                <span className="error">
                  {formValues.lastDate.errorMessage}
                </span>
              )}
            </Form.Group>

            <Form.Group
              style={{ textAlign: "left" }}
              controlId="formBasicEmail"
            >
              <Form.Label style={{ fontWeight: "bold" }}>
                Start Month
              </Form.Label>
              <Form.Control
                style={{ borderColor: "#ffc107", color: "#000000" }}
                type="month"
                placeholder="Enter start month"
                name="startDate"
                value={formValues.startDate.value}
                onChange={handleChange}
              />
              {formValues.startDate.errorMessage && (
                <span className="error">
                  {formValues.startDate.errorMessage}
                </span>
              )}
            </Form.Group>

            <Form.Group
              style={{ textAlign: "left" }}
              controlId="formBasicEmail"
            >
              <Form.Label style={{ fontWeight: "bold" }}>Experience</Form.Label>
              <Form.Control
                style={{ borderColor: "#ffc107", color: "#000000" }}
                type="number"
                placeholder="Enter number of years of experience"
                name="experience"
                value={formValues.experience.value}
                onChange={handleChange}
              />
              {formValues.experience.errorMessage && (
                <span className="error">
                  {formValues.experience.errorMessage}
                </span>
              )}
            </Form.Group>

            <Form.Group
              style={{ textAlign: "left" }}
              controlId="formBasicEmail"
            >
              <Form.Label style={{ fontWeight: "bold" }}>Vacancies</Form.Label>
              <Form.Control
                style={{ borderColor: "#ffc107", color: "#000000" }}
                type="text"
                placeholder="Enter number of vacancies"
                name="vacancies"
                value={formValues.vacancies.value}
                onChange={handleChange}
              />
              {formValues.vacancies.errorMessage && (
                <span className="error">
                  {formValues.vacancies.errorMessage}
                </span>
              )}
            </Form.Group>

            {
              <Button
                style={{ color: "#ffc107", fontWeight: "bold" }}
                variant="secondary"
                type="submit"
                disabled={!formIsValid}
              >
                Create
              </Button>
            }
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewJob;
