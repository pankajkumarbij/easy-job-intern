import React from "react";
import { Form, Button } from "react-bootstrap";
import "./register.css";

function LoginForm() {
  return (
    <>
      <div className="box">
        <h1>Login</h1>

        <div className="container">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter Your Email Id" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
export default LoginForm;
