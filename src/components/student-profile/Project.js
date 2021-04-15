import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';
import "./profile.css";
import Label from "./Label";


function  Project() {
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), project:'', link:'',sd:'', ld:'', desc:'' },
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
    setInputFields([...inputFields, { id: uuidv4(), project:'', link:'',sd:'', ld:'', desc:'' }])
  }

  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }

  return (
    <Container>
      <h2 className="edu">Project</h2>
      <form className="projects" onSubmit={handleSubmit}>
        { inputFields.map(inputField => (
          <div key={inputField.id}>
          <Label value="Project-Title"/><br/>
            <input
              name="project"
              label="Project Name"
              placeholder="Enter Project Title"
              className="text-long"
              value={inputField.firstName}
              onChange={event => handleChangeInput(inputField.id, event)}
            /><br/>
            <Label value="Project-Link"/><br/>
             <input
              name="project"
              label="Project Name"
              placeholder="Enter Project Title"
              className="text-long"
              value={inputField.firstName}
              onChange={event => handleChangeInput(inputField.id, event)}
            /><br/>
            <div className="side">
            <Label value="Start Date"/><br/>
            <input
              name="sd"
              type="date"
              label="Star Date"
              placeholder="Enter Start Date"
              className="text-long"
              value={inputField.firstName}
              onChange={event => handleChangeInput(inputField.id, event)}
            /><br/>
            </div>
            <div className="byside">
            <Label value="Last Date"/><br/>
            <input
              name="ld"
              type="date"
              label="Last Date"
              placeholder="Enter Last Date"
              className="text-long"
              value={inputField.firstName}
              onChange={event => handleChangeInput(inputField.id, event)}
            /><br/>
            </div>
            <Label value="Description"/>
            <textarea
              name="desc" rows="3" cols="82"
              label="Description"
              variant="filled"
              value={inputField.firstName}
              onChange={event => handleChangeInput(inputField.id, event)}
            /><br/>
            <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={handleAddFields}
            >
              <AddIcon />
            </IconButton>
          </div>
        )) }
      </form><hr/>
    </Container>
  );
}

export default Project;