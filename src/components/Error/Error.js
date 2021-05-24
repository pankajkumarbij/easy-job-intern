import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";
import Error1 from "./error.png"

const Error = () => {
    return (
        <div className="errors">
            <img src={Error1} alt='' className="error-img" />
            <h3 class="error-heading">
                Look like you're lost
            </h3>
            <p class="error-para">the page you are looking for not avaible!</p>
            <Link to="/" >
                <button class="error-btn">Go back</button>
            </Link>
        </div>
    );
};

export default Error;