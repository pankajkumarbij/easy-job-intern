import React, { useState, useContext, useEffect } from "react";
import { Button, Form, Card, InputGroup } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "./register.css";

import toast, { Toaster } from "react-hot-toast";
import { UserContext } from "../../App";

const StudentUpdateForm = () => {
  const { state, dispatch } = useContext(UserContext);
  const [student, setStudent] = useState({
    personName: "",
    email: "",

    contact: "",
    branch: "",
    year: "",
    degree: "",
    institutionName: "",
  });
  const history = useHistory();

  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:5000/student/studentfetch/${state.user._id}`,
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
          setStudent(res.data);
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);

  const submitStudentDetails = (e) => {
    e.preventDefault();
    const {
      personName,
      email,
      contact,
      branch,
      year,
      degree,
      institutionName,
    } = student;
    console.log(student);
    axios({
      method: "PATCH",
      url: "http://localhost:5000/student/update",
      data: {
        personName: personName,
        email: email,
        contact: contact,
        branch: branch,
        year: year,
        degree: degree,
        institutionName: institutionName,
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data.user);
        // alert(res.data.message);
        const notify = () => toast(res.data.message);
        notify();
        if (res.data.user) {
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
            Student Details Update
          </Card.Header>
          <Card.Body>
            <Form onSubmit={(e) => submitStudentDetails(e)}>
              {/* Name of the student */}
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
                  value={student.personName}
                  onChange={(e) =>
                    setStudent({ ...student, personName: e.target.value })
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
                  value={student.email}
                  onChange={(e) =>
                    setStudent({ ...student, email: e.target.value })
                  }
                  required
                />
                {/* {formValues.email.errorMessage && (
                  <span className="error">{formValues.email.errorMessage}</span>
                )} */}
              </Form.Group>

              {/* Contact Number */}
              <Form.Group style={{ textAlign: "left" }}>
                <Form.Label style={{ fontWeight: "bold" }}>Contact</Form.Label>
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
                  value={student.contact}
                  onChange={(e) =>
                    setStudent({ ...student, contact: e.target.value })
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
                  Which degree you are pursuing?
                </Form.Label>
                <Form.Control
                  // className={`${
                  //   !formValues.degree.valid && formValues.degree.touched
                  //     ? "input-error"
                  //     : ""
                  // }`}
                  style={{ borderColor: "#6EE2CD", color: "#000000" }}
                  type="text"
                  placeholder="Enter complete name of your degree"
                  name="degree"
                  value={student.degree}
                  onChange={(e) =>
                    setStudent({ ...student, degree: e.target.value })
                  }
                  required
                />
                {/* {formValues.degree.errorMessage && (
                  <span className="error">
                    {formValues.degree.errorMessage}
                  </span>
                )} */}
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
                  // className={`${
                  //   !formValues.institutionName.valid &&
                  //   formValues.institutionName.touched
                  //     ? "input-error"
                  //     : ""
                  // }`}
                  style={{ borderColor: "#6EE2CD", color: "#000000" }}
                  type="text"
                  placeholder="Your college name"
                  name="institutionName"
                  value={student.institutionName}
                  onChange={(e) =>
                    setStudent({ ...student, institutionName: e.target.value })
                  }
                  required
                />
                {/* {formValues.institutionName.errorMessage && (
                  <span className="error">
                    {formValues.institutionName.errorMessage}
                  </span>
                )} */}
              </Form.Group>

              {/* Branch of study */}
              <Form.Group style={{ textAlign: "left" }}>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Field of study
                </Form.Label>
                <Form.Control
                  // className={`${
                  //   !formValues.branch.valid && formValues.branch.touched
                  //     ? "input-error"
                  //     : ""
                  // }`}
                  style={{ borderColor: "#6EE2CD", color: "#000000" }}
                  type="text"
                  placeholder="Enter your field of study"
                  name="branch"
                  value={student.branch}
                  required
                  onChange={(e) =>
                    setStudent({ ...student, branch: e.target.value })
                  }
                />
                {/* {formValues.branch.errorMessage && (
                  <span className="error">
                    {formValues.branch.errorMessage}
                  </span>
                )} */}
              </Form.Group>

              {/* Year of study */}
              <Form.Group style={{ textAlign: "left" }}>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Which year of college you are in?
                </Form.Label>
                <Form.Control
                  // className={`${
                  //   !formValues.year.valid && formValues.year.touched
                  //     ? "input-error"
                  //     : ""
                  // }`}
                  style={{ borderColor: "#6EE2CD", color: "#000000" }}
                  type="text"
                  placeholder="Enter your college year"
                  name="year"
                  value={student.year}
                  required
                  onChange={(e) =>
                    setStudent({ ...student, year: e.target.value })
                  }
                />
                {/* {formValues.year.errorMessage && (
                  <span className="error">{formValues.year.errorMessage}</span>
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
    </>
  );
};
export default StudentUpdateForm;
