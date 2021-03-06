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

function Experience({Experience, changeValue}) {
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      Company: "",
      Title: "",
      StartDate: "",
      LastDate: "",
      Location: "",
      Description: "",
    },
  ]);

  useEffect(() => {
    changeValue(inputFields, "Experience");
  },[inputFields])

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
        Company: "",
        Title: "",
        StartDate: "",
        LastDate: "",
        Location: "",
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
      <h2 className="subHeading">Experience</h2>
      <form className="experience" onSubmit={handleSubmit}>
        {inputFields.map((inputField) => (
          <div key={inputField.id}>
            <Label value="Company/Organization" />
            <br />
            <input
              name="Company"
              label="Company/organization"
              placeholder="Enter Company/organization Name"
              className="text-long"
              value={Experience.Company}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <br />
            <Label value="Title" />
            <br />
            <input
              name="Title"
              label="Title"
              placeholder="Enter Title"
              className="text-long"
              value={Experience.Title}
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
                  label="Start Date"
                  placeholder="Enter Start Date"
                  className="text-long"
                  value={Experience.StartDate}
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
                  value={Experience.LastDate}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
                <br />
              </div>
            </Row >
            <Label value="Location" />
            <br />
            <input
              name="Location"
              label="Location"
              placeholder="Enter Location"
              className="text-long"
              value={Experience.Location}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <br />
            <Label value="Description" />
            <textarea
              name="Description"
              rows="3"
              cols="82"
              label="Description"
              variant="filled"
              value={Experience.Description}
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

export default Experience;
