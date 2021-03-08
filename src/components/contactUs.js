import React from 'react'
import { Row, Col, Button, Form } from "react-bootstrap";
import './contactUs.css';
const contactUs = () => {
    return (
        <div className="background" >

                <div className="form">
                      <h3>Contact Us</h3>
                    <Form className="contactUs">

                        <Form.Group>
                                    <Form.Control placeholder="First name" />
                        </Form.Group>
                        <Form.Group>
                                    <Form.Control placeholder="Last name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="Contact No." />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control placeholder="Message..." as="textarea" rows={3} />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out"/>
                        </Form.Group>
                        <Button variant="warning" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>


        </div>);
}
export default contactUs;
