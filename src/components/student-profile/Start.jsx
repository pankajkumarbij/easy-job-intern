import React from "react";
import "./profile.css";
import {  useState } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Label from "./Label";
import Skills from "./Skills"
import Input from "./Input";

const Start=()=>
{
    const [inputFields, setInputFields] = useState([
        {  profileLink:'' },
      ]);

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);
      };

      const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
          if(id === i.id) {
            i[event.target.name] = event.target.value
          }
          return i;
        })
        
        setInputFields(newInputFields);
      }

      const handleAddFields = () => {
        setInputFields([...inputFields, {   profileLink: '' }])
      }

      const handleRemoveFields = id => {
        const values  = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
      }
      return( <>
        <form className="form-main" onSubmit={handleSubmit}>
        <div className="side">
        <label className="label-text">First Name<span>*</span></label><br/>
        <input type="text" placeholder="Enter your first name" className="text-long"></input><br/>
        </div>

        <div className="side">
        <label className="label-text">Last Name<span>*</span></label><br/>
        <input type="text" placeholder="Enter your last name" className="text-long"></input><br/>
        </div>

        <label className="label-text">Studnet Address<span>*</span></label><br/>
        <input type="text" className="text-long" placeholder="Enter your student address"></input><br/>

        <label className="label-text">Github Link<span>*</span></label><br/>
        <input type="text" className="text-long" placeholder="Enter your github link"></input><br/>
        
        
        <label className="label-text">LinkedIn Link<span>*</span></label><br/>
        <input type="text" className="text-long" placeholder="Enter your linkedinlink"></input><br/>

        
        <label className="label-text">other Profile Link<span>*</span></label><br/>
        {/* <input type="text" className="text-long" placeholder="Enter your other profile link"></input> */}


        { inputFields.map(inputField => (
          <div key={inputField.id}>
            <input
              name="profileLink"
              label="Profile Link"
              value={inputField.profileLink}
              className="text-long"
              placeholder="Enter your other profile link"
              onChange={event => handleChangeInput(inputField.id, event)}
            ></input>
            <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={handleAddFields}
            >
              <AddIcon />
            </IconButton>
            </div>
        ))}
        </form><hr></hr>
        </>
      );
}

export default Start;