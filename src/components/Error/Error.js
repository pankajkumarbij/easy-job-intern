import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

const Error = () => {
    return (
        <div className="errors">
            <h1>Error 404</h1>
            <p>Sorry this page doesn't exist!</p>
            <Link to = "/">
                Go Back
            </Link>
        </div>
    );
};

export default Error;