import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import { v4 as uuidv4 } from "uuid";
import "./profile.css";
import Label from "./Label";
import { Row } from "react-bootstrap";

function Project({ Project, changeValue }) {
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      ProjectTitle: "",
      ProjectLink: "",
      StartDate: "",
      LastDate: "",
      Description: "",
    },
  ]);

  useEffect(() => {
    changeValue(inputFields, "Project");
  }, [inputFields]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([
      ...inputFields,
      {
        id: uuidv4(),
        ProjectTitle: "",
        ProjectLink: "",
        StartDate: "",
        LastDate: "",
        Description: "",
      },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  return (
    <>
      <h2 className="subHeading">Project</h2>
      <form className="projects" onSubmit={handleSubmit}>
        {inputFields.map((inputField) => (
          <div key={inputField.id}>
            <Label value="Project-Title" />
            <br />
            <input
              name="ProjectTitle"
              label="Project Name"
              placeholder="Enter Project Title"
              className="text-long"
              value={Project.ProjectTitle}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <br />
            <Label value="Project-Link" />
            <br />
            <input
              name="ProjectLink"
              label="Project Name"
              placeholder="Enter Project Title"
              className="text-long"
              value={Project.ProjectLink}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <br />
            <Row className="justify-content-between px-3">
              <div className="side">
                <Label value="Start Date" />
                <br />
                <input
                  name="StartDate"
                  type="date"
                  label="Star Date"
                  placeholder="Enter Start Date"
                  className="text-long"
                  value={Project.StartDate}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
                <br />
              </div>
              <div className="byside">
                <Label value="Last Date" />
                <br />
                <input
                  name="LastDate"
                  type="date"
                  label="Last Date"
                  placeholder="Enter Last Date"
                  className="text-long"
                  value={Project.LastDate}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
                <br />
              </div>
            </Row>
            <Label value="Description" />
            <textarea
              name="Description"
              rows="3"
              cols="82"
              label="Description"
              variant="filled"
              value={Project.Description}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <br />
            <IconButton
              disabled={inputFields.length === 1}
              onClick={() => handleRemoveFields(inputField.id)}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton onClick={handleAddFields}>
              <AddIcon />
            </IconButton>
          </div>
        ))}
      </form>
      <hr />
    </>
  );
}

export default Project;
