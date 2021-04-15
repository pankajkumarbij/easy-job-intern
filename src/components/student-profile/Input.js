import React from "react";

const Input=(props)=>
{ return (
    <input type="text" placeholder={props.placeholder} className="text-long"></input>
);
}

export default Input;