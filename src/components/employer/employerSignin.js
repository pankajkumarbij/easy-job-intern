import React, { Component , useContext, useState } from "react";
import { Button, Card, Form, Alert , InputGroup } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import checkValidity from "../../utils/checkValidation";
import axios from "axios";
import './employer.css';
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { UserContext } from "../../App";


function EmployerSignin(){
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();

  const initialState = {
    email: {
      //value of the input field
      value: "",
      //rules to check while validating the input
      validation: {
        required: true,
        isEmail: true,
      },
      //error messages to show in case any validation rule is not followed
      errorMessage: "",
      // boolean value to check if the whole input field is valid or not
      valid: false,
      //boolean value to check if the input field is touched or not
      touched: false,
    },

    password: {
      value: "",
      validation: {
        required: true,
        minLength: 8,
      },
      errorMessage: "",
      valid: false,
      touched: false,
    },
    showPassword: false,
  };
  const [formValues, setFormValues] = useState(initialState);

  const [formIsValid, setFormIsValid] = useState(false);

  const handleChange = (e) => {
    const updatedFormValues = { ...formValues };
    const updatedFormElement = { ...updatedFormValues[e.target.name] };
    updatedFormElement.value = e.target.value;
    let validOutput = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation,
      updatedFormValues.password.value
    );
    updatedFormElement.valid = validOutput[0];
    updatedFormElement.errorMessage = validOutput[1];
    updatedFormElement.touched = true;
    updatedFormValues[e.target.name] = updatedFormElement;

    let formValid = true;
    for (let inputIdentifiers in updatedFormValues) {
      formValid = updatedFormValues[inputIdentifiers].valid && formValid;
    }
    setFormValues(updatedFormValues);
    setFormIsValid(formValid);
  };

  const submitSignin = (e) => {
    e.preventDefault();
    const { email, password } = formValues;
    axios
      .post("http://localhost:5000/employer/signin", {
        email: email.value,
        password: password.value,
      })
      .then((res) => {
        console.log(res);
        if (res.data.error) {
          console.log(res.data.error);
          alert(res.data.error);
        } else {
          localStorage.setItem("jwt", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
          dispatch({ type: "USER", payload: res.data.user });
          console.log(
            "Token: ",
            res.data.token,
            "User Details: ",
            res.data.user
          );
          alert("Signin Successfull");
          history.push('/');
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
    setFormValues(initialState);
  };

  const togglePasswordVisiblity = () => { // to handle visibility of passsword 
    
    setFormValues({...formValues, showPassword: !(formValues.showPassword)});
  
};
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
          <Form onSubmit={(e) => submitSignin(e)}>
            <Form.Group
              style={{ textAlign: "left" }}
              controlId="formBasicEmail"
             
            >
              <Form.Label style={{ fontWeight: "bold" }}>
                Email address
              </Form.Label>
              <Form.Control
                style={{ borderColor: "#ffc107", color: "#000000" }}
                  className={`${
                    !formValues.email.valid && formValues.email.touched
                      ? "input-error"
                      : ""
                  }`}
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formValues.email.value}
                  onChange={handleChange}
                />
                {formValues.email.errorMessage && (
                  <span className="error">{formValues.email.errorMessage}</span>
                )}
            </Form.Group>

            <Form.Group
              style={{ textAlign: "left" }}
              controlId="formBasicPassword"
              
            >
              <Form.Label style={{ fontWeight: "bold" }}>
                Password
              </Form.Label>
              
              <InputGroup> 
                     
                <Form.Control
                   style={{ borderColor: "#ffc107", color: "#000000" }}
                    type={formValues.showPassword?"text":"password"}
                    className={`${
                      !formValues.password.valid && formValues.password.touched
                        ? "input-error"
                        : ""
                    }`}
                    placeholder="Password"
                    name="password"
                    value={formValues.password.value}
                    onChange={handleChange}
                  />
                  {formValues.password.errorMessage && (
                    <span className="error">
                      {formValues.password.errorMessage}
                    </span>
                  )}
                <InputGroup.Append>
                  <InputGroup.Text style={{borderColor: "#ffc107", color: "#000000", height: "37px", width: "28px", paddingLeft:"1px",paddingRight:"1px" }}>
                    <IconButton style={{width: "25px"}}
                      onClick={togglePasswordVisiblity}
                    >
                      {formValues.showPassword ? <Visibility /> : <VisibilityOff />}
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




export default EmployerSignin;
