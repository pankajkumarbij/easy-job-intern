import React, { Component } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import './employer.css';
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

class EmployerSignin extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      showPassword: false, // added to show/hide password
    };
    
  }

  userTyping = (type, e) => {
    switch (type) {
      case "email":
        this.setState({ email: e.target.value });
        break;

      case "password":
        this.setState({ password: e.target.value });
        break;
      default:
        break;
    }
    console.log(this.state.showPassword)
  };

  submitSignin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/employer/signin", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.error) {
          alert(res.data.error);
        } else {
          console.log(
            "Token: ",
            res.data.token,
            "User Details: ",
            res.data.user
          );
          alert("Signin Successfull");
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
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
              backgroundImage: "linear-gradient(to right, white , #ffc107)",
            }}
            className='employer_form_card_custom'
          >
            <Card.Header
              style={{
                backgroundColor: "#6c6c6c",
                color: "#ffc107",
                fontFamily: '"Merriweather", serif',
                fontSize: "1.25rem",
              }}
              as="h5"
            >
              Employer Signin
            </Card.Header>
            <Card.Body>
              <Form onSubmit={(e) => this.submitSignin(e)}>
                <Form.Group
                  style={{ textAlign: "left" }}
                  controlId="formBasicEmail"
                  onChange={(e) => this.userTyping("email", e)}
                >
                  <Form.Label style={{ fontWeight: "bold" }}>
                    Email address
                  </Form.Label>
                  <Form.Control
                    style={{ borderColor: "#ffc107", color: "#000000" }}
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
                      style={{ borderColor: "#ffc107", color: "#000000" }}
                      type={this.state.showPassword?"text":"password"}
                    
                    />
                    <InputGroup.Append>
                      <InputGroup.Text style={{borderColor: "#ffc107", color: "#000000", height: "37px", width: "28px", paddingLeft:"1px",paddingRight:"1px" }}>
                        <IconButton style={{width: "25px"}}
                          onClick={this.togglePasswordVisiblity}
                        >
                          {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton> 
                      </InputGroup.Text>
                    </InputGroup.Append>
                  
                  </InputGroup> 
                  
                  
                  
                  <Form.Group
                    style={{
                      textAlign: "left",
                      fontSize: "1.5vh",
                      marginTop: "10px",
                    }}
                  >
                    <Link to="/employer-signup">
                      <a style={{ fontWeight: "bold" }}>
                        Don't have an account? Sign up
                      </a>
                    </Link>
                  </Form.Group>
                </Form.Group>
                <Button
                  style={{ color: "#ffc107", fontWeight: "bold" }}
                  variant="secondary"
                  type="submit"
                >
                  Signin
                </Button>
                
              </Form>
              
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}
export default EmployerSignin;
