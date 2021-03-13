import React,{useState} from "react";
import { Form, Button,Alert } from "react-bootstrap";
import "./register.css";
const RegisterForm = () => {

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [mobile,setMobile] = useState();
const [password, setPassword] = useState("");
const [confirmPassword, setconfirmPassword] = useState("");
const [error,setError] = useState("")
const [success, setSuccess] = useState("")

const PostData = () => {
 
  fetch("/student/signup",{
    method: 'post',
    headers: { 
        "Content-Type": "application/json"
     },
     body:JSON.stringify({
         name,
         email,
         password,
         mobile,
         confirmPassword
     })
}).then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.error){
       console.log(data.error)
       setError(data.error)
    }else{
       setSuccess(data.message)
    }
}).catch((err) =>{
    console.log(err)
})
setName("")
setEmail("")
setMobile(0)
setPassword("")
setconfirmPassword("")
}

const showError = () => (error ? <Alert variant="danger"> {error} </Alert>:'');
const showSuccess = () => (success ? <Alert variant="success"> {success} </Alert>:'');

const clearAlert = () => {
  setError("")
  setSuccess("")
}

  return (
    <div className="box">
      <h1>SignUp</h1>
      <div style={{maxWidth: "200px"}}>
          {showError()}
          {showSuccess()}
        </div>
      <div className="container register">
        <Form onClick={()=>clearAlert()}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <input className="form-control"  value={name} placeholder="Your Name" onChange={(e)=>setName(e.target.value)}  />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <input className="form-control" value={email} placeholder="Your Email Id" onChange={(e)=>setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group >
            <Form.Label>Mobile Number</Form.Label>
            <input className="form-control" type="Number" placeholder="Your Mobile Number" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <input className="form-control" type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <input  className="form-control" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setconfirmPassword(e.target.value)}/>
          </Form.Group>
          <Button variant="success"   onClick={()=>PostData()}>
            SignUp
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;
