import React from "react";
import "./profile.css";
import {  useState } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Label from "./Label";
import Input from "./Input";



const Volunteer=()=>
{
    const [inputFields, setInputFields] = useState([
        {  volunteer:'' },
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
        setInputFields([...inputFields, {   volunteer:'' }])
      }

      const handleRemoveFields = id => {
        const values  = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
      }

      return (
        <form className="volunteer">
        <h2>Volunteer Experience</h2>
        <Label value="Volunteer Experience"/><br/>
        { inputFields.map(inputField => (
    <div key={inputField.id}>
      <input
        name="volunteer"
        label="volunteer"
        value={inputField.skills}
        className="text-long"
        placeholder="Enter your Skills"
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
          
        <hr/>
      </form>

      );}

      export default Volunteer;