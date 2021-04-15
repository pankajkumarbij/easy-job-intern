import React from "react";
import "./profile.css"

const Label=(props)=>
{
    return(
        <label className="label-text ">{props.value}<span>*</span></label>

    );
}

export default Label;