import React from 'react'
import { Row, Col, Button, Form } from "react-bootstrap";
import './contactUs.css';
const contactUs = () => {
    return (
        <div className="background" >
            
                <div className="form">
                    
                    <Form>
                        <h3>Contact Us</h3>
                        <Row>
                            <Col md={6} xs={12}>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col md={6} xs={12}>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control placeholder="Last name" />
                            </Col>
                        </Row>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="form-name">Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contact No.</Form.Label>
                            <Form.Control type="text" placeholder="Contact No." />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
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