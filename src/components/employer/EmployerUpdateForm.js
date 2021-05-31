import React, { useState, useContext, useEffect } from "react";
import { Button, Form, Card, InputGroup, Spinner } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./employer.css";

import toast, { Toaster } from "react-hot-toast";
import { UserContext } from "../../App";

const EmployerUpdateForm = () => {
  const { state, dispatch } = useContext(UserContext);
  const [employer, setEmployer] = useState({
    personName: "",
    email: "",
    contact: "",
    companyName: "",
  });
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:5000/employer/employerfetch/${state.user._id}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => {
        // console.log(res);
        if (res.data.error) {
          console.log(res.data.error);
          // alert(res.data.error);
          const notify = () => toast(res.data.error);
          notify();
          setLoading(false);
        } else {
          console.log(res.data)
          setEmployer(res.data.employer);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
        setLoading(false);
      });
  }, []);

  const submitEmployerDetails = (e) => {
    e.preventDefault();
    const { personName, email, contact, companyName } = employer;
    // console.log(employer);
    axios({
      method: "PATCH",
      url: "http://localhost:5000/employer/update",
      data: {
        personName: personName,
        email: email,
        contact: contact,
        companyName: companyName,
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        // console.log(res.data.user);
        // alert(res.data.message);
        const notify = () => toast(res.data.message);
        notify();
        if (res.data.user) {
          const user = localStorage.setItem(
            "user",
            JSON.stringify(res.data.user)
          );

          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // setFormValues(initialState);
  };

  return (
    <>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
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
              Employer Details Update
            </Card.Header>
            <Card.Body>
              <Form onSubmit={(e) => submitEmployerDetails(e)}>
                {/* Name of the employee */}
                <Form.Group style={{ textAlign: "left" }}>
                  <Form.Label style={{ fontWeight: "bold" }}>Name</Form.Label>
                  <Form.Control
                    // className={`${
                    //   !formValues.personName.valid &&
                    //   formValues.personName.touched
                    //     ? "input-error"
                    //     : ""
                    // }`}
                    style={{ borderColor: "#6EE2CD", color: "#000000" }}
                    type="text"
                    placeholder="Enter your name"
                    name="personName"
                    value={employer.personName}
                    onChange={(e) =>
                      setEmployer({ ...employer, personName: e.target.value })
                    }
                    required
                  />
                  {/* {formValues.personName.errorMessage && (
                  <span className="error">
                    {formValues.personName.errorMessage}
                  </span>
                )} */}
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
                    // className={`${
                    //   !formValues.email.valid && formValues.email.touched
                    //     ? "input-error"
                    //     : ""
                    // }`}
                    style={{ borderColor: "#6EE2CD", color: "#000000" }}
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={employer.email}
                    onChange={(e) =>
                      setEmployer({ ...employer, email: e.target.value })
                    }
                    required
                  />
                  {/* {formValues.email.errorMessage && (
                  <span className="error">{formValues.email.errorMessage}</span>
                )} */}
                </Form.Group>

                {/* Contact Number */}
                <Form.Group style={{ textAlign: "left" }}>
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Contact
                  </Form.Label>
                  <Form.Control
                    // className={`${
                    //   !formValues.contact.valid && formValues.contact.touched
                    //     ? "input-error"
                    //     : ""
                    // }`}
                    style={{ borderColor: "#6EE2CD", color: "#000000" }}
                    type="number"
                    placeholder="Enter your contact number"
                    name="contact"
                    value={employer.contact}
                    onChange={(e) =>
                      setEmployer({ ...employer, contact: e.target.value })
                    }
                    required
                    maxLength="10"
                    minLength="10"
                  />
                  {/* {formValues.contact.errorMessage && (
                  <span className="error">
                    {formValues.contact.errorMessage}
                  </span>
                )} */}
                </Form.Group>

                {/* Degree */}
                <Form.Group style={{ textAlign: "left" }}>
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Company Name
                  </Form.Label>
                  <Form.Control
                    // className={`${
                    //   !formValues.degree.valid && formValues.degree.touched
                    //     ? "input-error"
                    //     : ""
                    // }`}
                    style={{ borderColor: "#6EE2CD", color: "#000000" }}
                    type="text"
                    placeholder="Enter Company Name"
                    name="companyName"
                    value={employer.companyName}
                    onChange={(e) =>
                      setEmployer({ ...employer, companyName: e.target.value })
                    }
                    required
                  />
                  {/* {formValues.degree.errorMessage && (
                  <span className="error">
                    {formValues.degree.errorMessage}
                  </span>
                )} */}
                </Form.Group>

                <Button
                  style={{ color: "#6EE2CD", fontWeight: "bold" }}
                  variant="secondary"
                  type="submit"
                >
                  Update Details
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};
export default EmployerUpdateForm;
