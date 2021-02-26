import React from "react";
import { Form, Button } from "react-bootstrap";
import "./register.css";
const RegisterForm = () => {
  return (
    <div className="box">
      <div className="container register">
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter Email Id" />
          </Form.Group>
          <Form.Group controlId="formBasicNumber">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control placeholder="Enter Your Mobile Number" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCollege">
            <Form.Label>College Name</Form.Label>
            <Form.Control placeholder="Enter Your College Name" />
          </Form.Group>
          <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Upload Your Image" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
