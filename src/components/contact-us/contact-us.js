import React, { Component } from "react";
import { Button, Form, Spinner, Alert } from "react-bootstrap";
import "./contact-us.css";

class contactUs extends Component {
  constructor() {
    super();
    this.state = {
      first_name: null,
      last_name: null,
      email: null,
      message: null,
      contact: null,
      loading: false,
      success: false,
      errorMessage: null,
    };
  }

  userTyping = (type, e) => {
    switch (type) {
      case "email":
        console.log("email");
        this.setState({ email: e.target.value });
        break;
      case "first_name":
        this.setState({ first_name: e.target.value });
        break;

      case "last_name":
        this.setState({ last_name: e.target.value });
        break;
      case "contact":
        this.setState({ contact: e.target.value });
        break;
      case "message":
        this.setState({ message: e.target.value });
        break;
      default:
        break;
    }
  };

  submitContactUs = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    //setting loading state to true for spinner
    const { first_name, last_name, email, message, contact } = this.state;
    //store data in backend on submit
    const contactMessage = { first_name, last_name, email, message, contact };
    // console.log(contactmessage);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactMessage),
    };
    fetch("/contact/contact-us", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ loading: false, success: true });
        //setting loading state to false after successful submission and success state to true for success alert
      })
      .catch((err) => {
        this.setState({ loading: false, errorMessage: err });
      });
    // };
  };
  render() {
    return (
      <div className="background">
        {this.state.loading ? (
          <Spinner animation="border" variant="primary" className="mt-3 mb-5" />
        ) : this.state.success ? (
          <Alert variant="success" className="mt-3 mb-5">
            Thank You for filling out the contact form.You would soon be
            contacted by our team!
          </Alert>
        ) : (
          <div className="form">
            <>
              {this.state.errorMessage && (
                <Alert variant="danger">
                  {this.state.errorMessage.toString()}
                </Alert>
              )}
              <h3>Contact Us</h3>
              <Form
                className="contactUs"
                onSubmit={(e) => this.submitContactUs(e)}
              >
                <Form.Group onChange={(e) => this.userTyping("first_name", e)}>
                  <Form.Control placeholder="First name" />
                </Form.Group>
                <Form.Group onChange={(e) => this.userTyping("last_name", e)}>
                  <Form.Control placeholder="Last name" />
                </Form.Group>
                <Form.Group
                  controlId="formBasicEmail"
                  onChange={(e) => this.userTyping("email", e)}
                >
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group
                  controlId="formBasicPassword"
                  onChange={(e) => this.userTyping("contact", e)}
                >
                  <Form.Control type="text" placeholder="Contact No." />
                </Form.Group>
                <Form.Group
                  controlId="exampleForm.ControlTextarea1"
                  onChange={(e) => this.userTyping("message", e)}
                >
                  <Form.Control
                    placeholder="Message..."
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="warning" type="submit">
                  Submit
                </Button>
              </Form>
            </>
          </div>
        )}
      </div>
    );
  }
}

export default contactUs;
