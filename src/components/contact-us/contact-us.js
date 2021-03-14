import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap";
import './contact-us.css';

const ContactUs = () => {
  const API_KEY = process.env.FORMSPREE_API_KEY

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  })

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  }

  const submitContactUs = e => {
    e.preventDefault()

    const form = e.target

    setServerState({ submitting: true });
    const url = `https://formspree.io/f/${API_KEY}`
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks for contacting us.", form);
      })
      .catch(r => {
        handleServerResponse(false, "Not able to submit!", form);
      });
  }

  return (
    <div className="background" >
      <div className="form">
        <h3>Contact Us</h3>
        <Form className="contactUs" onSubmit={submitContactUs}>
          <Form.Group>
            <Form.Control
              type="text"
              name="First Name"
              placeholder="First name" required />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              name="Last Name"
              placeholder="Last name" required />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="Email"
              placeholder="Email" required />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Control
              type="text"
              name="Mobile No."
              placeholder="Mobile No." />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              name="Message"
              placeholder="Message..."
              rows={4}
              required
            />
          </Form.Group>
          <Button variant="warning" type="submit">
            Submit
          </Button>
          {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
              {serverState.status.msg}
            </p>
          )}
        </Form>
      </div>
    </div>
  )
}

export default ContactUs;
