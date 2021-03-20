import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import axios from "axios";

class StudentSignup extends Component {
  constructor() {
    super();
    this.state = {
      institutionName: null,
      personName: null,
      email: null,
      contact: null,
      password: null,
      passwordConfirmation: null,
      signupError: null,
      branch: null,
      year: null,
      degree: null,
    };
  }

  userTyping = (type, e) => {
    switch (type) {
      case "email":
        console.log("email");
        this.setState({ email: e.target.value });
        break;

      case "password":
        this.setState({ password: e.target.value });
        break;

      case "passwordConfirmation":
        this.setState({ passwordConfirmation: e.target.value });
        break;
      case "institutionName":
        this.setState({ institutionName: e.target.value });
        break;
      case "personName":
        this.setState({ personName: e.target.value });
        break;
      case "contact":
        this.setState({ contact: e.target.value });
        break;
      case "branch":
        this.setState({ branch: e.target.value });
        break;
      case "year":
        this.setState({ year: e.target.value });
        break;
      case "degree":
        this.setState({ degree: e.target.value });
        break;
      default:
        break;
    }
  };

  formIsValid = () => {
    return this.state.password === this.state.passwordConfirmation;
  };

  submitSignup = (e) => {
    e.preventDefault();
    if (!this.formIsValid()) {
      this.setState({ signupError: "Passwords do not match" });
      return;
    } else {
      alert("Signup Successfull!");
    }
  };

  render() {
    return (
      <>
        <div style={{ padding: "4vh 0" }}>
          <Card
            style={{
              width: "40vw",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "4vh",
              marginBottom: "4vh",
              backgroundImage: "linear-gradient(to right, white , #6EE2CD)",
            }}
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
              <Form onSubmit={(e) => this.submitSignup(e)}>
                {/* Name of the student */}
                <Form.Group
                  style={{ textAlign: "left" }}
                  onChange={(e) => this.userTyping("personName", e)}
                >
                  <Form.Label style={{ fontWeight: "bold" }}>Name</Form.Label>
                  <Form.Control
                    style={{ borderColor: "#6EE2CD", color: "#000000" }}
                    type="text"
                    placeholder="Enter your name"
                  />
                </Form.Group>

                {/* Email address */}
                <Form.Group
                  style={{ textAlign: "left" }}
                  controlId="formBasicEmail"
                  onChange={(e) => this.userTyping("email", e)}
                >
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Email address
                  </Form.Label>
                  <Form.Control
                    style={{ borderColor: "#6EE2CD", color: "#000000" }}
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>

                {/*  Password */}
                <Form.Group
                  style={{ textAlign: "left" }}
                  controlId="formBasicPassword"
                  onChange={(e) => this.userTyping("password", e)}
                >
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Password
                  </Form.Label>
                  <Form.Control
                    style={{ borderColor: "#6EE2CD", color: "#000000" }}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>

                {/* Confirm Password */}
                <Form.Group
                  style={{ textAlign: "left", marginBottom: "1.6vh" }}
                  controlId="formBasicPassword"
                  onChange={(e) => this.userTyping("passwordConfirmation", e)}
                >
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Confirm Password
                  </Form.Label>
                  <Form.Control
                    style={{ borderColor: "#6EE2CD", color: "#000000" }}
                    type="text"
                    placeholder="Re-enter Password"
                  />
                </Form.Group>

                {/* Contact Number */}
                <Form.Group
                  style={{ textAlign: "left" }}
                  onChange={(e) => this.userTyping("contact", e)}
                >
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Contact
                  </Form.Label>
                  <Form.Control
                    style={{ borderColor: "#6EE2CD", color: "#000000" }}
                    type="text"
                    placeholder="Enter your contact number"
                  />
                </Form.Group>

                {/* Degree */}
                <Form.Group
                  style={{ textAlign: "left" }}
                  onChange={(e) => this.userTyping("degree", e)}
                >
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Which degree you are pursuing?
                  </Form.Label>
                  <Form.Control
                    style={{ borderColor: "#6EE2CD", color: "#000000" }}
                    type="text"
                    placeholder="Enter complete name of your degree"
                  />
                </Form.Group>

                {/* College Name */}
                <Form.Group
                  style={{ textAlign: "left" }}
                  controlId="formBasicName"
                  onChange={(e) => this.userTyping("institutionName", e)}
                >
                  <Form.Label style={{ fontWeight: "bold" }}>
                    College Name
                  </Form.Label>
                  <Form.Control
                    style={{ borderColor: "#6EE2CD", color: "#000000" }}
                    type="text"
                    placeholder="Your college name"
                  />
                </Form.Group>

                {/* Branch of study */}
                <Form.Group
                  style={{ textAlign: "left" }}
                  onChange={(e) => this.userTyping("branch", e)}
                >
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Field of study
                  </Form.Label>
                  <Form.Control
                    style={{ borderColor: "#6EE2CD", color: "#000000" }}
                    type="text"
                    placeholder="Enter your field of study"
                  />
                </Form.Group>

                {/* Year of study */}
                <Form.Group
                  style={{ textAlign: "left" }}
                  onChange={(e) => this.userTyping("year", e)}
                >
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Which year of college you are in?
                  </Form.Label>
                  <Form.Control
                    style={{ borderColor: "#6EE2CD", color: "#000000" }}
                    type="text"
                    placeholder="Enter your college year"
                  />
                </Form.Group>

                {/* Already a user? */}
                <Form.Group style={{ textAlign: "left", fontSize: "1.5vh" }}>
                  <Link to="/student-login">
                    <a style={{ fontWeight: "bold" }}>
                      Already have an account? Sign in
                    </a>
                  </Link>
                </Form.Group>

                {this.state.signupError ? (
                  <Form.Text
                    style={{ paddingBottom: "0.6vh", fontWeight: "bold" }}
                    className="text-danger"
                  >
                    {this.state.signupError}
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
  }
}
export default StudentSignup;
