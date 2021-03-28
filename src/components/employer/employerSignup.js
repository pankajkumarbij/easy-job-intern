import React, { Component } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import './employer.css';
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

class EmployerSignup extends Component {
  constructor() {
    super();
    this.state = {
      companyName: null,
      personName: null,
      email: null,
      contact: null,
      password: null,
      passwordConfirmation: null,
      signupError: null,
      showPassword: false,
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
      case "companyName":
        this.setState({ companyName: e.target.value });
        break;
      case "personName":
        this.setState({ personName: e.target.value });
        break;
      case "contact":
        this.setState({ contact: e.target.value });
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
      axios
        .post("http://localhost:5000/employer/signup", {
          personName: this.state.personName,
          email: this.state.email,
          password: this.state.password,
          contact: this.state.contact,
          passwordConfirmation: this.state.passwordConfirmation,
          companyName: this.state.companyName,
        })
        .then((res) => {
          console.log(res.data.user);
          alert(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  togglePasswordVisiblity = () => { // to handle visibility of passsword 
    this.setState({
      showPassword: !(this.state.showPassword)
    });
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
            className="employer_form_card_custom"
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
              Employer Signup
            </Card.Header>
            <Card.Body>
              <Form onSubmit={(e) => this.submitSignup(e)}>
                <Form.Group
                  style={{ textAlign: "left" }}
                  controlId="formBasicName"
                  onChange={(e) => this.userTyping("companyName", e)}
                >
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Company Name
                  </Form.Label>
                  <Form.Control
                    style={{ borderColor: "#6EE2CD", color: "#000000" }}
                    type="text"
                    placeholder="Enter the company name"
                  />
                </Form.Group>

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

                <Form.Group
                  style={{ textAlign: "left" }}
                  controlId="formBasicPassword"
                  onChange={(e) => this.userTyping("password", e)}
                >
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Password
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      style={{ borderColor: "#6EE2CD", color: "#000000" }}
                      type={this.state.showPassword?"text":"password"}
                      placeholder="Password"
                    />
                    <InputGroup.Append>
                      <InputGroup.Text style={{borderColor: "#6EE2CD", color: "#000000", height: "37px", width: "28px", paddingLeft:"1px",paddingRight:"1px" }}>
                        <IconButton style={{width: "25px"}}
                          onClick={this.togglePasswordVisiblity}
                        >
                          {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton> 
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>
                
                <Form.Group
                  style={{ textAlign: "left", marginBottom: "1.6vh" }}
                  controlId="formBasicPassword"
                  onChange={(e) => this.userTyping("passwordConfirmation", e)}
                >
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Confirm Password
                  </Form.Label>
                  <InputGroup>
                    <Form.Control
                      style={{ borderColor: "#6EE2CD", color: "#000000" }}
                      type={this.state.showPassword?"text":"password"}
                      placeholder="Re-enter Password"
                    />
                    <InputGroup.Append>
                      <InputGroup.Text style={{borderColor: "#6EE2CD", color: "#000000", height: "37px", width: "28px", paddingLeft:"1px",paddingRight:"1px" }}>
                        <IconButton style={{width: "25px"}}
                          onClick={this.togglePasswordVisiblity}
                        >
                          {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton> 
                      </InputGroup.Text>
                    </InputGroup.Append>
                  </InputGroup>
                </Form.Group>

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

                <Form.Group
                  style={{ textAlign: "left" }}
                  onChange={(e) => this.userTyping("contact", e)}
                >
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Contact
                  </Form.Label>
                  <Form.Control
                    style={{ borderColor: "#6EE2CD", color: "#000000" }}
                    type="number"
                    placeholder="Enter your contact number"
                  />
                </Form.Group>

                <Form.Group style={{ textAlign: "left", fontSize: "1.5vh" }}>
                  <Link to="/employer-login">
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
export default EmployerSignup;
