import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { useHistory, useParams } from "react-router-dom";
import checkValidity from "../../utils/checkValidation";

const UpdateFresherJob = () => {
  const history = useHistory();
  const postId = useParams().id;
  const [job, setJob] = useState();

  const initialState = {
    description: {
      value: null,
      //   validation: {
      //     required: true,
      //   },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    location: {
      value: null,
      //   validation: {
      //     required: true,
      //   },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    stream: {
      value: null,
      //   validation: {
      //     required: true,
      //   },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    industry: {
      value: null,
      //   validation: {
      //     required: true,
      //   },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    salary: {
      value: null,
      //   validation: {
      //     required: true,
      //   },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    techstack: {
      value: null,
      //   validation: {
      //     required: true,
      //   },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    lastDate: {
      value: null,
      //   validation: {
      //     required: true,
      //   },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    startDate: {
      value: null,
      //   validation: {
      //     required: true,
      //   },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    experience: {
      value: null,
      //   validation: {
      //     required: true,
      //   },
      errorMessage: "",
      valid: false,
      touched: false,
    },
  };

  const [formValues, setFormValues] = useState(initialState);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:5000/employer/get-freshersjob/${postId}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
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
          console.log(res.data.job);
          setJob(res.data.job);
          console.log(job);
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);

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

    const {
      description,
      location,
      salary,
      techstack,
      lastDate,
      startDate,
      stream,
      industry,
    } = formValues;

    axios({
      method: "patch",
      url: "http://localhost:5000/employer/update-fresherjob",
      data: {
        postId,
        description: description.value,
        location: location.value,
        salary: salary.value,
        techstack: techstack.value,
        lastDate: lastDate.value,
        startDate: startDate.value,
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
    <div style={{ padding: "4vh 0" }}>
      <Toaster />
      {job && (
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
            Update Fresher's Job
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
                  placeholder="Enter Location"
                  name="location"
                  value={formValues.location.value || job.location}
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
                  value={formValues.stream.value || job.stream}
                  onChange={handleChange}
                />
                {formValues.stream.errorMessage && (
                  <span className="error">
                    {formValues.stream.errorMessage}
                  </span>
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
                  value={formValues.industry.value || job.industry}
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
                <Form.Label style={{ fontWeight: "bold" }}>
                  Internship Description
                </Form.Label>
                <Form.Control
                  style={{ borderColor: "#ffc107", color: "#000000" }}
                  type="text"
                  placeholder="Enter description"
                  name="description"
                  value={formValues.description.value || job.description}
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
                <Form.Label style={{ fontWeight: "bold" }}>salary</Form.Label>
                <Form.Control
                  style={{ borderColor: "#ffc107", color: "#000000" }}
                  type="text"
                  placeholder="Enter salary"
                  name="salary"
                  value={formValues.salary.value || job.salary}
                  onChange={handleChange}
                />
                {formValues.salary.errorMessage && (
                  <span className="error">
                    {formValues.salary.errorMessage}
                  </span>
                )}
              </Form.Group>

              <Form.Group
                style={{ textAlign: "left" }}
                controlId="formBasicEmail"
              >
                <Form.Label style={{ fontWeight: "bold" }}>
                  TechStack
                </Form.Label>
                <Form.Control
                  style={{ borderColor: "#ffc107", color: "#000000" }}
                  type="text"
                  placeholder="Enter techstack"
                  name="techstack"
                  value={formValues.techstack.value || job.techstack}
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
                <Form.Label style={{ fontWeight: "bold" }}>
                  Last Date
                </Form.Label>
                <Form.Control
                  style={{ borderColor: "#ffc107", color: "#000000" }}
                  type="date"
                  placeholder="Enter last date"
                  name="lastDate"
                  value={formValues.lastDate.value || job.lastDate}
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
                  value={formValues.startDate.value || job.startDate}
                  onChange={handleChange}
                />
                {formValues.startDate.errorMessage && (
                  <span className="error">
                    {formValues.startDate.errorMessage}
                  </span>
                )}
              </Form.Group>

              {
                <Button
                  style={{ color: "#ffc107", fontWeight: "bold" }}
                  variant="secondary"
                  type="submit"
                  // disabled={!formIsValid}
                >
                  Update
                </Button>
              }
            </Form>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default UpdateFresherJob;
