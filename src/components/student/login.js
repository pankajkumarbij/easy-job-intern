import React,{useState} from "react";
import {useHistory} from 'react-router-dom'
import { Form, Button,Alert } from "react-bootstrap";
import "./register.css";

function LoginForm() {
  const history = useHistory();

 const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState("")
  const [success, setSuccess] = useState("")

  const PostData = () => {
    fetch("/student/signin",{
      method: 'post',
      headers: { 
          "Content-Type": "application/json"
       },
       body:JSON.stringify({
           email,
           password
       })
  }).then(res=>res.json())
  .then(data=>{
      console.log(data)
      if(data.error){
         console.log(data.error)
         setError(data.error)
      }else{
        localStorage.setItem("jwt",data.token)
        localStorage.setItem("user",JSON.stringify(data.user))
        window.location.reload(false);
         setSuccess("Sign in Success")
      }
  }).catch((err) =>{
      console.log(err)
  })
  setEmail("")
  setPassword("")
  }

  const showError = () => (error ? <Alert variant="danger"> {error} </Alert>:'');
  const showSuccess = () => (success ? <Alert variant="success"> {success} </Alert>:'');

  const clearAlert = () => {
    setError("")
    setSuccess("")
  }

  return (
    <>
      <div className="box">
        <h1>Login</h1>
        <div style={{maxWidth: "200px"}}>
          {showError()}
          {showSuccess()}
        </div>

        <div className="container">
          <Form onClick={()=>clearAlert()}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <input className="form-control" type="email" placeholder="Enter Your Email Id" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <input className="form-control" type="password" placeholder="Enter Your Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="success" 
            onClick={()=>PostData()}
            >
              SignIn
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}
export default LoginForm;
