import React, { useState} from 'react'
import { Form, Button, Alert } from "react-bootstrap";
import './contact-us.css'

const ContactUs = () => {
 
  
  const [firstName,setfirstName] = useState("");
  const [email,setEmail] = useState("");
  const [mobile,setMobile] = useState();
  const [lastName, setlastName] = useState("");
  const [messages, setmessages] = useState("");


  const [firstNameErr,setfirstNameErr] = useState({});
  const [lastNameErr,setlastNameErr] = useState({});
  const [emailErr,setemailErr] = useState({});
  const [mobileErr,setmobileErr] = useState({});
  const [messageErr,setmessagesErr] = useState({});

  
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
  
  const submitContactUs = (e) => {

    e.preventDefault();

    const isValid = formValidations() ;

    console.log(firstName);
    if (isValid) {
    const form = e.target;
    setServerState({ submitting: true });
    const url = `https://formspree.io/f/${API_KEY}`
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({
        firstName: firstName ,
        lastName: lastName,
        email: email,
        mobile: mobile,  
        messages: messages
      }),
    })
    .then(r => {
      handleServerResponse(true, "Thanks for contacting us.", form);
    })
    .catch(r => {
      handleServerResponse(false, "Not able to submit!", form);
    });
    setfirstName("");
    setlastName("");
    setEmail("");
    setMobile("");
    setmessages("");
    }
  }
      
  const formValidations = () => {

    const firstNameErr = {} ;
    const lastNameErr = {} ;
    const emailErr = {} ;
    const mobileErr = {} ;
    const messageErr = {} ;

    let isValid = true; 


    if(!firstName){
      firstNameErr.firstNameEmpty = "*This field is empty*";
      isValid = false ;
    }else if(firstName.trim().length < 3){
      firstNameErr.firstNameShort = "*first name is too short*";
      isValid = false ;
    }else if(firstName.trim().length >= 10){
      firstNameErr.firstNameLong = "*first name is too long*";
      isValid = false ;
    }

    if(!lastName){
      lastNameErr.lastNameEmpty = "*This field is empty*";
      isValid = false ;
    }else if(lastName.trim().length < 3){
      lastNameErr.lastNameShort = "*last name is too short*";
      isValid = false ;
    }else if(lastName.trim().length >= 10){
      lastNameErr.lastNameLong = "*last name is too long*";
      isValid = false ;
    }

    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!email) {
      emailErr.emailRequired = "*Email is required*";
      isValid = false;
    }else if (!emailRegex.test(email)) {
      emailErr.emailValid ="*Please Enter Valid Email*";
      isValid = false;
    }

    const pattern = /^\d+$/;

    if (!mobile){
        mobileErr.mobileEmpty= '*This field is empty*';
      isValid = false;
    }else if (!pattern.test(mobile)){
        mobileErr.mobileRequired = "Required field should be a number";
        isValid = false;
    }else if (mobile.trim().length < 10 ){
      mobileErr.mobileLenght = "Required field should be a valid number";
        isValid = false;
    }

    if(!messages){
        messageErr.messageEmpty= "*This field is empty*";
        isValid = false ;
      }else if(messages.trim().length < 3){
        messageErr.messageShort = "*message is too short*";
        isValid = false ;
      }



    setfirstNameErr(firstNameErr);
    setlastNameErr(lastNameErr);
    setemailErr(emailErr);
    setmobileErr(mobileErr);
    setmessagesErr(messageErr);

    return isValid ;
  }

  return (
    <div className="background" >
      <div className="form">
        <h3>Contact Us</h3>
        <Form className="contactUs" onSubmit={submitContactUs}>
          <Form.Group>
            <Form.Control
              type="text" id="firstName" name="firstName"
              placeholder="First Name"
              value={firstName}
              className="form-control"
              onChange={ (e) =>{setfirstName(e.target.value)} }/>

          {Object.keys(firstNameErr).map((key)=>{
       return <div key={key} style={{color : "red"}}>{firstNameErr[key]}</div>
 })}
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text" id="lastName" name="lastName"
              placeholder="Last Name"
              value={lastName}
              className="form-control"
              onChange={ (e) => {setlastName(e.target.value) } }/>

          {Object.keys(lastNameErr).map((key)=>{
       return <div key={key} style={{color : "red"}}>{lastNameErr[key]}</div>
 })}
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text" id="email" name="email"
              placeholder="Enter Email"
              value={email}
              className="form-control"
              onChange={ (e) => {setEmail(e.target.value)} }/>
              
         {Object.keys(emailErr).map((key)=>{
       return <div key={key} style={{color : "red"}}>{emailErr[key]}</div>
 })}
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="number" id="mobile" name="mobile"
              placeholder="Enter mobile no."
              value={mobile}
              className="form-control"
              onChange={ (e) => {setMobile(e.target.value)} } />

           {Object.keys(mobileErr).map((key)=>{
       return <div key={key} style={{color : "red"}}>{mobileErr[key]}</div>
 })}
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="textarea" id="messages" name="messages"
              placeholder="Enter message"
              rows="12"
              value={messages}
              className="form-control"
              onChange={ (e) => {setmessages(e.target.value)} }/>

           {Object.keys(messageErr).map((key)=>{
       return <div key={key} style={{color : "red"}}>{messageErr[key]}</div>
 })}
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
