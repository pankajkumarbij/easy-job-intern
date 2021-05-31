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

function Education({changeValue, Education}) {
  const [inputFields, setInputFields] = useState([
    {
      id: uuidv4(),
      School: "",
      Degree: "",
      FieldOfStudy: "",
      StartDate: "",
      LastDate: "",
      Grade: "",
      Description: "",
    },
  ]);

  useEffect(() => {
    changeValue(inputFields, "Education");
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
        School: "",
        Degree: "",
        FieldOfStudy: "",
        StartDate: "",
        LastDate: "",
        Grade: "",
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
      <h2 className="subHeading">Education</h2>
      <form className="education" onSubmit={handleSubmit}>
        {inputFields.map((inputField) => (
          <div key={inputField.id}>
            <Label value="School" />
            <br />
            <input
              name="school"
              label="School Name"
              placeholder="Ex:Boston University"
              className="text-long"
              value={Education.School}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <br />
            <Label value="Degree" />
            <br />
            <input
              name="degree"
              label="Degree"
              placeholder="Ex:Bachelors"
              className="text-long"
              value={Education.Degree}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <br />
            <Label value="Field of Study" />
            <br />
            <input
              name="FieldOfStudy"
              label="Study "
              placeholder="Ex:Business"
              className="text-long"
              value={Education.FieldOfStudy}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <br />
            <Row className="justify-content-between px-3">
              <div className="side">
                <Label value="Start Date" />
                <br />
                <input
                  name="sd"
                  type="date"
                  label="Star Date"
                  placeholder="Enter Start Date"
                  className="text-long"
                  value={Education.StartDate}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
                <br />
              </div>
              <div className="byside">
                <Label value="Last Date" />
                <br />
                <input
                  name="ld"
                  type="date"
                  label="Last Date"
                  placeholder="Enter Last Date"
                  className="text-long"
                  value={Education.LastDate}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
                <br />
              </div>
            </Row>
            <Label value="Grade" />
            <br />
            <input
              name="grade"
              label="Grade "
              placeholder="Enter Your Grade"
              className="text-long"
              value={inputField.firstName}
              onChange={(event) => handleChangeInput(inputField.id, event)}
            />
            <br />
            <Label value="Description" />
            <br />
            <textarea
              className="textbox"
              name="desc"
              rows="3"
              cols="82"
              label="Description"
              variant="filled"
              value={inputField.firstName}
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

export default Education;
