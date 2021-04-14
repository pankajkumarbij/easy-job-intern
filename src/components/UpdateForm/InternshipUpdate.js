import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import toast, { Toaster } from "react-hot-toast";
import { useHistory, useParams } from "react-router-dom";
import checkValidity from "../../utils/checkValidation";

const UpdateInternship = () => {
  const history = useHistory();
  const postId = useParams().id;
  const [internship, setInternship] = useState();

  const initialState = {
    description: {
      value: null,
      validation: {
        required: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    location: {
      value: null,
      validation: {
        required: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    stipend: {
      value: null,
      validation: {
        required: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    techstack: {
      value: null,
      validation: {
        required: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    lastDate: {
      value: null,
      validation: {
        required: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    startDate: {
      value: null,
      validation: {
        required: true,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    endDate: {
      value: null,
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

  // const setInitialValue = () => {
  // const updatedFormElementD = { ...updatedFormValues["description"] };
  // const updatedFormElementL = { ...updatedFormValues["location"] };
  // const updatedFormElementS = { ...updatedFormValues["stipend"] };
  // const updatedFormElementTS = { ...updatedFormValues["techstack"] };
  // const updatedFormElementLD = { ...updatedFormValues["lastDate"] };
  // const updatedFormElementSD = { ...updatedFormValues["startDate"] };
  // const updatedFormElementED = { ...updatedFormValues["endDate"] };
  // updatedFormElementD.value =nullnternship.description;
  // updatedFormElementL.value = internship.location;
  // updatedFormElementS.value = internship.stipend;
  // updatedFormElementTS.value = internship.techstack;
  // updatedFormElementLD.value = internship.lastDate;
  // updatedFormElementSD.value = internship.startDate;
  // updatedFormElementED.value = internship.endDate;
  // updatedFormValues["description"] = updatedFormElementD;
  // updatedFormValues["location"] = updatedFormElementL;
  // updatedFormValues["stipend"] = updatedFormElementS;
  // updatedFormValues["techstack"] = updatedFormElementTS;
  // updatedFormValues["lastDate"] = updatedFormElementLD;
  // updatedFormValues["startDate"] = updatedFormElementSD;
  // updatedFormValues["endDate"] = updatedFormElementED;
  // };
  // useEffect(() => {
  //   if (internship) {
  //     setInitialState((prev) => {
  //       return {
  //         ...prev,
  //         description: {
  //           ...prev.description,
  //           value: internship.description,
  //         },
  //         location: {
  //           ...prev.location,
  //           value: internship.location,
  //         },
  //         stipend: {
  //           ...prev.stipend,
  //           value: internship.stipend,
  //         },
  //       };
  //     });

  //     setFormValues(initialState);
  //   }
  // }, [internship]);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:5000/employer/get-internship/${postId}`,
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
          console.log(res.data.internship);
          setInternship(res.data.internship);
          console.log(internship);
          // if (internship) {
          // console.log(res.data.internship.description);
          // setInitialValue();
          // setInitialValue("description", res.data.internship.description);
          // setInitialValue("location", res.data.internship.location);
          // setInitialValue("stipend", res.data.internship.stipend);
          // setInitialValue("lastDate", new Date(res.data.internship.lastDate));
          // setInitialValue("startDate", new Date(res.data.internship.startDate));
          // setInitialValue("endDate", res.data.internship.endDate);
          // setInitialValue("techstack", res.data.internship.techstack);
          // }
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
    console.log(typeof formValues.startDate.value);
    const duration =
      new Date(formValues.endDate.value) - new Date(formValues.startDate.value);
    console.log(duration);

    const {
      description,
      location,
      stipend,
      techstack,
      lastDate,
      startDate,
      endDate,
    } = formValues;

    axios({
      method: "patch",
      url: "http://localhost:5000/employer/update-internship",
      data: {
        postId,
        description: description.value,
        location: location.value,
        stipend: stipend.value,
        techstack: techstack.value,
        lastDate: lastDate.value,
        startDate: startDate.value,
        endDate: endDate.value,
        duration: duration,
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
      {internship && (
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
                  value={formValues.location.value || internship.location}
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
                  value={formValues.description.value || internship.description}
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
                  value={formValues.stipend.value|| internship.stipend}
                  onChange={handleChange}
                />
                {formValues.stipend.errorMessage && (
                  <span className="error">
                    {formValues.stipend.errorMessage}
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
                  value={formValues.techstack.value || internship.techstack}
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
                  value={formValues.lastDate.value || new Date(internship.lastDate)}
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
                  value={formValues.startDate.value || new Date(internship.startDate)}
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
                <Form.Label style={{ fontWeight: "bold" }}>
                  End Month
                </Form.Label>
                <Form.Control
                  style={{ borderColor: "#ffc107", color: "#000000" }}
                  type="month"
                  placeholder="Enter end date"
                  name="endDate"
                  value={formValues.endDate.value || new Date(internship.endDate)}
                  onChange={handleChange}
                />
                {formValues.endDate.errorMessage && (
                  <span className="error">
                    {formValues.endDate.errorMessage}
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

export default UpdateInternship;
