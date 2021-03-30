import { Button } from "bootstrap";
import React from "react";
import "./Error.css";

const Error = () => {
    return (
        <div className="error">
            <h1>Error 404</h1>
            <p>Sorry this page doesn't exist!</p>
            <Link to = "/">
                <Button>Go back</Button>
            </Link>
        </div>
    );
};

export default Error;