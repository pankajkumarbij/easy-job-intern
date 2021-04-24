import React from 'react' ;
import {Link} from 'react-router-dom' ;
import axios from 'axios' ;



export default function WelcomeSignup ( props ) {
  
    if(props.match.path === "/confirm/:confirmationCode" )
    {
       // verifyUser(props.match.params.confirmationCode )
        axios.get("http://localhost:5000/student/confirm/"  + props.match.params.confirmationCode  )
        .then((response) => {
          return response.data ;
        } )
        .catch((err)=> {
            console.log(err);
        })
    }
    return (
        <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>Account confirmed!</strong>
          </h3>
        </header>
        <Link to={"/student-login"}>
          Please Login
        </Link>
      </div>
    )
}

