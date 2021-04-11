// import axios from "axios";
import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
// import { useHistory } from "react-router-dom";
import checkValidity from "../../utils/checkValidation";

const UpdateInternship = () => {
  // const history = useHistory();

  const initialState = {
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
    stipend: {
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
    endDate: {
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

  const submitInternship = (e) => {
    e.preventDefault();
    // console.log(typeof formValues.startDate.value);
    // const duration =
    //   new Date(formValues.endDate.value) - new Date(formValues.startDate.value);
    // console.log(duration);

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
          Update Internship
        </Card.Header>
        <Card.Body>
          <Form onSubmit={(e) => submitInternship(e)}>
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
              <Form.Label style={{ fontWeight: "bold" }}>
                Internship Description
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
              <Form.Label style={{ fontWeight: "bold" }}>Stipend</Form.Label>
              <Form.Control
                style={{ borderColor: "#ffc107", color: "#000000" }}
                type="text"
                placeholder="Enter stipend"
                name="stipend"
                value={formValues.stipend.value}
                onChange={handleChange}
              />
              {formValues.stipend.errorMessage && (
                <span className="error">{formValues.stipend.errorMessage}</span>
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
                placeholder="Enter start date"
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
              <Form.Label style={{ fontWeight: "bold" }}>End Month</Form.Label>
              <Form.Control
                style={{ borderColor: "#ffc107", color: "#000000" }}
                type="month"
                placeholder="Enter end date"
                name="endDate"
                value={formValues.endDate.value}
                onChange={handleChange}
              />
              {formValues.endDate.errorMessage && (
                <span className="error">{formValues.endDate.errorMessage}</span>
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

export default UpdateInternship;
