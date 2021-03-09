import React, { Component } from 'react'
import { Row, Col, Button, Form } from "react-bootstrap";
import './contactUs.css';
import axios from 'axios';

class contactUs extends Component{
    constructor() {
        super();
        this.state = {
          first_name: null,
          last_name: null,
          email: null,
          message: null,
          contact: null
        };
      }

      userTyping = (type, e) => {
        switch (type) {
          case "email":
            console.log('email');
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
  
      axios.post('http://localhost:5000/user/ContactUsSubmit',{
        first_name:  this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        contact: this.state.contact,
        message: this.state.message
      })
      .then((res) => {
        console.log(res.data);
        
        alert("Message submitted successfully!")
      
      }).catch((err) => {
        alert(err);
        console.log(err);
      })
      
    };

    render() {
        return (
            <div className="background" >

                <div className="form">
                      <h3>Contact Us</h3>
                    <Form className="contactUs" onSubmit={(e) => this.submitContactUs(e)}>

                        <Form.Group onChange={(e) => this.userTyping('first_name',e)}>
                                    <Form.Control placeholder="First name" />
                        </Form.Group>
                        <Form.Group onChange={(e) => this.userTyping('last_name',e)}>
                                    <Form.Control placeholder="Last name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail" onChange={(e) => this.userTyping('email',e)}>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" onChange={(e) => this.userTyping('contact',e)}>
                            <Form.Control type="text" placeholder="Contact No." />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1" onChange={(e) => this.userTyping('message',e)}>
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


        </div>
        )
    }
}

export default contactUs;
